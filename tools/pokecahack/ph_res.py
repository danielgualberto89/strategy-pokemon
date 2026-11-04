"""Extrai os resultados (colocação, loja, jogadores, deckID) de cada artigo do Pokecahack.
Uso: ph_res.py <dir_ph> <saida.json>"""
import re, html, json, sys, pathlib
d = pathlib.Path(sys.argv[1]); res = {}
for f in sorted(d.glob("pokecahack_com_*.html")):
    slug = f.stem.replace("pokecahack_com_", "")
    t = f.read_text(encoding="utf-8", errors="replace")
    # marcadores em ordem: h2 (temporada), datas, blocos de resultado
    evs = []
    for m in re.finditer(r'<h[23][^>]*>(.*?)</h[23]>', t, re.S):
        evs.append((m.start(), "h2", re.sub(r"<[^>]+>", "", html.unescape(m.group(1))).strip()))
    for m in re.finditer(r'<p class="is-style-border_left[^"]*"><strong>(.*?)</strong></p>', t, re.S):
        evs.append((m.start(), "data", re.sub(r"<[^>]+>", "", html.unescape(m.group(1))).strip()))
    for m in re.finditer(r'<p class="wp-block-paragraph"><strong><span[^>]*>(優勝|準優勝|ベスト4|ベスト８|ベスト8|3位|4位)</span></strong><br>(.*?)</p>.*?deckID/([A-Za-z0-9-]+)/', t, re.S):
        info = [html.unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in m.group(2).split("<br>")]
        evs.append((m.start(), "res", (m.group(1), info, m.group(3))))
    evs.sort(key=lambda e: e[0])
    temporada = data = ""; lst = []
    for _, k, v in evs:
        if k == "h2": temporada = v if ("シーズン" in v or "20" in v) else temporada
        elif k == "data": data = v
        else:
            loja = v[1][0] if v[1] else ""; nm = re.search(r"：\s*(\d+)名", loja)
            lst.append({"temporada": temporada, "data": data, "res": v[0], "loja": loja, "jogadores": int(nm.group(1)) if nm else None, "jogador": v[1][1] if len(v[1]) > 1 else "", "deckID": v[2]})
    titulo = re.search(r"<title>(.*?)</title>", t, re.S)
    res[slug] = {"titulo": html.unescape(titulo.group(1)).split("|")[0].strip() if titulo else slug, "resultados": lst}
json.dump(res, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for s, v in res.items():
    temps = {}
    for r in v["resultados"]: temps[r["temporada"]] = temps.get(r["temporada"], 0) + 1
    print(s, len(v["resultados"]), temps)
