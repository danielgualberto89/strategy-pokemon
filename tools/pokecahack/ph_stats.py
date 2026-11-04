"""Estatísticas por deck (temporada atual) a partir de ph_res.json + pcd.json.
Gera ph_stats.json e imprime os nomes japoneses usados (para tradução)."""
import json, sys, collections
res = json.load(open("ph_res.json", encoding="utf-8")); dk = json.load(open("pcd.json", encoding="utf-8"))
ORD = {"P": 0, "I": 1, "F": 2, "T": 2, "A": 3, "E": 4, "N": 5, "S": 6}
out = {}; nomes = collections.Counter()
for slug, v in res.items():
    rs = [r for r in v["resultados"] if ("2027" in r["temporada"]) and r["deckID"] in dk]
    if not rs: continue
    listas = []
    for r in rs:
        c = collections.defaultdict(int); cat = {}
        for k, n, q in dk[r["deckID"]]: c[n] += q; cat[n] = k
        listas.append((r, dict(c), cat))
    N = len(listas)
    uso = collections.defaultdict(list); cats = {}
    for _, c, cat in listas:
        for n, q in c.items(): uso[n].append(q); cats[n] = cat[n]
    tabela = []
    for n, qs in uso.items():
        tabela.append({"nome": n, "cat": cats[n], "pct": round(100 * len(qs) / N), "media": round(sum(qs) / len(qs), 1), "moda": collections.Counter(qs).most_common(1)[0][0]})
    tabela.sort(key=lambda x: (ORD[x["cat"]], -x["pct"], -x["media"]))
    # lista representativa: menor distância L1 à média (contando 0 para ausentes), preferindo vitórias
    media_total = {n: sum(qs) / N for n, qs in uso.items()}
    def dist(c): return sum(abs(c.get(n, 0) - m) for n, m in media_total.items()) + sum(q for n, q in c.items() if n not in media_total)
    cand = sorted(listas, key=lambda x: (dist(x[1]), x[0]["res"] != "優勝", -(x[0]["jogadores"] or 0)))
    rep = cand[0]
    lista_rep = sorted(([n, q, rep[2][n]] for n, q in rep[1].items()), key=lambda x: (ORD[x[2]], -x[1]))
    vit = sum(1 for r, _, _ in listas if r["res"] == "優勝"); seg = sum(1 for r, _, _ in listas if r["res"] == "準優勝")
    jog = [r["jogadores"] for r, _, _ in listas if r["jogadores"]]
    maior = max(listas, key=lambda x: x[0]["jogadores"] or 0)[0]
    datas = [r["data"] for r, _, _ in listas]
    out[slug] = {"n": N, "vitorias": vit, "segundos": seg, "jogMedio": round(sum(jog) / len(jog)) if jog else None,
                 "cl": [r for r, _, _ in listas if "CL" in r["temporada"]],
                 "maior": maior, "rep": {"r": rep[0], "lista": lista_rep}, "uso": [t for t in tabela if t["pct"] >= 10], "datas": datas[:1] + datas[-1:]}
    for t in tabela:
        if t["pct"] >= 10: nomes[t["nome"]] += 1
    for n, q, k in lista_rep: nomes[n] += 1
json.dump(out, open("ph_stats.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for s, v in sorted(out.items(), key=lambda x: -x[1]["n"]): print(s, v["n"], "vit", v["vitorias"], "2º", v["segundos"], "jog", v["jogMedio"])
open("ph_nomes.txt", "w", encoding="utf-8").write("\n".join(sorted(nomes)))
print("nomes", len(nomes))
