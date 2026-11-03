/* Integração com a API pública TCGdex (https://tcgdex.dev/pt-br).
   - Busca o texto oficial das cartas (em português quando disponível).
   - Fornece HP, estágio, tipos, fraqueza, recuo, marca de regulamento e legalidade.
   - Infere papéis (busca, compra, gust...) a partir do texto oficial em inglês,
     para que o motor entenda cartas que não aparecem nos guias. */

(function () {
  const BASE = "https://api.tcgdex.net/v2";
  const CACHE_KEY = "tcgdex-cache-v1";
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch (e) { cache = {}; }
  function salvar() { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) { /* armazenamento indisponível */ } }

  async function getJSON(url) {
    if (cache[url]) return cache[url];
    const r = await fetch(url);
    if (!r.ok) throw new Error(`TCGdex ${r.status}`);
    const j = await r.json();
    cache[url] = j; salvar();
    return j;
  }

  const enc = s => encodeURIComponent(s);

  /* Encontra a carta pelo nome (e, se houver, código da coleção + número). */
  async function buscarCarta(nome, codigo, numero) {
    let lista = [];
    try { lista = await getJSON(`${BASE}/en/cards?name=eq:${enc(nome)}`); } catch (e) { return null; }
    if (!Array.isArray(lista) || !lista.length) {
      try { lista = await getJSON(`${BASE}/en/cards?name=${enc(nome)}`); } catch (e) { return null; }
      if (!Array.isArray(lista) || !lista.length) return null;
    }
    let candidatos = lista;
    if (numero) {
      const n = String(parseInt(numero, 10));
      const porNumero = lista.filter(c => String(parseInt(c.localId, 10)) === n);
      if (porNumero.length) candidatos = porNumero.concat(lista.filter(c => !porNumero.includes(c)));
    }
    // examina até 6 candidatos procurando o código da coleção
    let primeiro = null;
    for (const c of candidatos.slice(0, 6)) {
      let det;
      try { det = await getJSON(`${BASE}/en/cards/${c.id}`); } catch (e) { continue; }
      if (!primeiro) primeiro = det;
      const ab = await siglaColecao(det.set && det.set.id);
      det.siglaColecao = ab;
      if (!codigo || (ab && ab.toUpperCase() === codigo.toUpperCase())) return det;
    }
    return primeiro;
  }

  async function siglaColecao(setId) {
    if (!setId) return null;
    try { const st = await getJSON(`${BASE}/en/sets/${setId}`); return st.abbreviation && st.abbreviation.official; } catch (e) { return null; }
  }

  /* Regra de reimpressão: se esta versão não é legal no Standard, procura outra
     impressão com o mesmo nome que seja (texto funcionalmente idêntico — confira). */
  async function reimpressaoLegal(nome, idAtual) {
    let lista = [];
    try { lista = await getJSON(`${BASE}/en/cards?name=eq:${enc(nome)}`); } catch (e) { return null; }
    const recentes = lista.filter(c => c.id !== idAtual && /^(sv|me)/.test(c.id)).slice(-8).reverse();
    for (const c of recentes) {
      try { const det = await getJSON(`${BASE}/en/cards/${c.id}`); if (det.legal && det.legal.standard) return det.id; } catch (e) { /* continua */ }
    }
    return null;
  }

  async function traduzir(id) {
    try { return await getJSON(`${BASE}/pt/cards/${id}`); } catch (e) { return null; }
  }

  /* Inferência de papéis pelo texto oficial (inglês). */
  function inferirPapeis(det) {
    const textos = [];
    if (det.effect) textos.push(det.effect);
    (det.abilities || []).forEach(a => textos.push(a.effect || ""));
    (det.attacks || []).forEach(a => textos.push(a.effect || ""));
    const t = textos.join(" ").toLowerCase();
    const p = new Set();
    if (/search your deck/.test(t)) p.add("busca");
    if (/draw (a|\d+|cards?|until)/.test(t)) p.add("compra");
    if (/switch (in )?1 of your opponent's benched|your opponent switches|opponent's benched pokémon .* active spot/.test(t)) p.add("gust");
    if (/switch your active|retreat cost|has no retreat cost/.test(t)) p.add("mobilidade");
    if (/attach .* energy (card )?from your (deck|discard|hand)/.test(t)) p.add("acel");
    if (/from your discard pile into your (hand|deck)|shuffle .* from your discard pile/.test(t)) p.add("recuperacao");
    if (/discard an energy from your opponent|shuffles? (their|his or her) hand|opponent.*discards?.*hand|can't play any item/.test(t)) p.add("disrupcao");
    if (/can't play any item cards/.test(t)) p.add("itemlock");
    if (/damage counters on your opponent's benched|damage to each of your opponent's|benched pokémon.*damage|damage to 1 of your opponent's benched/.test(t)) p.add("spread");
    if (/prevent all (damage|effects)|isn't affected by|benched pokémon can't be/.test(t)) p.add("protecao");
    if (/heal \d+/.test(t)) p.add("cura");
    if (/attacks (used by .* )?do \d+ more damage|\+\d+ damage|more damage/.test(t)) p.add("dano");
    if (det.category === "Pokemon" && (det.attacks || []).some(a => (a.damage && parseInt(a.damage, 10) >= 100) || /for each/.test((a.effect || "").toLowerCase()))) p.add("atacante");
    return [...p];
  }

  function estagio(det) {
    const s = (det.stage || "").toLowerCase();
    if (s === "basic") return 0;
    if (s.includes("1")) return 1;
    if (s.includes("2")) return 2;
    if (det.evolveFrom) return 1;
    return null;
  }

  function premios(det) {
    const n = det.name || "";
    if (/^mega\s/i.test(n) || /vmax|tag team/i.test(n)) return 3;
    if ((det.suffix || "").toLowerCase() === "ex" || /\sex$|-ex$|\sv$|vstar|gx$/i.test(n)) return 2;
    return 1;
  }

  /* Enriquece um deck já parseado (muta as cartas). onProgress(n, total). */
  async function enriquecerDeck(deck, onProgress) {
    const alvo = deck.cartas.filter(c => !c.energiaBasica);
    let i = 0;
    for (const c of alvo) {
      i++;
      if (onProgress) onProgress(i, alvo.length, c.nome);
      const m = (c.linhaOriginal || "").match(/\s([A-Z0-9]{2,5})\s+(\d+)[a-z]?\s*$/i);
      const det = await buscarCarta(c.nome, m && m[1], m && m[2]);
      if (!det) continue;
      const pt = await traduzir(det.id);
      c.dex = {
        id: det.id, nomePT: pt && pt.name, hp: det.hp, tipos: det.types || [], est: estagio(det),
        fraqueza: (det.weaknesses || []).map(w => w.type + " " + (w.value || "")).join(", "),
        resistencia: (det.resistances || []).map(w => w.type + " " + (w.value || "")).join(", "),
        recuo: det.retreat, regulacao: det.regulationMark, legal: det.legal || {}, categoria: det.category,
        trainerType: det.trainerType, imagem: det.image ? det.image + "/low.webp" : null,
        texto: textoCarta(pt && (pt.attacks || pt.abilities || pt.effect) ? pt : det),
        papeisInferidos: inferirPapeis(det)
      };
      if (c.dex.legal.standard === false && det.category !== "Energy") {
        const rp = await reimpressaoLegal(det.name, det.id);
        if (rp) { c.dex.legal = Object.assign({}, c.dex.legal, { standard: true }); c.dex.reimpressao = rp; }
      }
      // aplica dados oficiais
      if (c.cat === "?") c.cat = det.category === "Pokemon" ? "P" : det.category === "Energy" ? "E" : "T";
      if (det.category === "Pokemon") {
        if (c.est === null) c.est = c.dex.est;
        c.premios = premios(det);
        if (det.hp && det.hp <= 60) c.fragil = true;
        c.tipos = c.dex.tipos;
      }
      if (!c.info) {
        c.papeis = c.dex.papeisInferidos;
        if (/ace spec/i.test(det.rarity || "") || /ace spec/i.test(det.effect || "")) c.ace = true;
        c.conhecida = true;
        c.inferida = true;
      }
    }
    return deck;
  }

  function textoCarta(d) {
    const out = [];
    (d.abilities || []).forEach(a => out.push(`[${a.type || "Habilidade"}] ${a.name}: ${a.effect || ""}`));
    (d.attacks || []).forEach(a => out.push(`${(a.cost || []).join("/") || "—"} · ${a.name}${a.damage ? " " + a.damage : ""}${a.effect ? ": " + a.effect : ""}`));
    if (d.effect) out.push(d.effect);
    return out.join("\n");
  }

  async function detalharPorNome(nome) {
    const det = await buscarCarta(nome);
    if (!det) return null;
    const pt = await traduzir(det.id);
    return { det, pt };
  }

  window.TCGdex = { buscarCarta, enriquecerDeck, detalharPorNome, inferirPapeis, textoCarta };
})();
