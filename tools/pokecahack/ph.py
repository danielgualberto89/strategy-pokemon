"""Baixa páginas do pokecahack.com e extrai texto + links. Uso: ph.py <dir> <url> [url...]"""
import re, html, sys, urllib.request, pathlib, time, hashlib
out = pathlib.Path(sys.argv[1]); out.mkdir(exist_ok=True)
for url in sys.argv[2:]:
    nome = re.sub(r"[^a-zA-Z0-9]+", "_", url.split("//", 1)[-1]).strip("_")[:90] or "home"
    f = out / f"{nome}.html"
    if not f.exists():
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            f.write_bytes(urllib.request.urlopen(req, timeout=40).read())
        except Exception as e:
            print("ERRO", url, e); continue
        time.sleep(1)
    raw = f.read_text(encoding="utf-8", errors="replace")
    links = sorted(set(re.findall(r'href="(https?://pokecahack\.com/[^"#?]*)"', raw)))
    t = re.sub(r"<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", "", raw, flags=re.S)
    t = re.sub(r"<(h[1-4])[^>]*>", "\n## ", t)
    t = re.sub(r"<(br|/p|/li|/tr|/h\d|/div|/dt|/dd|/th|/td)[^>]*>", "\n", t)
    t = re.sub(r"<[^>]+>", "", t); t = html.unescape(t); t = re.sub(r"[ \t]+", " ", t); t = re.sub(r"\n\s*\n+", "\n", t)
    (out / f"{nome}.txt").write_text(t, encoding="utf-8")
    (out / f"{nome}.links").write_text("\n".join(links), encoding="utf-8")
    print(nome, len(t), "links", len(links))
