/* Gera js/data/imagens.js: nome da carta -> URL da imagem no TCGdex (em português quando existe).
   Junta os nomes da base de cartas, das listas de referência e das cartas citadas nos guias.
   Uso: node tools/resolver_imagens.js */
const fs = require("fs"), path = require("path");
global.window = {};
const raiz = path.join(__dirname, "..");
require(path.join(raiz, "js/data/cards.js"));
require(path.join(raiz, "js/data/decks.js"));
require(path.join(raiz, "js/data/guias/index.js"));
for (const f of fs.readdirSync(path.join(raiz, "js/data/guias")).filter(f => /^g\d+\.js$/.test(f))) {
  global.GUIA = window.GUIA; require(path.join(raiz, "js/data/guias", f));
}
const saida = path.join(raiz, "js/data/imagens.js");
let atual = {};
if (fs.existsSync(saida)) { const t = fs.readFileSync(saida, "utf8"); const m = t.match(/=\s*(\{[\s\S]*\});/); if (m) atual = JSON.parse(m[1]); }

const nomes = new Set(Object.values(window.CARDS).map(c => c.nome));
const listas = {};
for (const d of window.DECKS) if (d.lista) for (const l of d.lista.texto.split("\n")) {
  const m = l.match(/^(\d+)\s+(.+?)\s+([A-Z0-9]{2,5})\s+(\d+)[a-z]?$/);
  if (m) { listas[`${m[2]}|${m[3]}|${parseInt(m[4], 10)}`] = m[2]; nomes.add(m[2]); }
  else { const n = l.match(/^\d+\s+(.+)$/); if (n && !/energy$/i.test(n[1])) nomes.add(n[1]); }
}
for (const g of Object.values(window.GUIAS)) for (const c of g.caps) for (const n of (c[2] || [])) nomes.add(n);

const api = "https://api.tcgdex.net/v2";
const get = async u => { const r = await fetch(u); if (!r.ok) throw new Error(r.status); return r.json(); };
const sets = {};
async function sigla(id) { if (!(id in sets)) { try { const s = await get(`${api}/en/sets/${id}`); sets[id] = s.abbreviation && s.abbreviation.official; } catch (e) { sets[id] = null; } } return sets[id]; }
async function existe(u) { try { const r = await fetch(u, { method: "HEAD" }); return r.ok; } catch (e) { return false; } }
const ordem = id => (/^me/.test(id) ? 3 : /^sv/.test(id) ? 2 : /^swsh/.test(id) ? 1 : 0);

async function resolver(nome, codigo, numero) {
  let lista;
  try { lista = await get(`${api}/en/cards?name=eq:${encodeURIComponent(nome)}`); } catch (e) { return null; }
  lista = (lista || []).filter(c => c.image && !/^A\d|^P-A/.test(c.id));
  if (!lista.length) return null;
  let escolha = null;
  if (codigo) {
    for (const c of lista.filter(c => parseInt(c.localId, 10) === numero)) {
      const d = await get(`${api}/en/cards/${c.id}`).catch(() => null);
      if (d && (await sigla(d.set.id)) === codigo) { escolha = c; break; }
    }
  }
  if (!escolha) escolha = lista.slice().sort((a, b) => ordem(b.id) - ordem(a.id))[0];
  const pt = escolha.image.replace("/en/", "/pt/") + "/low.webp";
  const en = escolha.image + "/low.webp";
  return { id: escolha.id, img: (await existe(pt)) ? pt : en };
}

(async () => {
  const res = { ...atual };
  for (const [k, nome] of Object.entries(listas)) {
    if (res[k]) continue;
    const [, cod, num] = k.split("|");
    const r = await resolver(nome, cod, parseInt(num, 10));
    if (r) res[k] = r;
  }
  for (const nome of nomes) {
    const k = nome.toLowerCase();
    if (res[k] || /^\[|energy$/i.test(nome) && !window.CARDS[k]) continue;
    const r = await resolver(nome);
    if (r) res[k] = r; else console.error("sem imagem:", nome);
  }
  fs.writeFileSync(saida, "/* Gerado por tools/resolver_imagens.js — imagens das cartas (TCGdex). */\nwindow.IMAGENS = " + JSON.stringify(res, null, 0) + ";\n");
  console.log("imagens:", Object.keys(res).length);
})();
