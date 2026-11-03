# Coach de Decks TCG

Sistema em português para aprender a jogar os decks competitivos de Pokémon TCG e criar estratégias para decks novos.

A base de conhecimento vem da leitura dos **30 primeiros guias gratuitos** da página de guias de Pokémon TCG do Metafy (03/11/2026), de **todos os 43 guias de deck do site japonês [Pokemite](https://pokemite.com/deck/)** (traduzidos) e de **23 análises do [Pokecahack](https://pokecahack.com/category/deck/)** com **658 listas premiadas da City League** (temporada 1 de 2027, listas do site oficial pokemon-card.com) e dos documentos oficiais de regras (Rulebook set/2026, Tournament Handbook, Errata ago/2026, Alternative Play Handbook). O texto oficial das cartas vem da API pública [TCGdex](https://tcgdex.dev/pt-br).

## Como usar

Abra `index.html` no navegador (ou `dist/coach-de-decks.html`, que é o app inteiro em um arquivo só). Não precisa instalar nada.

Para usar as funções online (TCGdex e Coach IA) é melhor servir a pasta localmente:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## O que tem no app

| Aba | O que faz |
|---|---|
| **Decks** | Mais de 50 arquétipos (22 do Metafy + os novos do Pokemite): como funcionam, peças-chave, lista de referência (19 com a aba **Mesa**, a lista em imagens), plano turno a turno, 1º ou 2º, prize maps, dicas, erros comuns, matchups e link para o guia original. |
| **Guias completos** | 96 guias (30 do Metafy + 43 do Pokemite + 23 análises do Pokecahack, com taxa de uso das cartas e lista típica calculadas a partir das listas premiadas) reescritos em português, com os **nomes das cartas em português e em negrito** (nome oficial do TCGdex; passe o mouse para ver o original), capítulo por capítulo (mais de 330 capítulos), com as cartas citadas em imagem e **ilustrações de mesa** (Ativo/Banco seu e do oponente), **mãos de exemplo** e **mapas de prêmios** desenhados com as cartas. Guias que eram só imagem (Venusaur) foram transcritos; os de vídeo trazem a lista e o resumo do que os outros guias dizem. |
| **Meta JP** | Ranking dos decks pelos resultados premiados da City League (dados do Pokecahack), com link para a análise de cada um e as cartas mais usadas no meta. |
| **Matchups** | Escolha seu deck e o do oponente: o plano do seu guia e o que o guia do oponente recomenda contra você. |
| **Laboratório** | Cole qualquer lista (formato TCG Live/Limitless). O motor valida as regras (60 cartas, 4 cópias, 1 ACE SPEC, básico), consulta o TCGdex (texto, HP, tipo, legalidade no Standard e reimpressões), identifica o arquétipo mais próximo, mede busca/compra/gust/aceleração/recuperação contra as listas dos guias e gera plano de jogo, 1º/2º, prize map, matchups estimados contra o meta e techs. Também gera **esqueletos de 60 cartas** para criar um deck do zero (Stage 2, Stage 1, Big Basics ou um prêmio). |
| **Coach IA** | Monta um prompt com a base dos guias + a análise + sua pergunta. Você pode copiar e colar no claude.ai ou responder direto com sua chave da API da Anthropic (fica só no seu navegador). |
| **Conceitos** | Os princípios que se repetem nos guias: prize map, prize trade, risk premium, informação antes do Supporter, gestão de banco, prize check, 1º/2º, disrupção. |
| **Regras** | Resumo em português das regras oficiais, regras de torneio, erratas, formatos alternativos e do formato Expanded. |
| **Cartas** | ~200 cartas citadas nos guias com o papel de cada uma, e busca do texto oficial de qualquer carta no TCGdex. |

## Estrutura

```
index.html              página do app
css/style.css           visual (tema claro e escuro)
js/data/decks.js        decks, listas, planos e matchups (resumo dos guias)
js/data/cards.js        cartas e seus papéis
js/data/conceitos.js    princípios de estratégia, regras e Expanded
js/engine.js            motor: parser, validação, arquétipo, plano, matchups, esqueletos
js/tcgdex.js            integração com a API TCGdex
js/ai.js                Coach IA (prompt + chamada opcional à API da Anthropic)
js/app.js               interface
tools/pagina_unica.py   gera dist/coach-de-decks.html (tudo embutido)
```

## Avisos

- Os textos são resumos e traduções feitos para estudo. Leia os guias originais (links em cada deck) e confira sempre o texto oficial das cartas.
- Alguns guias são de formatos anteriores (Black Bolt/White Flare, Phantasmal Flames) e suas listas têm cartas que rotacionaram; o Laboratório avisa quando uma carta não é legal no Standard.
- As avaliações "estimativa" do Laboratório são heurísticas do motor, não resultados de torneio.
- Ferramenta sem afiliação com The Pokémon Company, Nintendo, Metafy ou TCGdex.

## Publicar no GitHub Pages

O workflow `.github/workflows/pages.yml` publica o site a cada push na branch `main`.
Na primeira vez, ative em **Settings → Pages → Build and deployment → Source: GitHub Actions**.
O endereço fica `https://<usuário>.github.io/strategy-pokemon/` (a versão de arquivo único fica em `/pagina-unica.html`).
Publicado assim, o site consegue consultar o TCGdex e usar o Coach IA com a sua chave.
