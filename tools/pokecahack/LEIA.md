# Pokecahack → guias g74–g96 e Meta JP

Rodar a partir de uma pasta de trabalho (os arquivos baixados ficam nela):

1. `python3 -I ph.py ph <urls dos artigos "デッキ考察まとめ">` — baixa os artigos.
2. `python3 -I ph_res.py ph ph_res.json` — extrai colocação, local e código da lista (deckID).
3. `python3 -I pcd_fetch.py ph_res.json pcd` e `python3 -I pcd.py ph_res.json pcd pcd.json 2027` — baixa e lê as listas oficiais (pokemon-card.com).
4. `python3 -I ph_stats.py` — taxa de uso de cada carta e lista típica por deck.
5. `python3 -I ph_gerar.py <repo> 74` — escreve `js/data/guias/g74…` e `js/data/meta-jp.js`.

`ph_textos.py` tem as traduções dos textos dos artigos e `ph_dic.py` o dicionário japonês → inglês dos nomes de carta.
