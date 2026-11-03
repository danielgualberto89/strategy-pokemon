"""Gera dist/coach-de-decks.html: o app inteiro num único arquivo (CSS e JS embutidos).
Uso: python3 tools/pagina_unica.py [--fragmento]
--fragmento  remove <!doctype>/<html>/<head>/<body> (formato usado para publicar como Artifact)."""
import re, sys, pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
html = (raiz / "index.html").read_text(encoding="utf-8")
css = (raiz / "css/style.css").read_text(encoding="utf-8")
html = html.replace('<link rel="stylesheet" href="css/style.css">', "<style>\n" + css + "\n</style>")
def js(m):
    return "<script>\n" + (raiz / m.group(1)).read_text(encoding="utf-8").replace("</script", "<\\/script") + "\n</script>"
emb = raiz / "dist/imagens-embutidas.js"
if emb.exists():
    html = html.replace('<script src="js/data/imagens.js"></script>', '<script src="js/data/imagens.js"></script>\n<script>' + emb.read_text(encoding="utf-8") + '</script>')
html = re.sub(r'<script src="(js/[^"]+)"></script>', js, html)
saida = raiz / "dist/coach-de-decks.html"
if "--fragmento" in sys.argv:
    html = re.sub(r"<!doctype html>\s*|</?html[^>]*>|</?head>|</?body>|<meta charset[^>]*>|<meta name=\"viewport\"[^>]*>", "", html, flags=re.I)
    saida = pathlib.Path(sys.argv[sys.argv.index("--fragmento") + 1]) if len(sys.argv) > sys.argv.index("--fragmento") + 1 else raiz / "dist/fragmento.html"
saida.parent.mkdir(exist_ok=True)
saida.write_text(html, encoding="utf-8")
print(saida, len(html))
