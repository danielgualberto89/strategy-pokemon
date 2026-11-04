"""Baixa as listas oficiais (pokemon-card.com) dos resultados da temporada atual.
Uso: pcd.py <ph_res.json> <dir_cache> <saida.json> <filtro_temporada>"""
import json, re, sys, time, pathlib, urllib.request, html
res = json.load(open(sys.argv[1], encoding="utf-8"))
cache = pathlib.Path(sys.argv[2]); cache.mkdir(exist_ok=True)
filtro = sys.argv[4]
ids = sorted({r["deckID"] for v in res.values() for r in v["resultados"] if filtro in r["temporada"] or "CL2027" in r["temporada"]})
print("decks", len(ids), flush=True)
cats = {"deck_pke": "P", "deck_gds": "I", "deck_tool": "F", "deck_tech": "T", "deck_sup": "A", "deck_sta": "E", "deck_ene": "N", "deck_ajs": "S"}
out = {}
for n, i in enumerate(ids):
    f = cache / f"{i}.html"
    if not f.exists():
        for tent in range(3):
            try:
                req = urllib.request.Request(f"https://www.pokemon-card.com/deck/result.html/deckID/{i}/", headers={"User-Agent": "Mozilla/5.0"})
                f.write_bytes(urllib.request.urlopen(req, timeout=40).read()); break
            except Exception as e:
                print("erro", i, e, flush=True); time.sleep(3)
        time.sleep(0.4)
    if not f.exists(): continue
    t = f.read_text(encoding="utf-8", errors="replace")
    nomes = {k: html.unescape(v) for k, v in re.findall(r"PCGDECK\.searchItemNameAlt\[(\d+)\]='([^']*)'", t)}
    cartas = []
    for campo, cat in cats.items():
        m = re.search(r'name="%s" id="%s" value="([^"]*)"' % (campo, campo), t)
        if not m or not m.group(1): continue
        for item in m.group(1).split("-"):
            cid, q, _ = item.split("_")
            cartas.append([cat, nomes.get(cid, "?" + cid), int(q)])
    out[i] = cartas
    if n % 50 == 0: print(n, flush=True)
json.dump(out, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False)
print("ok", len(out), "vazias", sum(1 for v in out.values() if sum(c[2] for c in v) != 60))
