/* Gera js/data/codigos-tcglive.js: nome da carta (inglês, minúsculas) -> "SIGLA NÚMERO" do Pokémon TCG Live,
   para o botão "Copiar para o TCG Live" montar uma lista que o jogo importa.
   Fonte: as chaves "Nome|SIGLA|Nº" das listas e, para os demais nomes, a carta escolhida em imagens.js + a sigla oficial do set no TCGdex.
   Uso: node tools/codigos_tcglive.js */
const fs = require("fs"), path = require("path");
global.window = {};
const raiz = path.join(__dirname, "..");
require(path.join(raiz, "js/data/imagens.js"));
const IM = window.IMAGENS;
const api = "https://api.tcgdex.net/v2";
const get = async u => { const r = await fetch(u); if (!r.ok) throw new Error(r.status); return r.json(); };
const siglas = {};
async function sigla(id) {
  if (!(id in siglas)) {
    for (let t = 0; t < 3 && !(id in siglas); t++) {
      try { const s = await get(`${api}/en/sets/${id}`); siglas[id] = (s.abbreviation && s.abbreviation.official) || null; }
      catch (e) { if (String(e.message) === "404") siglas[id] = null; else await new Promise(r => setTimeout(r, 1500)); }
    }
    if (!(id in siglas)) siglas[id] = null;
  }
  return siglas[id];
}
(async () => {
  const out = {};
  // energias básicas (set de energias da era Mega Evolução)
  const basicas = { grass: 1, fire: 2, water: 3, lightning: 4, psychic: 5, fighting: 6, darkness: 7, metal: 8 };
  for (const [t, n] of Object.entries(basicas)) out[`${t} energy`] = `MEE ${n}`;
  // 1) chaves com sigla e número vindas das listas
  for (const k of Object.keys(IM)) { const p = k.split("|"); if (p.length === 3) { const n = p[0].toLowerCase(); if (!out[n]) out[n] = `${p[1]} ${p[2]}`; } }
  // 2) nomes simples: set e número da carta escolhida no TCGdex
  let sem = [];
  for (const [k, v] of Object.entries(IM)) {
    if (k.includes("|") || !v || !v.id) continue;
    const n = k.toLowerCase(); if (out[n]) continue;
    const i = v.id.lastIndexOf("-"); const set = v.id.slice(0, i), num = parseInt(v.id.slice(i + 1), 10);
    const s = await sigla(set);
    if (s && !isNaN(num)) out[n] = `${s} ${num}`; else sem.push(k);
  }
  // 3) nomes das listas ainda sem código: busca o nome exato no TCGdex (inglês) e usa a 1ª impressão
  require(path.join(raiz, "js/data/cards.js")); require(path.join(raiz, "js/data/decks.js")); require(path.join(raiz, "js/data/guias/index.js"));
  for (const f of fs.readdirSync(path.join(raiz, "js/data/guias")).filter(f => /^g\d+\.js$/.test(f))) { global.GUIA = window.GUIA; require(path.join(raiz, "js/data/guias", f)); }
  const textos = window.DECKS.filter(d => d.lista).map(d => d.lista.texto).concat(Object.values(window.GUIAS).filter(g => g.lista && g.lista.texto).map(g => g.lista.texto));
  const nomesListas = new Set();
  for (const t of textos) for (const l of t.split("\n")) { const m = l.match(/^\d+\s+(.+)$/); if (m && !/\s[A-Z0-9-]{2,6}\s\d+[a-z]?$/.test(m[1])) nomesListas.add(m[1].replace(/\s*\([^)]*\)\s*$/, "").trim()); }
  const semCod = [];
  for (const n of nomesListas) {
    if (out[n.toLowerCase()] || /[\u3040-\u30ff\u4e00-\u9fff]/.test(n)) continue;
    let achou = null;
    for (let t = 0; t < 3 && achou === null; t++) {
      try { const r = await get(`${api}/en/cards?name=eq:${encodeURIComponent(n)}`); achou = Array.isArray(r) ? r : []; }
      catch (e) { await new Promise(r => setTimeout(r, 1500)); }
    }
    let ok = false;
    for (const c of (achou || []).slice(0, 4)) {
      const i = c.id.lastIndexOf("-"); const sg = await sigla(c.id.slice(0, i)); const num = parseInt(c.localId, 10);
      if (sg && !isNaN(num)) { out[n.toLowerCase()] = `${sg} ${num}`; ok = true; break; }
    }
    if (!ok) semCod.push(n);
  }
  console.log("sem código no TCG Live (provavelmente exclusivas do Japão):", semCod.join("; "));
  fs.writeFileSync(path.join(raiz, "js/data/codigos-tcglive.js"),
    "/* Gerado por tools/codigos_tcglive.js — nome da carta (inglês, minúsculas) -> sigla e número no Pokémon TCG Live. */\nwindow.CODIGOS_TCGL = " + JSON.stringify(out) + ";\n");
  console.log("códigos:", Object.keys(out).length, "| sem sigla:", sem.length, sem.slice(0, 30).join("; "));
})();
