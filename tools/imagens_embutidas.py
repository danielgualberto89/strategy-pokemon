"""Baixa as imagens das cartas (TCGdex), reduz para 180px de largura em WebP e gera
dist/imagens-embutidas.js (data: URIs) — usado só na versão de página única,
onde imagens externas podem ser bloqueadas. Uso: python3 tools/imagens_embutidas.py"""
import json, re, io, base64, pathlib, urllib.request, sys
from PIL import Image
raiz = pathlib.Path(__file__).resolve().parent.parent
txt = (raiz / "js/data/imagens.js").read_text(encoding="utf-8")
dados = json.loads(re.search(r"=\s*(\{.*\});", txt, re.S).group(1))
cache = raiz / "dist/.cache-img"; cache.mkdir(parents=True, exist_ok=True)
saida, urls = {}, {}
for k, v in dados.items():
    u = v["img"]
    if u in urls: saida[k] = urls[u]; continue
    nome = cache / (re.sub(r"[^a-z0-9]+", "_", u.lower()) + ".webp")
    if not nome.exists():
        try:
            raw = urllib.request.urlopen(u, timeout=30).read()
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            im.thumbnail((180, 252))
            b = io.BytesIO(); im.save(b, "WEBP", quality=62); nome.write_bytes(b.getvalue())
        except Exception as e:
            print("falhou", k, e, file=sys.stderr); continue
    data = "data:image/webp;base64," + base64.b64encode(nome.read_bytes()).decode()
    urls[u] = data; saida[k] = data
js = "/* Gerado por tools/imagens_embutidas.py */\n(function(){var D=" + json.dumps(saida) + ";for(var k in D){if(window.IMAGENS[k])window.IMAGENS[k].img=D[k];}})();\n"
(raiz / "dist/imagens-embutidas.js").write_text(js, encoding="utf-8")
print(len(saida), "imagens,", round(len(js)/1e6, 2), "MB")
