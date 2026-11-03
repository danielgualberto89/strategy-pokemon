"""Gera os guias do Pokecahack (gNN.js) e js/data/meta-jp.js a partir de ph_textos.py, ph_dic.py, ph_stats.json e ph_res.json.
Uso: ph_gerar.py <repo> <primeiro_id>"""
import json, sys, pathlib, re
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from ph_textos import T
from ph_dic import D
repo = pathlib.Path(sys.argv[1]); prox = int(sys.argv[2])
st = json.load(open("ph_stats.json", encoding="utf-8")); res = json.load(open("ph_res.json", encoding="utf-8"))
TOTAL = sum(v["n"] for v in st.values())
falt = set()
def en(n):
    if n not in D: falt.add(n); return n
    return D[n]
def js(s): return json.dumps(s, ensure_ascii=False)
RES = {"優勝": "campeão", "準優勝": "vice"}
def data_pt(d):  # "10/18（日）" -> "18/10"
    m = re.match(r"(\d+)/(\d+)", d or ""); return f"{int(m.group(2)):02d}/{int(m.group(1)):02d}" if m else d
PREF = dict(zip("北海道 青森 岩手 宮城 秋田 山形 福島 茨城 栃木 群馬 埼玉 千葉 東京 神奈川 新潟 富山 石川 福井 山梨 長野 岐阜 静岡 愛知 三重 滋賀 京都 大阪 兵庫 奈良 和歌山 鳥取 島根 岡山 広島 山口 徳島 香川 愛媛 高知 福岡 佐賀 長崎 熊本 大分 宮崎 鹿児島 沖縄".split(),
 "Hokkaido Aomori Iwate Miyagi Akita Yamagata Fukushima Ibaraki Tochigi Gunma Saitama Chiba Tóquio Kanagawa Niigata Toyama Ishikawa Fukui Yamanashi Nagano Gifu Shizuoka Aichi Mie Shiga Quioto Osaka Hyogo Nara Wakayama Tottori Shimane Okayama Hiroshima Yamaguchi Tokushima Kagawa Ehime Kochi Fukuoka Saga Nagasaki Kumamoto Oita Miyazaki Kagoshima Okinawa".split()))
def local(loja):
    m = re.match(r"\s*([^\s/]+?)(都|道|府|県)?\s*/", loja or "")
    return PREF.get(m.group(1), m.group(1)) if m else "Japão"
def pct(n):
    v = 100 * n / TOTAL; return "menos de 1%" if v < 1 else f"{round(v)}%"
def cl_pt(t):
    t = t.split("（")[0]
    for a, b in (("横浜", " Yokohama"), ("福岡", " Fukuoka"), ("愛知", " Aichi"), ("大阪", " Osaka"), ("東京", " Tóquio"), ("札幌", " Sapporo"), ("CL", "")): t = t.replace(a, b)
    return t.strip()
def lista_txt(lst):
    P = [(q, en(n)) for n, q, c in lst if c == "P"]; Tn = [(q, en(n)) for n, q, c in lst if c not in "PN"]; E = [(q, en(n)) for n, q, c in lst if c == "N"]
    blk = lambda t, xs: f"{t}: {sum(q for q, _ in xs)}\n" + "\n".join(f"{q} {n}" for q, n in xs)
    return "\n\n".join([blk("Pokémon", P), blk("Trainer", Tn), blk("Energy", E)])
meta = []; ids = []
ordem = sorted(T, key=lambda s: -(st.get(s, {}).get("n", 0)))
for slug in ordem:
    t = T[slug]; s = st.get(slug); gid = f"g{prox}"; prox += 1; ids.append(gid)
    url = f"https://pokecahack.com/{slug.replace('_', '-')}/"
    caps = []
    caps.append(["Visão geral", [f"Análise traduzida do site japonês **Pokecahack** (ポケカはっく), atualizada em {t['atual']}. Completa os guias do Metafy e do Pokemite com os **resultados da City League** e uma **análise das listas premiadas**."] + [("- " + x) for x in t["carac"]], []])
    caps.append(["Pontos fortes e fracos", ["**Pontos fortes**"] + ["- " + x for x in t["fortes"]] + ["**Pontos fracos**"] + ["- " + x for x in t["fracos"]], []])
    if t["chaves"]:
        caps.append(["Cartas-chave", ["- **" + c + "** — " + x for c, x in t["chaves"]] + ["@cartas Cartas-chave | " + ", ".join(c for c, _ in t["chaves"])], [c for c, _ in t["chaves"]]])
    lista = None
    if s:
        n = s["n"]; mj = s["maior"]
        pars = [f"Entre 26/09 e 03/11/2026 (City League 2027, temporada 1), o Pokecahack registrou **{n} resultado{'s' if n!=1 else ''} premiado{'s' if n!=1 else ''}** deste deck: **{s['vitorias']} título{'s' if s['vitorias']!=1 else ''}** e **{s['segundos']} vice{'s' if s['segundos']!=1 else ''}** — {pct(n)} dos {TOTAL} resultados de todos os decks analisados aqui.",
                f"- Torneios com **{s['jogMedio']} jogadores** em média; o maior foi em {local(mj['loja'])} ({mj['jogadores']} jogadores, {RES.get(mj['res'], mj['res'])})."]
        for c in s["cl"]:
            pars.append(f"- **Champions League {cl_pt(c['temporada'])}**: {RES.get(c['res'], c['res'])}.")
        pars.append("- Os números contam só as listas que o Pokecahack publicou (campeões e vices de City League com lista divulgada), não todos os participantes — servem como termômetro do meta, não como porcentagem exata.")
        caps.append(["Resultados na City League", pars, []])
        uso = s["uso"]
        nucleo = [u for u in uso if u["pct"] >= 90]; freq = [u for u in uso if 50 <= u["pct"] < 90]; opc = [u for u in uso if 15 <= u["pct"] < 50]
        fmt = lambda u: f"**{en(u['nome'])}** ({u['pct']}%, {str(u['moda'])}×)" if u["pct"] < 100 else f"**{en(u['nome'])}** ({u['moda']}×)"
        pa = [f"Cruzando as **{n} listas premiadas**, eis o que quase todas têm e onde elas variam. Entre parênteses: em quantas listas a carta aparece e a quantidade mais comum."]
        def grupo(titulo, us):
            if not us: return []
            out = [titulo]
            for rot, cs in (("Pokémon", "P"), ("Treinadores", "IFTAES"), ("Energias", "N")):
                xs = [u for u in us if u["cat"] in cs]
                if xs: out.append(f"- **{rot}:** " + ", ".join(fmt(u) for u in xs) + ".")
            return out
        pa += grupo("**Núcleo — em 90% ou mais das listas**", nucleo)
        pa += grupo("**Frequentes — 50 a 89%**", freq)
        pa += grupo("**Opções — 15 a 49%** (onde os jogadores ajustam ao meta)", opc)
        poke_nucleo = [en(u["nome"]) for u in uso if u["cat"] == "P" and u["pct"] >= 50][:8]
        if poke_nucleo: pa.append("@cartas Pokémon do núcleo | " + ", ".join(poke_nucleo) + f" | Pokémon presentes em pelo menos metade das {n} listas.")
        if n < 5: pa = [f"Só **{n} lista(s)** premiada(s) publicada(s) até agora — pouco para uma média. Veja a lista completa no último capítulo."]
        caps.append([f"Análise das {n} listas" if n >= 5 else "Listas premiadas", pa, [en(u["nome"]) for u in nucleo if u["cat"] == "P"][:6]])
        r = s["rep"]["r"]
        lista = {"titulo": f"Lista típica ({RES.get(r['res'], r['res'])}, {data_pt(r['data'])})",
                 "fonte": f"A lista premiada mais próxima da média das {n} listas: {RES.get(r['res'], r['res'])} de uma City League em {local(r['loja'])} ({r['jogadores']} jogadores), via Pokecahack / site oficial (pokemon-card.com).",
                 "texto": lista_txt(s["rep"]["lista"])}
        meta.append({"slug": slug, "deck": t["deck"], "nome": t["nome"], "n": n, "vit": s["vitorias"], "seg": s["segundos"], "jog": s["jogMedio"], "guia": gid})
    linhas = [f'GUIA("{gid}",{{', f'deck:{js(t["deck"])},', f'titulo:{js(t["nome"] + " — análise do Pokecahack")},', 'autor:"Pokecahack (Japão)",', f'url:{js(url)},',
              'formato:"Standard japonês (City League 2027, temporada 1)",', 'idioma:"ja",', 'fonte:"Pokecahack",']
    if t.get("novo"):
        nd = {"nome": t["nome"], "apelidos": [t["nome"].split(" (")[0]], "estilo": "Arquétipo do meta japonês", "dificuldade": 3,
              "resumo": re.sub(r"\*\*", "", t["carac"][0]), "pecasChave": [[c, x] for c, x in t["chaves"]][:4],
              "matchups": {}, "assinatura": [en(u["nome"]) for u in (s["uso"] if s else []) if u["cat"] == "P" and u["pct"] >= 80][:4] or [t["nome"]]}
        if s: nd["status"] = "meta"
        linhas.append(f"novoDeck:{js(nd)},")
    if lista: linhas.append(f"lista:{js(lista)},")
    linhas.append("caps:" + js(caps))
    linhas.append("});")
    (repo / "js/data/guias" / f"{gid}.js").write_text("\n".join(linhas) + "\n", encoding="utf-8")
meta.sort(key=lambda m: -m["n"])
# cartas mais usadas no meta (todas as listas da temporada, sem energia básica)
import collections
dk = json.load(open("pcd.json", encoding="utf-8"))
ids_t = {r["deckID"] for v in res.values() for r in v["resultados"] if "2027" in r["temporada"] and r["deckID"] in dk}
cont = collections.Counter(); cat = {}
for i in ids_t:
    vistos = set()
    for k, nm, q in dk[i]:
        if nm.startswith("基本"): continue
        vistos.add(nm); cat[nm] = k
    cont.update(vistos)
NT = len(ids_t)
top = [{"nome": en(nm), "pct": round(100 * c / NT), "cat": cat[nm]} for nm, c in cont.most_common(24)]
M = {"fonte": "Pokecahack (ポケカはっく) — resultados de City League com lista publicada", "url": "https://pokecahack.com/category/deck/",
     "periodo": "26/09 a 03/11/2026 (City League 2027, temporada 1)", "total": TOTAL, "listas": NT, "decks": meta, "topCartas": top}
(repo / "js/data/meta-jp.js").write_text("/* Gerado por tools/pokecahack/ph_gerar.py a partir dos artigos do Pokecahack (dados de 03/11/2026). */\nwindow.META_JP = " + json.dumps(M, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
print("guias", ids[0], "a", ids[-1], "| total resultados", TOTAL)
if falt: print("SEM TRADUÇÃO:", sorted(falt))
