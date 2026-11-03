/* Princípios estratégicos que se repetem nos 30 guias (traduzidos e organizados). */
window.CONCEITOS = [
  {
    titulo: "Prize map (mapa de prêmios)",
    tags: ["fundamento"],
    texto: "Antes de atacar, defina COMO vai pegar os 6 prêmios. Pokémon comum = 1 prêmio, ex/V = 2, Mega ex/VMAX/Tag Team = 3. Exemplos dos guias: 1-1-2-2 contra Dragapult (Budew, Drakloak, Dragapult ex, Meowth/Fez), 2-2-2 contra Zoroark com Wellspring, 3-3 contra Megas, 3-2-1 contra Slowking (Kangaskhan, Latias, Slowking). Não pegue o prêmio fácil que te deixa sem continuação.",
    perguntas: ["Quantos KOs eu preciso?", "Quais alvos de 2–3 prêmios o oponente vai ser obrigado a bancar?", "Meu próximo atacante já está pronto?"]
  },
  {
    titulo: "Prize trade e decks de um prêmio",
    tags: ["fundamento"],
    texto: "Decks de um prêmio (Alakazam, Hide 'n' Sneak, Festival Lead, Honchkrow, Okidogi) obrigam o oponente a fazer 6 KOs, enquanto eles fazem 3 KOs em ex. Contra eles: tome o PRIMEIRO prêmio, não entregue alvos de 2 prêmios (Fez, Meowth, Latias) e tenha disrupção para o late game. Legacy Energy obriga o oponente a fazer um KO a mais.",
    perguntas: ["Estou entregando prêmios de graça no banco?", "O oponente consegue seguir atacando todo turno (manutenção)?"]
  },
  {
    titulo: "Risk premium: quando atacar primeiro",
    tags: ["avançado", "dragapult"],
    texto: "Do guia do mirror de Dragapult: ser o primeiro a atacar te expõe às respostas do oponente (Unfair Stamp, Crushing Hammer, Mind Bend). Só ataque quando o ganho compensar o risco. Bons momentos: o oponente tem 2–3 cartas na mão; você remove energias e motores no mesmo turno; acabou de usar Judge. Caso contrário, 'pass, pass, pass' e construa o board.",
    perguntas: ["O que eu ganho atacando agora?", "Qual é a melhor resposta do oponente no próximo turno?", "Quantas cartas ele tem na mão?"]
  },
  {
    titulo: "Informação é rei (sequenciamento)",
    tags: ["avançado"],
    texto: "Use habilidades de compra/busca (Recon Directive, Run Away Draw, Lunar Cycle, Trade) ANTES de escolher o Supporter do turno: você decide melhor com mais informação. Exceção: quando o Supporter embaralha a mão e você quer comprar mais depois (ex.: guardar energia para depois do Lillie's no Okidogi).",
    perguntas: ["Já vi todas as cartas que posso ver antes de gastar o Supporter?"]
  },
  {
    titulo: "Gestão de banco",
    tags: ["fundamento"],
    texto: "Seu banco faz parte do prize map do oponente. Só bancar o que contribui para o plano. Contra spread (Dragapult, Dusknoir, Froslass, Darmanitan, Trifrost) evite Pokémon de HP ≤60 expostos. Contra Boss, evite alvos de 2–3 prêmios desnecessários. Hide 'n' Sneak contra Slowking: só 2 Dhelmise até o Trifrost. Basic Box: Area Zero dá espaço, mas não encha sem motivo.",
    perguntas: ["Se o oponente usar Boss agora, qual alvo ele escolhe?", "Um spread de 60 nocauteia quantos dos meus Pokémon?"]
  },
  {
    titulo: "Prize check",
    tags: ["fundamento"],
    texto: "Na primeira busca do deck (idealmente no T1) descubra quais cartas estão nos prêmios. Primeiro o que importa para o T1, depois para o T2; ao longo do jogo, conte Boss, energias, recuperações e atacantes restantes. Cada guia tem uma lista do que checar (ex.: Okidogi vs Pult: Battle Cages, Prism/Legacy e Patrat).",
    perguntas: ["Minha peça crítica está nos prêmios?", "Quantos Boss/atacantes ainda restam no deck?"]
  },
  {
    titulo: "1º ou 2º?",
    tags: ["fundamento"],
    texto: "Quem começa não ataca nem joga Supporter no 1º turno. Vá 1º com decks rápidos de básicos e decks que querem atacar no T2 (Festival Lead, Honchkrow com Proton, Lucario, Basic Box). Vá 2º quando o Supporter do T1 é essencial para montar Stage 2 sob item lock (mirror de Dragapult, Alakazam, Mew Box) ou contra decks com Budew/Frillish. Em melhor de 3, o perdedor escolhe no jogo seguinte.",
    perguntas: ["Eu preciso de Supporter no T1 para não 'brickar'?", "O oponente tem item lock no T1?"]
  },
  {
    titulo: "Disrupção e cartas de saída",
    tags: ["meta"],
    texto: "O formato tem muita disrupção: Unfair Stamp, Special Red Card (oponente com ≤3 prêmios), Judge, Iono, Xerosic, Team Rocket's Watchtower, Crushing Hammer. Mantenha 'outs' no board (Drakloak, Dudunsparce, Lunatone, Kangaskhan, Thwackey) e no deck (Meowth ex + Ultra Ball). Do seu lado, use a disrupção no turno em que o oponente mais depende de cartas específicas.",
    perguntas: ["Se eu tomar Stamp agora, consigo continuar atacando?"]
  },
  {
    titulo: "Valor de um ataque",
    tags: ["avançado", "toolbox"],
    texto: "Do guia de Slowking: valor = dano + prêmios + tempo + posição futura do board + recursos gastos. Um spread de 60 pode valer 3 KOs depois; um turno sem atacar pode montar o board que vence o jogo. Não ataque só porque pode.",
    perguntas: ["Este ataque cria KOs futuros ou só gasta recursos?"]
  },
  {
    titulo: "Pense um turno à frente",
    tags: ["fundamento"],
    texto: "Antes de encerrar o turno: se o meu ativo cair, quem ataca? Tenho energia para isso? O oponente consegue fazer KO duplo? Tenho recursos contra disrupção?",
    perguntas: ["Quem é meu próximo atacante?", "O oponente tem uma jogada de 2+ prêmios agora?"]
  },
  {
    titulo: "Teoria dos jogos: a jogada inesperada",
    tags: ["avançado", "deckbuilding"],
    texto: "Do guia de Joltik Box: quanto menos esperada uma ação, mais força ela tem (ex.: Iono num deck agressivo pune quem guardou recursos na mão). Mas: 'se você tenta vencer tudo, acaba não vencendo nada' — poucos slots de tech cabem num 60.",
    perguntas: ["Minhas techs ajudam em vários matchups ou em um só?"]
  },
  {
    titulo: "Construção de deck — números de referência",
    tags: ["deckbuilding"],
    texto: "Pelas listas dos guias: linha principal 4-4-3 (Stage 2) ou 4-4 (Stage 1); 4 Buddy-Buddy Poffin/Ultra Ball/Poké Pad; 4 Lillie's Determination ou supporters de busca; 3–4 Boss's Orders (ou gust equivalente); 2–3 Night Stretcher; 1 ACE SPEC; energias entre 5 (Alakazam) e 13 (Joltik), a maioria entre 7 e 9 hoje. O rulebook sugere 12–15 energias para iniciantes, mas listas competitivas usam menos graças à busca e aceleração.",
    perguntas: ["Tenho busca suficiente para a minha linha principal?", "Tenho gust e recuperação?"]
  },
  {
    titulo: "Matemática de cura e de HP",
    tags: ["avançado"],
    texto: "Exemplos: Crustle com 4 Jumbo Ice Cream + PC Lady cura 380; contra Dhelmise (170) isso exige ~4 ataques por Kangaskhan. Números-chave citados: 30 mata Budew; 70 HP sobrevive aos contadores do Phantom Dive (≤60 morre); 50 HP morre para Dusclops; 280 KO a maioria dos VSTAR; 330 KO a maioria dos Stage 2 ex; Mega Lucario tem 340; Mega Venusaur 380.",
    perguntas: ["Quantos ataques preciso para vencer a cura dele?"]
  }
];

/* Regras resumidas a partir dos PDFs oficiais enviados pelo usuário
   (Rulebook set/2026, Tournament Handbook, Errata ago/2026, Alternative Play Handbook). */
window.REGRAS = [
  {
    titulo: "Como vencer",
    itens: [
      "Pegar todas as suas 6 cartas de prêmio.",
      "Nocautear todos os Pokémon em jogo do oponente (ele não tem quem promover ao ativo).",
      "O oponente não tem cartas no deck no início do turno dele.",
      "Se os dois vencem ao mesmo tempo: jogo de desempate (sudden death) — vence quem pegar o primeiro prêmio. Se você vence de duas formas e o oponente de uma, você vence."
    ]
  },
  {
    titulo: "Preparação",
    itens: [
      "Aperto de mãos, moeda: quem ganha escolhe quem começa.",
      "Embaralhar 60 cartas, comprar 7. Colocar 1 Básico virado como ativo e até 5 no banco.",
      "Sem Básico = mulligan: mostra a mão, embaralha e compra 7 de novo. O oponente pode comprar 1 carta para cada mulligan extra (e bancar Básicos que comprar).",
      "Separar 6 cartas do topo como prêmios. Revelar os Pokémon e começar.",
      "Torneio: após 8 mulligans o juiz força um Básico (Judge-Enforced Progression)."
    ]
  },
  {
    titulo: "Turno",
    itens: [
      "1) Comprar 1 carta (se não puder, perde).",
      "2) Em qualquer ordem: bancar Básicos; evoluir; ligar 1 energia por turno; jogar Itens/Ferramentas à vontade, 1 Supporter e 1 Estádio por turno; recuar 1 vez (descarta energia = custo de recuo); usar habilidades.",
      "3) Atacar — o turno termina.",
      "Quem começa NÃO ataca e NÃO joga Supporter no 1º turno.",
      "Não é possível evoluir no seu 1º turno nem um Pokémon que entrou em jogo neste turno (nem evoluir duas vezes no mesmo turno)."
    ]
  },
  {
    titulo: "Ataque e cálculo de dano",
    itens: [
      "Ordem: dano base → efeitos no atacante (ex.: +40 deste turno) → Fraqueza (×2) → Resistência (−30) → efeitos no defensor (ex.: −20 de dano).",
      "Contadores de dano (como Phantom Dive, Powerful Hand, Dusknoir) NÃO são afetados por Fraqueza, Resistência nem efeitos de redução de dano.",
      "Fraqueza e Resistência não se aplicam a Pokémon no banco.",
      "Pokémon com dano ≥ HP é nocauteado: ele e as cartas ligadas vão para o descarte; o oponente pega prêmios (1, 2 para ex/V/GX, 3 para Mega ex/VMAX/Tag Team).",
      "'Até X' (up to) em ataques permite escolher 0; em Trainers/habilidades o mínimo é 1 (buscas de 'qualquer carta' exigem pelo menos 1).",
      "Se uma carta manda comprar mais cartas do que há no deck, compre o que tiver — você só perde se não puder comprar no início do turno."
    ]
  },
  {
    titulo: "Condições especiais (Pokémon Checkup)",
    itens: [
      "Ordem do checkup: Envenenado → Queimado → Adormecido → Paralisado.",
      "Envenenado: 1 contador no checkup. Queimado: 2 contadores e moeda (cara cura).",
      "Adormecido: não ataca nem recua; moeda no checkup (cara acorda).",
      "Paralisado: não ataca nem recua; sai após o próximo turno do dono.",
      "Confuso: moeda antes de atacar; coroa = ataque falha e 3 contadores no próprio Pokémon.",
      "Ir para o banco ou evoluir remove todas as condições. Adormecido/Confuso/Paralisado se substituem; Veneno e Queimadura acumulam com eles."
    ]
  },
  {
    titulo: "Construção de deck",
    itens: [
      "Exatamente 60 cartas, pelo menos 1 Pokémon Básico.",
      "No máximo 4 cópias com o mesmo nome (exceto energia básica). Nome do treinador/forma faz parte do nome: Meowth, Alolan Meowth e Team Rocket's Meowth são nomes diferentes; ex também (Miraidon ≠ Miraidon ex).",
      "Apenas 1 ACE SPEC no deck inteiro; 1 Radiant; Prism Star: 1 de cada.",
      "Mega Evolution ex (era atual): 3 prêmios, sem regra especial — Mega Kangaskhan é Básico, Mega Lucario evolui de Riolu, Mega Gardevoir de Kirlia.",
      "Tera ex: não recebem dano de ataques enquanto estão no banco. VSTAR Power e ataque GX: 1 por jogo.",
      "Trainer's Pokémon (ex.: Iono's Tadbulb) só evolui da versão com o mesmo treinador."
    ]
  },
  {
    titulo: "Formatos e legalidade (Tournament Handbook)",
    itens: [
      "Standard: marcas de regulamento H, I e J. Expanded: Black & White em diante (marcas D a J) com banlist.",
      "Cartas novas ficam legais na 2ª sexta-feira após o lançamento nos EUA.",
      "Reimpressões com o mesmo nome e texto funcionalmente idêntico podem ser usadas em qualquer versão.",
      "Unlimited: todas as cartas, com banlist própria. Limitados: Sealed, Booster Draft, Build & Battle (40 cartas)."
    ]
  },
  {
    titulo: "Partidas de torneio",
    itens: [
      "Melhor de 3: o perdedor do jogo escolhe quem começa o próximo. No top cut, o maior seed escolhe no jogo 1.",
      "Fim do tempo: mais 3 turnos (+3) dentro de 15 minutos extras.",
      "Suíço, melhor de 3: tempo no jogo 1 = empate; entre o jogo 1 e 2 ou durante o jogo 2 = vence quem ganhou o jogo 1; entre o 2 e o 3 ou durante o 3 = empate.",
      "Eliminatória: vence quem tiver MENOS prêmios restantes; se empatados, continua até alguém pegar prêmio.",
      "Atraso/ausência sem permissão: perde a partida após o tempo (Tardiness Clause).",
      "Informação pública: nº de cartas na mão e deck, prêmios restantes, uso de energia/Supporter/estádio/recuo no turno, dano e condições, cartas em jogo. Comunique tudo claramente; enganar de propósito gera penalidade.",
      "Sleeves opacas e iguais; proxies são proibidos."
    ]
  },
  {
    titulo: "Erratas importantes (agosto/2026)",
    itens: [
      "Pokémon Tool não é mais Item — é uma categoria própria de Trainer.",
      "Prism Energy: só fornece energia enquanto ligada; em Pokémon Básico fornece todos os tipos, mas 1 por vez.",
      "Rare Candy: não pode ser usado no 1º turno nem em Pokémon que entrou em jogo neste turno; não serve para Básico → Stage 1.",
      "Super Rod 'até 3', Sacred Ash 'até 5', Superior Energy Retrieval 'até 4', Energy Retrieval 'até 2', Pal Pad 'até 2'.",
      "Leftovers cura 20; Potion cura 30; Great Ball olha 7 do topo; Pokémon Catcher exige moeda; Lum/Sitrus Berry agem no fim de cada turno; Quick Ball, Hyper Potion e PlusPower tiveram texto reescrito."
    ]
  },
  {
    titulo: "Formatos alternativos (Alternative Play Handbook)",
    itens: [
      "Iniciantes: Poké Catch, Booster Fun, Multi-Experience (Grow & Go), Basic Battle.",
      "Intermediários: Pack Battle, Menu of Limitations, Achievements.",
      "Avançados: Team Format, Raid (e variante Giovanni), Gym Leader Challenge (base Expanded, 60 cartas, um único tipo de Pokémon, sem Pokémon com Rule Box, singleton) e Ditto Draft."
    ]
  }
];

/* Resumo do formato Expanded (guia 5, em espanhol). */
window.EXPANDED = {
  resumo: "Todas as cartas desde Black & White, com banlist (30+ cartas) atualizada a cada coleção. Há muitos Pokémon de compra (Dedenne-GX, Tapu Lele-GX, Crobat V, Oricorio-GX), muitas mecânicas convivendo (EX, GX, BREAK, Tag Team, V, VSTAR, VMAX, Prism Star, Radiant, ex, Mega ex) e um 'lock' para quase tudo.",
  staples: ["VS Seeker (2–4)", "Battle Compressor", "Guzma (gust + troca)", "Boss's Orders / Lysandre", "Float Stone", "Double Dragon Energy", "Twin/Double Colorless Energy", "Path to the Peak / Silent Lab (negam habilidades)", "Temple of Sinnoh (anula energias especiais)"],
  aceSpecs: "SSS Secret Box; SS Prime Catcher, Megaton Blower; S Dowsing Machine, Unfair Stamp, Computer Search; A Sparkling Crystal (Tatsugiri), Grand Tree (Bunnelby), Life Dew (mill).",
  numeros: "30 KO Budew · 70 KO básicos de Poffin · 90 KO básicos de Level Ball · 160 Dedenne-GX/Squawkabilly ex · 170 Tapu Lele-GX · 180 Crobat V e maioria dos Stage 2 de 1 prêmio · 220 Regidrago V · 230 maioria dos básicos de 2 prêmios · 280 'número dourado' (VSTAR, Tag Team) · 310 Gardevoir ex/Mew VMAX · 330 Stage 2 ex · 380 Mega Venusaur ex.",
  decks: [
    ["Regidrago VSTAR", "Tier S (30–40% do meta). Copia o ataque de qualquer dragão no descarte por 2 Grass + 1 Fire; Legacy Star recupera 2 cartas."],
    ["Mega Absol ex", "Segundo melhor: Ability Lock, Item Lock, Special Energy Lock (às vezes ao mesmo tempo); bom contra Regidrago."],
    ["Shadow Rider Calyrex VMAX", "O mais consistente: acelera energia e compra com as próprias habilidades."],
    ["Iron Thorns", "Nega habilidades de Rule Box; controle (campeão mundial 2023)."],
    ["Bunnelby Lock", "Controle e desgaste puro com Vileplume (item lock) e supporter lock."],
    ["Alolan Raichu (Electro Rain OTK)", "Electrode-GX carrega energias; uma jogada que vence quase tudo."],
    ["Lugia VSTAR + Archeops", "Acelera qualquer energia especial."],
    ["Ceruledge ex", "Dano por energias no descarte (Fiery Flint)."],
    ["Gardevoir ex", "Psychic Embrace; 'o melhor se não existisse Regidrago'."],
    ["Mew VMAX (Fusion Strike)", "Genesect V compra muito."],
    ["Raging Bolt / ADP", "Toolbox de Raging Bolt."],
    ["Dusknoir Bomb", "Roxie + Koffing para explodir o campo do oponente."]
  ],
  recursos: "Dowsing Machine (site), Limitless TCG (filtro Expanded JP), Pokecabook.",
  fonte: "https://metafy.gg/guides/view/introduccion-al-formato-expanded-IT1ZNOsIrKo"
};
