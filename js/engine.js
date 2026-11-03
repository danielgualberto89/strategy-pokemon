/* Motor de análise de decks.
   1) lê uma lista (formato Pokémon TCG Live / Limitless);
   2) valida as regras de construção;
   3) identifica o arquétipo mais parecido com os decks dos guias;
   4) mede os papéis das cartas (busca, compra, gust...) contra as listas de referência;
   5) gera um plano de jogo, recomendação de 1º/2º, prize map, matchups e techs. */

(function () {
  const CARDS = window.CARDS, DECKS = window.DECKS, EXTRA = window.ARQUETIPOS_EXTRA;
  const norm = s => s.toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ").trim();

  /* ---------------- Parser ---------------- */
  function parseList(texto) {
    const linhas = texto.split(/\r?\n/);
    let secao = null;
    const cartas = [];
    const ignoradas = [];
    for (let raw of linhas) {
      const l = raw.trim();
      if (!l) continue;
      const h = l.match(/^(pok[eé]mon|trainers?|treinadores?|energ(y|ia|ias|ies))\b\s*[:\-–(]?\s*\d*\)?\s*$/i);
      if (h) { const k = h[1].toLowerCase(); secao = k.startsWith("pok") ? "P" : k.startsWith("tr") ? "T" : "E"; continue; }
      if (/^(total|deck|\*\*|__|\[)/i.test(l)) continue;
      const m = l.match(/^(\d+)\s*x?\s+(.+?)$/i);
      if (!m) { ignoradas.push(l); continue; }
      let qtd = parseInt(m[1], 10);
      let nome = m[2].trim();
      const linhaOriginal = l;
      // remove código de coleção + número (ex.: "TWM 130", "SVE 12", "PR-SV 101")
      nome = nome.replace(/\s+[A-Z0-9]{2,5}(-[A-Z]{1,3})?\s+\d+[a-z]?$/i, "").replace(/\s+\d+$/, "").trim();
      cartas.push({ qtd, nome, secao, linhaOriginal });
    }
    // junta repetidas
    const mapa = {};
    for (const c of cartas) {
      const k = norm(c.nome);
      if (!mapa[k]) mapa[k] = { ...c, chave: k };
      else mapa[k].qtd += c.qtd;
    }
    return { cartas: Object.values(mapa).map(enriquecer), ignoradas };
  }

  function energiaBasica(nome) {
    const n = norm(nome).replace(/^basic\s+/, "");
    const m = n.match(/^(\{?[a-z]+\}?)\s+energy$/);
    return !!(m && window.ENERGIAS_BASICAS.includes(m[1]));
  }

  function premiosPorNome(nome) {
    if (/^mega\s|\bvmax\b|tag team/i.test(nome)) return 3;
    if (/\sex$|-ex$|\sv$|vstar|-gx$|\sgx$/i.test(nome)) return 2;
    return 1;
  }

  function enriquecer(c) {
    const info = CARDS[c.chave] || CARDS[c.chave.replace(/^basic\s+/, "")] || null;
    let cat = c.secao || (info && info.cat) || (/energy$/i.test(c.nome) ? "E" : null);
    const basicaE = cat === "E" && energiaBasica(c.nome) && !(info && info.cat === "E");
    return {
      ...c,
      cat: cat || "?",
      info,
      conhecida: !!info || basicaE,
      energiaBasica: basicaE,
      papeis: info ? info.papeis || [] : [],
      ace: !!(info && info.ace),
      est: info && info.est !== undefined ? info.est : null,
      premios: info && info.premios ? info.premios : (cat === "P" ? premiosPorNome(c.nome) : 0),
      fragil: !!(info && info.fragil)
    };
  }

  /* ---------------- Validação ---------------- */
  function validar(deck) {
    const erros = [], avisos = [];
    const total = deck.cartas.reduce((s, c) => s + c.qtd, 0);
    if (total !== 60) erros.push(`O deck tem ${total} cartas — precisa ter exatamente 60.`);
    for (const c of deck.cartas) {
      if (c.qtd > 4 && !c.energiaBasica) erros.push(`${c.qtd}× ${c.nome}: máximo de 4 cópias por nome (exceto energia básica).`);
    }
    const aces = deck.cartas.filter(c => c.ace);
    const nAce = aces.reduce((s, c) => s + c.qtd, 0);
    if (nAce > 1) erros.push(`Há ${nAce} ACE SPEC (${aces.map(a => a.nome).join(", ")}) — só pode 1 no deck inteiro.`);
    if (nAce === 0) avisos.push("Nenhum ACE SPEC reconhecido. Quase toda lista competitiva usa um (Secret Box, Unfair Stamp, Prime Catcher, Legacy Energy, Sparkling Crystal, Enriching Energy, Hero's Cape, Maximum Belt...).");
    const basicos = deck.cartas.filter(c => c.cat === "P" && c.est === 0);
    const pokemonDesconhecidos = deck.cartas.filter(c => c.cat === "P" && c.est === null);
    if (!basicos.length && !pokemonDesconhecidos.length) erros.push("Nenhum Pokémon Básico — o deck precisa de pelo menos 1.");
    const desconhecidas = deck.cartas.filter(c => !c.conhecida);
    if (desconhecidas.length) avisos.push(`Cartas fora da base de conhecimento (análise parcial): ${desconhecidas.map(c => c.nome).join(", ")}.`);
    const ilegais = deck.cartas.filter(c => c.dex && c.dex.legal && c.dex.legal.standard === false);
    if (ilegais.length) avisos.push(`Segundo o TCGdex, a versão encontrada destas cartas NÃO é legal no Standard: ${ilegais.map(c => c.nome).join(", ")} (confira se existe reimpressão legal).`);
    const marcas = deck.cartas.filter(c => c.dex && c.dex.regulacao && !["H", "I", "J"].includes(c.dex.regulacao) && !c.energiaBasica && !c.dex.reimpressao && c.dex.legal.standard !== false);
    const reimp = deck.cartas.filter(c => c.dex && c.dex.reimpressao);
    if (reimp.length) avisos.push(`Versão listada saiu do Standard, mas existe reimpressão legal com o mesmo nome: ${reimp.map(c => `${c.nome} (${c.dex.reimpressao})`).join(", ")} — confira se o texto é idêntico.`);
    if (marcas.length) avisos.push(`Marca de regulamento fora de H/I/J (Standard): ${marcas.map(c => `${c.nome} (${c.dex.regulacao})`).join(", ")}.`);
    const inferidas = deck.cartas.filter(c => c.inferida);
    if (inferidas.length) avisos.push(`Papéis inferidos pelo texto oficial (TCGdex): ${inferidas.map(c => `${c.nome} → ${c.papeis.join("/") || "sem papel claro"}`).join("; ")}.`);
    if (deck.ignoradas.length) avisos.push(`Linhas não entendidas: ${deck.ignoradas.slice(0, 5).join(" | ")}${deck.ignoradas.length > 5 ? "…" : ""}`);
    return { total, erros, avisos, nAce };
  }

  /* ---------------- Métricas ---------------- */
  function contar(deck, fn) { return deck.cartas.filter(fn).reduce((s, c) => s + c.qtd, 0); }
  function tem(deck, nome) { const k = norm(nome); return deck.cartas.find(c => c.chave === k || c.chave.includes(k)); }
  function qtdDe(deck, nome) { const c = tem(deck, nome); return c ? c.qtd : 0; }

  function metricas(deck) {
    const papel = p => contar(deck, c => c.papeis.includes(p));
    const pokemons = deck.cartas.filter(c => c.cat === "P");
    const atacantes = pokemons.filter(c => c.papeis.includes("atacante"));
    const m = {
      pokemon: contar(deck, c => c.cat === "P"),
      trainers: contar(deck, c => c.cat === "T"),
      energias: contar(deck, c => c.cat === "E"),
      energiasBasicas: contar(deck, c => c.energiaBasica),
      supporters: contar(deck, c => c.info && c.info.sub === "supporter"),
      busca: papel("busca"), compra: papel("compra"), gust: papel("gust"), mobilidade: papel("mobilidade"),
      acel: papel("acel"), recuperacao: papel("recuperacao"), disrupcao: papel("disrupcao"),
      itemlock: papel("itemlock"), spread: papel("spread"), protecao: papel("protecao"), cura: papel("cura"), dano: papel("dano"),
      estadios: contar(deck, c => c.info && c.info.sub === "estadio"),
      fragil: contar(deck, c => c.fragil),
      stage2: pokemons.some(c => c.est === 2 && c.qtd >= 2),
      stage1: pokemons.some(c => c.est === 1),
      ruleBox: contar(deck, c => c.cat === "P" && c.premios >= 2),
      mega: contar(deck, c => c.cat === "P" && c.premios >= 3),
      atacantes,
      atacantesRuleBox: atacantes.filter(c => c.premios >= 2),
      atacantesSingle: atacantes.filter(c => c.premios === 1),
      hammer: qtdDe(deck, "Crushing Hammer")
    };
    // atacantes principais = os de 2+ cópias (techs de 1 cópia não definem o estilo)
    m.principais = atacantes.filter(c => c.qtd >= 2);
    if (!m.principais.length) m.principais = atacantes;
    m.singlePrize = m.principais.length > 0 && m.principais.every(c => c.premios === 1);
    m.bigBasics = atacantes.length > 0 && atacantes.every(c => c.est === 0) && m.atacantesRuleBox.length >= 2;
    return m;
  }

  /* ---------------- Arquétipo ---------------- */
  function arquetipos(deck) {
    const nomes = new Set(deck.cartas.map(c => c.chave));
    const res = DECKS.map(d => {
      const sig = d.assinatura.map(norm);
      const hits = sig.filter(s => [...nomes].some(n => n === s || n.startsWith(s)));
      return { deck: d, score: hits.length / sig.length, hits };
    }).sort((a, b) => b.score - a.score);
    return res;
  }

  function diffComLista(deck, ref) {
    if (!ref.lista) return null;
    const r = parseList(ref.lista.texto).cartas;
    const meu = Object.fromEntries(deck.cartas.map(c => [c.chave, c.qtd]));
    const dele = Object.fromEntries(r.map(c => [c.chave, c.qtd]));
    const faltam = [], sobram = [];
    for (const [k, q] of Object.entries(dele)) { const mq = meu[k] || 0; if (mq < q) faltam.push(`${q - mq}× ${r.find(c => c.chave === k).nome}`); }
    for (const [k, q] of Object.entries(meu)) { const dq = dele[k] || 0; if (q > dq) sobram.push(`${q - dq}× ${deck.cartas.find(c => c.chave === k).nome}`); }
    return { faltam, sobram, titulo: ref.lista.titulo };
  }

  /* ---------------- Recomendações de construção ---------------- */
  function conselhosConstrucao(deck, m) {
    const out = [];
    const linhaPrincipal = deck.cartas.filter(c => c.cat === "P" && c.papeis.includes("atacante")).sort((a, b) => b.qtd - a.qtd)[0];
    if (m.busca + m.compra < 12) out.push(["Consistência baixa", `Só ${m.busca + m.compra} cartas de busca/compra reconhecidas. As listas dos guias usam ~15–25 (4 Poffin/Ultra Ball/Poké Pad, 4 Lillie's, motores como Drakloak/Dudunsparce/Lunatone/Kangaskhan).`]);
    if (m.gust < 2) out.push(["Pouco gust", `Só ${m.gust} carta(s) de gust. Quase todos os guias usam 3–4 Boss's Orders (ou Prime Catcher, Counter Catcher, Hariyama). Gust é o que fecha prize maps.`]);
    else if (m.gust > 6) out.push(["Muito gust", `${m.gust} cartas de gust — confira se não falta consistência.`]);
    if (m.recuperacao < 1) out.push(["Sem recuperação", "Nenhuma Night Stretcher/Super Rod/Tulip/Lana's Aid. 2–3 recuperações aparecem em praticamente todas as listas."]);
    if (m.stage2 && qtdDe(deck, "Rare Candy") === 0 && !tem(deck, "Dawn")) out.push(["Stage 2 sem atalho", "Seu deck tem Stage 2 sem Rare Candy: tudo bem se você evolui manualmente (como Dragapult e Alakazam), mas tenha 4 do Stage 1 e motor de compra."]);
    if (m.energias > 14) out.push(["Energia demais?", `${m.energias} energias. Listas atuais usam 5–13 (a maioria 7–9) graças a busca e aceleração.`]);
    if (m.energias < 5 && !tem(deck, "Wondrous Patch")) out.push(["Energia de menos?", `${m.energias} energias. Só Alakazam (com Wondrous Patch e recursão) roda tão pouco.`]);
    if (m.supporters < 6) out.push(["Poucos Supporters", `${m.supporters} Supporters reconhecidos. Você precisa de um Supporter útil quase todo turno.`]);
    if (linhaPrincipal && linhaPrincipal.qtd < 3) out.push(["Atacante principal fino", `${linhaPrincipal.qtd}× ${linhaPrincipal.nome}. Linhas principais costumam ter 3–4 cópias para não 'prizar'.`]);
    if (m.ruleBox >= 6 && !m.bigBasics) out.push(["Muitos alvos de vários prêmios", `${m.ruleBox} Pokémon de 2–3 prêmios. Cada um no banco é um alvo de Boss — banque com cuidado.`]);
    if (m.fragil >= 3) out.push(["Pokémon frágeis", "Vários Pokémon de HP baixo (≤60) — Phantom Dive, Dusknoir e Froslass vão castigar. Considere Battle Cage/Patrat/Shaymin."]);
    return out;
  }

  /* ---------------- Plano de jogo ---------------- */
  function planoDeJogo(deck, m, arq) {
    const motores = deck.cartas.filter(c => c.papeis.includes("motor") || (c.papeis.includes("compra") && c.cat === "P")).map(c => c.nome);
    const atacantes = m.principais.slice().sort((a, b) => b.qtd - a.qtd).map(c => c.nome).concat(m.atacantes.filter(c => !m.principais.includes(c)).map(c => c.nome));
    const buscas = deck.cartas.filter(c => c.cat === "T" && c.papeis.includes("busca") && c.info.sub === "item").map(c => c.nome);
    const t1 = [];
    if (tem(deck, "Lunatone") && tem(deck, "Solrock")) t1.push("Prioridade absoluta: Lunatone + Solrock no banco (Lunar Cycle a partir do T1).");
    if (tem(deck, "Team Rocket's Proton")) t1.push("Team Rocket's Proton no T1 (pode usar indo 1º) para 2 Murkrow + 1 Porygon/Articuno.");
    if (buscas.length) t1.push(`Use as buscas (${buscas.slice(0, 4).join(", ")}) para colocar 2–3 básicos da linha principal no banco.`);
    if (motores.length) t1.push(`Coloque o motor de compra em campo: ${[...new Set(motores)].slice(0, 3).join(", ")}.`);
    if (m.itemlock) t1.push("Prepare o item lock (Budew/Frillish) para o oponente não jogar Itens no turno dele.");
    if (tem(deck, "Festival Grounds")) t1.push("Tenha Festival Grounds e um Pokémon Festival Lead no ativo para atacar duas vezes.");
    t1.push("Faça o prize check na primeira busca: o que preciso para T1 e T2 está nos prêmios?");

    const t2 = [];
    if (m.stage2 || m.stage1) t2.push("Evolua o máximo de Pokémon possível (lembre: não dá para evoluir no turno em que entraram).");
    if (atacantes.length) t2.push(`Comece a pressão com ${atacantes[0]}${atacantes[1] ? ` e deixe ${atacantes[1]} sendo preparado no banco` : ""}.`);
    if (m.acel) t2.push("Use a aceleração (" + deck.cartas.filter(c => c.papeis.includes("acel")).map(c => c.nome).slice(0, 3).join(", ") + ") para não depender de 1 energia por turno.");
    t2.push("Use habilidades de compra/busca ANTES de escolher o Supporter (mais informação).");

    const meio = [
      "Antes de atacar: qual é a melhor resposta do oponente? Vale o risco? (risk premium)",
      "Tenha sempre o próximo atacante pronto antes do ativo cair.",
      m.ruleBox ? "Não deixe Pokémon de 2–3 prêmios expostos sem necessidade (Boss)." : "Seu deck é de 1 prêmio: obrigue o oponente a fazer 6 KOs e mire os alvos de 2 prêmios dele.",
      m.spread ? "Espalhe dano pensando nos KOs duplos dos próximos turnos." : "Sem spread próprio: escolha alvos que o deixem sem atacante seguinte."
    ];
    const final = [
      m.gust ? `Guarde gust (${deck.cartas.filter(c => c.papeis.includes("gust")).map(c => c.nome).slice(0, 2).join(", ")}) para o turno que fecha o jogo.` : "Sem gust: você depende do que o oponente promover — considere adicionar Boss's Orders.",
      m.disrupcao ? "Use a disrupção (Stamp/Red Card/Judge/Hammer) no turno em que o oponente mais depende de cartas." : "Mantenha outs contra disrupção (motores no banco, Meowth ex + Ultra Ball).",
      "Conte recursos restantes (Boss, energias, recuperações, atacantes)."
    ];
    return { t1, t2, meio, final };
  }

  function primeiroOuSegundo(deck, m, arq) {
    if (arq && arq.score >= 0.5) return { escolha: arq.deck.primeiroOuSegundo, motivo: `Recomendação do guia de ${arq.deck.nome}.` };
    if (tem(deck, "Team Rocket's Proton") || tem(deck, "Festival Grounds")) return { escolha: "1º", motivo: "Seu deck consegue atacar/montar forte no T1–T2 indo primeiro." };
    if (m.stage2 && m.itemlock) return { escolha: "2º", motivo: "Stage 2 com item lock: ir 2º dá Supporter no T1 para montar antes de travar o oponente (como no mirror de Dragapult)." };
    if (m.stage2 && !m.bigBasics) return { escolha: "2º (exceto contra decks lentos de Fan Rotom/Noctowl)", motivo: "Decks Stage 2 sofrem com setup fraco; o Supporter do T1 ajuda (lógica do Alakazam)." };
    if (m.bigBasics || (!m.stage1 && !m.stage2)) return { escolha: "1º", motivo: "Básicos agressivos querem atacar já no T2 e tomar a frente no prize trade." };
    return { escolha: "1º (2º contra Budew/Frillish)", motivo: "Padrão dos guias: ir 1º, exceto contra item lock no T1 (lógica do Okidogi)." };
  }

  function prizeMap(deck, m) {
    const out = [];
    if (m.singlePrize) {
      out.push("Você é um deck de 1 prêmio: o oponente precisa de 6 KOs. Mire os 2–3 prêmios dele (Kangaskhan, Meowth ex, Fezandipiti ex, Latias ex, Megas).");
      out.push("Mapas típicos: 1-2-3 contra decks Mega; 2-2-2 contra ex; contra outros one-prizers, tome o PRIMEIRO prêmio e conte a manutenção.");
    } else if (m.mega) {
      out.push("Seus Megas entregam 3 prêmios: o oponente precisa de só 2 KOs neles. Proteja-os (Hero's Cape, Wally's Compassion, Legacy Energy) e use atacantes de 1 prêmio como tanque quando possível.");
      out.push("Mapa típico: 3-3 contra outros Megas; 1-1-2-2 contra Dragapult (Budew, Drakloak, Dragapult ex, Meowth/Fez).");
    } else {
      out.push("Atacantes de 2 prêmios: planeje 3 KOs de 2 prêmios (2-2-2) ou abra com KOs de 1 prêmio quando o oponente tiver Budew/Dreepy/Abra expostos (1-1-2-2).");
    }
    if (m.spread) out.push("Seu spread permite KOs duplos: deixe alvos com dano 'na conta' para fechar 2 prêmios num turno.");
    return out;
  }

  /* ---------------- Matchups estimados ---------------- */
  const TIPOS = {
    grass: ["teal mask ogerpon ex", "dipplin", "hydrapple ex", "iron leaves ex", "crustle", "mega venusaur ex", "cynthia's roserade"],
    dark: ["n's zoroark ex", "pecharunt ex", "yveltal", "mega sharpedo ex", "carvanha", "team rocket's honchkrow", "mega absol ex", "munkidori"],
    fighting: ["mega lucario ex", "okidogi", "cynthia's garchomp ex", "koraidon", "solrock", "hariyama"],
    psychic: ["alakazam", "mew ex", "lillie's clefairy ex", "dhelmise", "banette", "mega diancie ex", "slowking", "spiritomb"]
  };
  const TIPO_DEX = { grass: "Grass", dark: "Darkness", fighting: "Fighting", psychic: "Psychic" };
  function temTipo(deck, tipo) {
    return deck.cartas.some(c => c.papeis.includes("atacante") && (TIPOS[tipo].includes(c.chave) || (c.tipos || []).includes(TIPO_DEX[tipo])));
  }

  const REGRAS_MATCHUP = {
    "dragapult": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (m.fragil >= 3) { r--; why.push("vários Pokémon de HP ≤60 morrem para os contadores do Phantom Dive"); }
      if (tem(d, "Battle Cage") || tem(d, "Patrat")) { r++; why.push("Battle Cage/Patrat seguram o spread"); } else tech.push("Battle Cage ou Patrat");
      if (tem(d, "Lillie's Clefairy ex")) { r++; why.push("Lillie's Clefairy ex coloca fraqueza no Dragapult"); } else tech.push("Lillie's Clefairy ex (fraqueza Psychic)");
      if (m.singlePrize) { r++; why.push("one-prizer força 6 KOs"); }
      if (m.acel === 0 && !m.singlePrize) { r--; why.push("sem aceleração, os Crushing Hammer doem"); tech.push("aceleração (Crispin, Toxtricity, Energy Switch)"); }
      if (tem(d, "Psyduck")) why.push("Psyduck anula Dusknoir (variante)");
      return { r, why, tech };
    },
    "basic-box": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (tem(d, "Crustle")) { r += 2; why.push("Crustle não recebe dano dos atacantes ex deles"); }
      if (tem(d, "Mega Manectric ex")) { r++; why.push("Flash Ray anula ataques de básicos"); }
      if (m.singlePrize) { r++; why.push("eles dependem de alvos de 2–3 prêmios"); }
      if (m.fragil >= 3 && !tem(d, "Shaymin")) { r--; why.push("Wellspring/Iron Crown pegam o banco frágil"); tech.push("Shaymin (anti-Wellspring)"); }
      if (m.mega && !m.singlePrize) why.push("prize race entre Megas: tenha resposta ao Kangaskhan");
      return { r, why, tech };
    },
    "alakazam": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (tem(d, "Mist Energy") || tem(d, "Rocky Fighting Energy")) { r++; why.push("Mist/Rocky Energy anulam o Powerful Hand"); } else tech.push("Mist Energy (anula contadores)");
      if (temTipo(d, "dark")) { r++; why.push("atacantes Dark batem em fraqueza"); }
      if (m.ruleBox >= 4 && !m.singlePrize) { r--; why.push("Alakazam troca 1 prêmio pelos seus 2–3"); }
      if (tem(d, "Banette") || tem(d, "Iron Crown ex")) { r++; why.push("Banette/Iron Crown punem os Abra"); }
      if (m.disrupcao >= 3) { r++; why.push("disrupção de mão encolhe o dano deles"); }
      return { r, why, tech };
    },
    "slowking": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (tem(d, "Shaymin")) { r++; why.push("Shaymin protege do Trifrost"); } else if (m.fragil >= 2 || m.singlePrize) { r--; why.push("Trifrost varre básicos de HP baixo"); tech.push("Shaymin"); }
      if (temTipo(d, "dark")) { r++; why.push("Slowking é fraco a Dark"); }
      if (m.itemlock) { r++; why.push("item lock bloqueia o Wondrous Patch"); }
      if (m.hammer) { r++; why.push("Hammers nas energias dos Slowpoke"); }
      return { r, why, tech };
    },
    "festival-lead": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (m.spread) { r++; why.push("spread castiga os Pokémon de baixo HP deles"); } else tech.push("spread (Risky Ruins, Munkidori, Froslass)");
      if (m.ruleBox >= 4 && !m.singlePrize) { r--; why.push("eles trocam 1 prêmio pelos seus 2–3"); }
      if (deck_temFracoGrass(d)) { r--; why.push("seus atacantes são fracos a Grass"); }
      if (tem(d, "Mega Excadrill ex")) { r++; why.push("Metal resiste a Grass"); }
      return { r, why, tech };
    },
    "hide-n-sneak": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (tem(d, "Mega Lucario ex")) { r -= 2; why.push("Dhelmise faz OHKO no Lucario"); }
      else if (m.mega) { r--; why.push("Dhelmise (1 prêmio) troca muito bem contra Megas"); }
      if (temTipo(d, "dark")) { r++; why.push("Dhelmise é fraco a Dark"); }
      if (tem(d, "Genesect")) { r++; why.push("Genesect anula a Legacy Energy"); } else tech.push("Genesect (anula ACE SPEC/Legacy)");
      if (m.singlePrize) why.push("one-prizer x one-prizer: tome o 1º prêmio");
      return { r, why, tech };
    },
    "crustle": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (m.atacantes.length && m.atacantesSingle.length === 0) { r -= 2; why.push("todos os seus atacantes são ex — Crustle não recebe dano deles"); tech.push("um atacante sem Rule Box"); }
      else if (m.atacantesSingle.length) { r++; why.push("atacantes de 1 prêmio passam pela parede"); }
      if (tem(d, "Enhanced Hammer")) { r++; why.push("Enhanced Hammer tira Mist Energy"); }
      if (m.disrupcao >= 3) { r++; why.push("disrupção tira Jumbo Ice Cream da mão"); }
      if (tem(d, "Mega Lopunny ex") || tem(d, "Team Rocket's Honchkrow")) { r++; why.push("resposta conhecida a Crustle"); }
      return { r, why, tech };
    },
    "zoroark": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (temTipo(d, "grass")) { r++; why.push("Zoroark é fraco a Grass"); }
      if (temTipo(d, "fighting")) { r++; why.push("Pecharunt ex/Fezandipiti ex deles são fracos a Fighting"); }
      if (m.singlePrize) { r++; why.push("Zoroark sofre contra one-prizers"); }
      if (m.fragil >= 3 && !tem(d, "Shaymin")) { r--; why.push("Darmanitan (90 no banco) e Munkidori castigam o banco"); tech.push("Shaymin (anti-Darmanitan)"); }
      return { r, why, tech };
    },
    "mega-lucario": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (m.singlePrize) { r++; why.push("Lucario entrega 3 prêmios e sofre contra one-prizers"); }
      if (tem(d, "Dhelmise")) { r++; why.push("Dhelmise faz OHKO"); }
      if (temTipo(d, "psychic")) { r++; why.push("Lucario é fraco a Psychic"); }
      if (temTipo(d, "fighting") && tem(d, "Team Rocket's Honchkrow")) r++;
      if (m.mega && !m.singlePrize) why.push("prize race 3-3: quem acerta o primeiro OHKO");
      return { r, why, tech };
    },
    "honchkrow": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (temTipo(d, "fighting") && m.atacantes.every(c => TIPOS.fighting.includes(c.chave))) { r--; why.push("Murkrow/Honchkrow resistem a Fighting"); }
      if (tem(d, "Kyurem") || tem(d, "Froslass")) { r++; why.push("spread nos básicos deles (sem Shaymin)"); }
      if (m.atacantes.length && m.atacantesSingle.length === 0) { r--; why.push("eles trocam 1 prêmio pelos seus 2"); }
      if (tem(d, "Crustle")) { r -= 2; why.push("Crustle não para Honchkrow (não é ex)"); }
      return { r, why, tech };
    },
    "excadrill": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (temTipo(d, "grass")) { r--; why.push("Excadrill resiste a Grass"); }
      if (tem(d, "Mega Lucario ex")) { r++; why.push("340 HP: Excadrill não faz OHKO sem modificador"); }
      if (tem(d, "Crustle")) { r -= 2; why.push("Metagross não é ex"); }
      if (m.disrupcao >= 3) { r++; why.push("Judge cedo limita Metang/Metagross"); }
      return { r, why, tech };
    },
    "grimmsnarl": (d, m) => {
      let r = 0; const why = [], tech = [];
      if (tem(d, "Shaymin") || tem(d, "Patrat")) { r++; why.push("Shaymin/Patrat seguram Froslass + Munkidori"); } else tech.push("Shaymin e/ou Patrat");
      if (m.fragil >= 3) { r--; why.push("Froslass pinga seus Pokémon de baixo HP"); }
      if (temTipo(d, "grass")) { r++; why.push("Grimmsnarl é fraco a Grass"); }
      return { r, why, tech };
    }
  };
  function deck_temFracoGrass(d) { return ["n's zoroark ex", "cynthia's garchomp ex"].some(n => d.cartas.some(c => c.chave === n)); }

  const META = ["dragapult", "basic-box", "alakazam", "slowking", "festival-lead", "hide-n-sneak", "crustle", "zoroark", "mega-lucario", "honchkrow", "excadrill", "grimmsnarl"];

  function nomeDeck(id) { const d = DECKS.find(x => x.id === id); return d ? d.nome : (EXTRA[id] ? EXTRA[id].nome : id); }

  function matchups(deck, m, arq) {
    const usarGuia = arq && arq.score >= 0.5 ? arq.deck : null;
    return META.map(id => {
      const h = REGRAS_MATCHUP[id] ? REGRAS_MATCHUP[id](deck, m) : { r: 0, why: [], tech: [] };
      let r = Math.max(-2, Math.min(2, h.r)), plano = "", fonte = "estimativa";
      if (arq && arq.score >= 0.5 && arq.deck.id === id && !(usarGuia && usarGuia.matchups[id])) { r = 0; plano = "Mirror: decidido por quem monta primeiro e administra melhor os recursos."; }
      if (usarGuia && usarGuia.matchups[id]) { r = usarGuia.matchups[id].r; plano = `${usarGuia.matchups[id].p} (ir ${usarGuia.matchups[id].ir})`; fonte = "guia"; }
      // ponto de vista do oponente, quando o guia dele fala do seu arquétipo
      const oponente = DECKS.find(x => x.id === id);
      let visaoOponente = "";
      if (oponente && usarGuia && oponente.matchups[usarGuia.id]) visaoOponente = oponente.matchups[usarGuia.id].p;
      return { id, nome: nomeDeck(id), r, motivos: h.why, techs: h.tech, plano, fonte, visaoOponente };
    });
  }

  function techsSugeridas(mus, m) {
    const cont = {};
    for (const mu of mus) if (mu.r <= 0) for (const t of mu.techs) cont[t] = (cont[t] || []).concat(mu.nome);
    return Object.entries(cont).sort((a, b) => b[1].length - a[1].length).map(([t, ds]) => ({ tech: t, contra: ds }));
  }

  function identidade(m, arq) {
    const partes = [];
    if (m.singlePrize) partes.push("deck de 1 prêmio");
    else if (m.principais.some(c => c.premios >= 3)) partes.push("deck com Mega Evolution ex (3 prêmios)");
    else if (m.bigBasics) partes.push("Big Basics (atacantes básicos de 2 prêmios)");
    else partes.push("deck de atacantes de 2 prêmios");
    if (m.stage2) partes.push("com linha Stage 2");
    else if (m.stage1) partes.push("com evoluções Stage 1");
    if (m.itemlock) partes.push("item lock");
    if (m.spread) partes.push("spread de dano");
    if (m.disrupcao >= 4) partes.push("muita disrupção");
    if (m.protecao >= 3) partes.push("proteção de banco");
    let t = "Seu deck é um " + partes.join(", ") + ".";
    if (arq && arq.score >= 0.5) t += ` Ele se parece com **${arq.deck.nome}** (${Math.round(arq.score * 100)}% das cartas-assinatura).`;
    else if (arq && arq.score >= 0.3) t += ` Tem elementos de ${arq.deck.nome}, mas é uma construção própria — as recomendações abaixo são geradas pelo motor a partir dos princípios dos guias.`;
    else t += " É uma construção nova: o motor aplica os princípios gerais dos guias.";
    return t;
  }

  function checklistPrize(deck) {
    return deck.cartas.filter(c => c.qtd <= 2 && (c.ace || c.papeis.some(p => ["atacante", "motor", "gust", "protecao", "acel"].includes(p)) || c.cat === "T" && c.info && c.info.sub === "estadio"))
      .map(c => `${c.qtd}× ${c.nome}`);
  }

  function analisar(texto) { return analisarDeck(parseList(texto)); }

  function analisarDeck(deck) {
    const val = validar(deck);
    const m = metricas(deck);
    const arqs = arquetipos(deck);
    const arq = arqs[0];
    const mus = matchups(deck, m, arq);
    return {
      deck, val, m, arqs: arqs.slice(0, 3), arq,
      identidade: identidade(m, arq),
      diff: arq && arq.score >= 0.5 ? diffComLista(deck, arq.deck) : null,
      conselhos: conselhosConstrucao(deck, m),
      plano: planoDeJogo(deck, m, arq),
      ordem: primeiroOuSegundo(deck, m, arq),
      prize: prizeMap(deck, m),
      matchups: mus,
      techs: techsSugeridas(mus, m),
      prizeCheck: checklistPrize(deck)
    };
  }

  /* ---------------- Esqueletos para criar decks novos ---------------- */
  const ESQUELETOS = {
    stage2: {
      nome: "Motor Stage 2 (estilo Dragapult/Alakazam)",
      desc: "Linha 4-4-3 evoluída manualmente, motor de compra no Stage 1, muita busca de básicos.",
      cartas: (a, b, c) => [
        ["P", 4, a.basico], ["P", 4, a.stage1], ["P", 3, a.final],
        ["P", 2, "Dunsparce"], ["P", 2, "Dudunsparce"], ["P", 1, "Fezandipiti ex"], ["P", 1, "Meowth ex"],
        ["T", 4, "Lillie's Determination"], ["T", 3, "Boss's Orders"], ["T", 2, "Hilda"], ["T", 1, "Judge"],
        ["T", 4, "Buddy-Buddy Poffin"], ["T", 4, "Ultra Ball"], ["T", 3, "Poké Pad"], ["T", 2, "Rare Candy"], ["T", 3, "Night Stretcher"], ["T", 1, "Super Rod"], ["T", 1, "Counter Catcher"],
        ["T", 1, "Unfair Stamp"], ["T", 2, "Special Red Card"], ["T", 2, "Battle Cage"], ["T", 2, "Switch"],
        ["E", 8, a.energia]
      ]
    },
    stage1: {
      nome: "Stage 1 agressivo (estilo Zoroark/Lucario)",
      desc: "Linha 4-4, básicos de suporte e modificadores de dano.",
      cartas: (a) => [
        ["P", 4, a.basico], ["P", 4, a.stage1 || a.final], ["P", 2, "Lunatone"], ["P", 2, "Solrock"], ["P", 1, "Fezandipiti ex"], ["P", 1, "Meowth ex"],
        ["T", 4, "Lillie's Determination"], ["T", 4, "Boss's Orders"], ["T", 2, "Hilda"], ["T", 1, "Judge"],
        ["T", 4, "Buddy-Buddy Poffin"], ["T", 4, "Ultra Ball"], ["T", 2, "Poké Pad"], ["T", 2, "Night Stretcher"], ["T", 2, "Air Balloon"], ["T", 1, "Switch"],
        ["T", 1, "Unfair Stamp"], ["T", 2, "Special Red Card"], ["T", 2, "Team Rocket's Watchtower"],
        ["E", 11, a.energia]
      ]
    },
    bigbasics: {
      nome: "Big Basics (estilo Basic Box)",
      desc: "Vários atacantes básicos de 2–3 prêmios, aceleração e gust.",
      cartas: (a) => [
        ["P", 4, "Mega Kangaskhan ex"], ["P", 3, a.final], ["P", 2, "Teal Mask Ogerpon ex"], ["P", 1, "Wellspring Mask Ogerpon ex"], ["P", 1, "Chien-Pao"], ["P", 1, "Latias ex"], ["P", 1, "Fezandipiti ex"], ["P", 1, "Meowth ex"],
        ["T", 4, "Crispin"], ["T", 3, "Boss's Orders"], ["T", 2, "Lillie's Determination"],
        ["T", 4, "Ultra Ball"], ["T", 4, "Nest Ball"], ["T", 3, "Energy Switch"], ["T", 2, "Night Stretcher"], ["T", 1, "Special Red Card"], ["T", 1, "Prime Catcher"], ["T", 2, "Area Zero Underdepths"], ["T", 2, "Bravery Charm"],
        ["E", 12, a.energia]
      ]
    },
    single: {
      nome: "Um prêmio (estilo Hide 'n' Sneak/Honchkrow)",
      desc: "Só Pokémon sem Rule Box, manutenção baixa e Legacy Energy.",
      cartas: (a) => [
        ["P", 4, a.basico], ["P", 3, a.stage1 || a.final], ["P", 2, "Dunsparce"], ["P", 2, "Dudunsparce"], ["P", 1, "Shaymin"], ["P", 1, "Patrat"], ["P", 1, "Bloodmoon Ursaluna"],
        ["T", 4, "Lillie's Determination"], ["T", 4, "Boss's Orders"], ["T", 3, "Hilda"], ["T", 1, "Judge"],
        ["T", 4, "Buddy-Buddy Poffin"], ["T", 4, "Poké Pad"], ["T", 2, "Ultra Ball"], ["T", 3, "Night Stretcher"], ["T", 2, "Air Balloon"], ["T", 1, "Switch"], ["T", 2, "Battle Cage"],
        ["E", 1, "Legacy Energy"], ["E", 9, a.energia]
      ]
    }
  };

  function gerarEsqueleto(tipo, a) {
    const e = ESQUELETOS[tipo];
    const linhas = e.cartas(a).filter(x => x[2]);
    // ajusta para 60: energia até o alvo do arquétipo; o resto vira cartas de consistência
    const alvoEnergia = { stage2: 8, stage1: 10, bigbasics: 12, single: 9 }[tipo] || 9;
    const en = linhas.find(x => x[0] === "E" && x[2] === a.energia);
    let total = linhas.reduce((s, x) => s + x[1], 0);
    if (en) { en[1] = Math.max(4, Math.min(alvoEnergia, en[1] + (60 - total))); }
    const enchimento = ["Night Stretcher", "Super Rod", "Counter Catcher", "Judge", "Switch", "Poké Pad", "Iono", "Pokégear 3.0", "Energy Switch"];
    let i = 0;
    total = linhas.reduce((s, x) => s + x[1], 0);
    while (total < 60 && i < 60) {
      const nome = enchimento[i % enchimento.length]; i++;
      const ex = linhas.find(x => x[2] === nome);
      if (ex) { if (ex[1] < 4) { ex[1]++; total++; } }
      else { linhas.push(["T", 1, nome]); total++; }
    }
    while (total > 60 && en && en[1] > 4) { en[1]--; total--; }
    const sec = { P: "Pokémon", T: "Trainer", E: "Energy" };
    let txt = "";
    for (const k of ["P", "T", "E"]) {
      const l = linhas.filter(x => x[0] === k);
      txt += `${sec[k]}: ${l.reduce((s, x) => s + x[1], 0)}\n` + l.map(x => `${x[1]} ${x[2]}`).join("\n") + "\n";
    }
    return { nome: e.nome, desc: e.desc, texto: txt.trim(), total };
  }

  window.Engine = { parseList, analisar, analisarDeck, gerarEsqueleto, ESQUELETOS, nomeDeck, META, norm };
})();
