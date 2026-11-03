/* Gera js/data/nomes-pt.js: nome da carta em inglês -> nome oficial em português (TCGdex).
   Usa os ids já resolvidos em js/data/imagens.js. Uso: node tools/nomes_pt.js */
const fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const t = fs.readFileSync(path.join(raiz, "js/data/imagens.js"), "utf8");
const img = JSON.parse(t.match(/=\s*(\{[\s\S]*\});/)[1]);
const saida = path.join(raiz, "js/data/nomes-pt.js");
let atual = {};
if (fs.existsSync(saida)) { const m = fs.readFileSync(saida, "utf8").match(/=\s*(\{[\s\S]*\});/); if (m) atual = JSON.parse(m[1]); }
// chave = nome em minúsculas (as chaves "Nome|SET|num" são ignoradas)
const alvos = Object.entries(img).filter(([k]) => !k.includes("|"));
const api = "https://api.tcgdex.net/v2/pt/cards/";
async function pt(id) {
  for (let i = 0; i < 3; i++) {
    try { const r = await fetch(api + id); if (r.ok) { const d = await r.json(); return d.name || null; } if (r.status === 404) return null; } catch (e) {}
    await new Promise(r => setTimeout(r, 1500 * (i + 1)));
  }
  return null;
}
(async () => {
  const res = { ...atual }; let novos = 0;
  const fila = alvos.filter(([k]) => !(k in res));
  for (let i = 0; i < fila.length; i += 8) {
    await Promise.all(fila.slice(i, i + 8).map(async ([k, v]) => { const n = await pt(v.id); res[k] = n; if (n) novos++; }));
  }
  fs.writeFileSync(saida, "/* Gerado por tools/nomes_pt.js — nome da carta (inglês, minúsculas) -> nome oficial em português (TCGdex). null = sem tradução. */\nwindow.NOMES_PT = " + JSON.stringify(res) + ";\n");
  console.log(Object.keys(res).length, "nomes;", Object.values(res).filter(Boolean).length, "em português;", novos, "novos");
})();
