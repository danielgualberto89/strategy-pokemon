"""Atualiza index.html com uma tag <script> para cada js/data/guias/gNN.js."""
import re, pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
html = (raiz / "index.html").read_text(encoding="utf-8")
arqs = sorted(p.name for p in (raiz / "js/data/guias").glob("g[0-9]*.js"))
tags = "\n".join(f'<script src="js/data/guias/{a}"></script>' for a in arqs)
html = re.sub(r"<!-- guias completos -->\n(?:<script src=\"js/data/guias/g\d+\.js\"></script>\n)*", "<!-- guias completos -->\n" + tags + "\n", html)
(raiz / "index.html").write_text(html, encoding="utf-8")
print(len(arqs), "guias registrados")
