"""Copia as imagens das cartas (TCGdex, versão "low") para img/cartas/ e grava o
caminho local ("loc") em js/data/imagens.js, para o site não depender do servidor
de imagens do TCGdex. Uso: python3 tools/imagens_locais.py"""
import json, re, pathlib, urllib.request, sys, time
raiz = pathlib.Path(__file__).resolve().parent.parent
arq = raiz / "js/data/imagens.js"
txt = arq.read_text(encoding="utf-8")
m = re.search(r"=\s*(\{.*\});", txt, re.S)
dados = json.loads(m.group(1))
pasta = raiz / "img/cartas"; pasta.mkdir(parents=True, exist_ok=True)
feitos, falhas = {}, 0
for k, v in dados.items():
    u = v["img"]
    if u.startswith("data:"): continue
    if u not in feitos:
        nome = re.sub(r"^https://assets\.tcgdex\.net/", "", u)
        nome = re.sub(r"/low\.webp$", "", nome).replace("/", "_") + ".webp"
        destino = pasta / nome
        if not destino.exists():
            for tentativa in range(4):
                try:
                    req = urllib.request.Request(u, headers={"User-Agent": "coach-de-decks"})
                    destino.write_bytes(urllib.request.urlopen(req, timeout=30).read()); break
                except Exception as e:
                    time.sleep(2 * (tentativa + 1))
            else:
                print("falhou", k, file=sys.stderr); falhas += 1; feitos[u] = None; continue
        feitos[u] = "img/cartas/" + nome
    if feitos[u]: v["loc"] = feitos[u]
arq.write_text(txt[:m.start(1)] + json.dumps(dados, ensure_ascii=False) + txt[m.end(1):], encoding="utf-8")
print(sum(1 for x in feitos.values() if x), "imagens locais;", falhas, "falhas")
