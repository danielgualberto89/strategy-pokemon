"""Baixa em paralelo (4 conexões) as páginas oficiais das listas para o cache."""
import json, sys, pathlib, urllib.request, time
from concurrent.futures import ThreadPoolExecutor
res = json.load(open(sys.argv[1], encoding="utf-8"))
cache = pathlib.Path(sys.argv[2]); cache.mkdir(exist_ok=True)
ids = sorted({r["deckID"] for v in res.values() for r in v["resultados"] if "2027" in r["temporada"]})
falta = [i for i in ids if not (cache / f"{i}.html").exists()]
print("total", len(ids), "faltam", len(falta), flush=True)
def baixar(i):
    for t in range(3):
        try:
            req = urllib.request.Request(f"https://www.pokemon-card.com/deck/result.html/deckID/{i}/", headers={"User-Agent": "Mozilla/5.0"})
            data = urllib.request.urlopen(req, timeout=40).read()
            (cache / f"{i}.html").write_bytes(data); return True
        except Exception:
            time.sleep(2 + 2 * t)
    return False
with ThreadPoolExecutor(4) as ex:
    ok = sum(ex.map(baixar, falta))
print("baixadas", ok, "de", len(falta), flush=True)
