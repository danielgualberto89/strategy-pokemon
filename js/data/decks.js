/* Base de conhecimento de decks — resumida e traduzida dos 30 primeiros guias
   gratuitos de Pokémon TCG do Metafy (lidos em 03/11/2026).
   Escala de matchup: 2 = muito favorável, 1 = favorável, 0 = equilibrado,
   -1 = desfavorável, -2 = muito desfavorável. "ir" = escolha recomendada (1º/2º).
   Os textos são resumos/interpretações — consulte o guia original em "fontes". */

window.DECKS = [
  {
    id: "dragapult",
    nome: "Dragapult ex / Crushing Hammer",
    apelidos: ["Pult", "Hammer Pult", "Sparkle Pult", "Dragapult Hammers"],
    estilo: "Stage 2 com spread + disrupção",
    formato: "Standard atual (TEF–PBL / pós-rotação 2027)",
    status: "meta",
    dificuldade: 5,
    resumo: "O deck que domina o formato (30–50% do meta). Monta Dragapult ex e usa Phantom Dive (200 no ativo + 6 contadores espalhados no banco), enquanto trava itens do oponente com Budew e remove energias com Crushing Hammer.",
    comoFunciona: "Dreepy → Drakloak (habilidade Recon Directive: olha o topo e pega carta, é o motor de compra) → Dragapult ex. Budew (Itchy Pollen) dá item lock no início. Munkidori move contadores (Adrena-Brain, precisa de Darkness) e confunde (Mind Bend). Crushing Hammer, Unfair Stamp / Special Red Card, Judge e Team Rocket's Watchtower travam o oponente. O jogo é decidido por board state, não por prize map rígido.",
    pecasChave: [
      ["Dreepy / Drakloak / Dragapult ex", "Linha principal 4-4-3. Drakloak é a compra; Dragapult ex é o atacante (Phantom Dive)."],
      ["Budew", "Itchy Pollen: o oponente não joga Itens no próximo turno. Ganhar a 'guerra de Budew' é metade do jogo."],
      ["Munkidori", "Adrena-Brain move até 3 contadores (com Darkness Energy). Mind Bend confunde — ótimo contra Crustle e no mirror."],
      ["Crushing Hammer (x4)", "Moeda: descarta energia do oponente. Guarde para turnos de Stamp ou late game."],
      ["Meowth ex / Fezandipiti ex", "Meowth busca Supporter; Fez compra cartas após KO. Ambos são alvos de 2 prêmios — cuidado."],
      ["Lillie's Determination, Crispin, Rosa's", "Lillie = compra; Crispin/Rosa = acelerar energias para atacar."],
      ["Unfair Stamp / Sparkling Crystal (ACE)", "Stamp: disrupção após sofrer KO. Sparkling Crystal: Phantom Dive com 1 ligação (anti-Hammer)."],
      ["Night Stretcher, Risky Ruins, Judge, Special Red Card", "Recuperação, dano no banco do oponente e disrupção de mão."]
    ],
    lista: {
      titulo: "“Sparkle Pult” — Genessa Benton, Top 64 NAIC (Chaos Rising)",
      texto: `Pokémon: 17
4 Dreepy TWM 128
4 Drakloak TWM 129
3 Dragapult ex TWM 130
2 Munkidori TWM 95
2 Budew ASC 16
1 Fezandipiti ex ASC 142
1 Meowth ex POR 62
Trainer: 34
4 Lillie's Determination MEG 119
3 Boss's Orders MEG 114
2 Crispin SCR 133
1 Judge POR 76
4 Ultra Ball MEG 131
4 Buddy-Buddy Poffin TEF 144
4 Poké Pad POR 81
4 Crushing Hammer POR 71
3 Night Stretcher ASC 196
2 Special Red Card CRI 82
1 Sparkling Crystal SCR 142
2 Team Rocket's Watchtower DRI 180
Energy: 9
3 Darkness Energy MEE 7
3 Psychic Energy MEE 5
3 Fire Energy MEE 2`
    },
    variantes: [
      "Lista Drixty (venceu Louisville e Puebla): Unfair Stamp, 3ª Darkness ou Dudunsparce ex ou Moltres no flex.",
      "Dudunsparce ex: melhora vs Basic Box e Crustle.",
      "Moltres: melhora vs Grass (Teal Mask, Hydrapple, Arboliva) e OHKO em Budew.",
      "Dragapult/Dusknoir e Dragapult/Blaziken: variantes menos populares com plano parecido."
    ],
    planoDeJogo: {
      turno1: "Bancar vários Dreepy (ideal 3+), Budew e garantir Drakloak ou Lillie's para o turno seguinte. Ultra Ball pode descartar Drakloak para buscar Dreepy antes de Lillie's (recupere com Night Stretcher).",
      turno2: "Evoluir para Drakloak, Itchy Pollen com Budew, bancar Munkidori com Darkness. Usar Recon Directive ANTES de escolher o Supporter.",
      meio: "Não tenha pressa em usar Phantom Dive. Ataque quando o ganho compensar o risco da resposta (risk premium): oponente com mão pequena, chance de remover energias e Drakloaks no mesmo turno, ou após Judge.",
      final: "Feche com Boss's Orders em alvos de 2 prêmios (Meowth ex, Fezandipiti ex) e use Hammer/Stamp/Red Card para que o oponente não consiga responder."
    },
    primeiroOuSegundo: "Mirror: escolha 2º (supporter no T1 → setup em um turno). Contra o resto depende — veja os matchups. A lista Sparkle pode ir 2º às cegas.",
    dicas: [
      "Quem acerta o primeiro Phantom Dive num Dragapult no mirror tende a ganhar — mas quem ataca primeiro fica exposto a Stamp, Hammer e Mind Bend. Avalie o 'risk premium'.",
      "Informação é rei: use Recon Directive/Run Away Draw antes de decidir entre Crispin e Lillie's.",
      "Não coloque mais de 20 de dano no mesmo Pokémon do oponente com Itchy Pollen + Adrena-Brain (protege seu Budew).",
      "Depois de um board wipe, recue para Budew e continue o item lock enquanto se reconstrói.",
      "Boss no Fezandipiti ex e Phantom Dive ao redor dele (com Hammer) é devastador: o oponente precisa ligar energia no Fez para recuar.",
      "Guarde Meowth ex + Ultra Ball como outs para achar Crispin/Boss no late game após disrupção.",
      "Mesmo quando já pode atacar com Dragapult ex, um Itchy Pollen a mais pode acumular energia e dispensar o Crispin depois."
    ],
    erros: [
      "Atacar com Phantom Dive cedo demais contra mão grande (90% dos erros de jogadores menos experientes).",
      "Gastar Crushing Hammer no início quando um KO resolveria a mesma energia.",
      "Usar Mind Bend quando o oponente tem Dunsparce/Dudunsparce (Run Away Draw cura a confusão)."
    ],
    prizeMaps: ["Foco em board state: espalhar dano e deixar KOs duplos para Phantom Dive + Munkidori.", "Fechamento comum: 2 prêmios em Meowth ex/Fezandipiti ex via Boss."],
    matchups: {
      "dragapult": { r: 0, ir: "2º", p: "Guerra de Itchy Pollen: KO Budew com Budew. Spread em Drakloaks com energia. Paciência: deixe o oponente atacar primeiro; Mind Bend + Stamp são as grandes viradas." },
      "basic-box": { r: 0, ir: "1º", p: "Itchy Pollen para travar Energy Switch/Ultra Ball e Hammer na energia do Kangaskhan. Evite Phantom Dive no Kangaskhan (Chien-Pao remove o dano). Prefira Boss em Clefairy ou Latias. Dudunsparce ex ajuda." },
      "alakazam": { r: 0, ir: "1º", p: "Indo 1º monta Drakloaks antes do Kadabra e faz Phantom Dive antes do Alakazam. Guarde Risky Ruins para responder Battle Cage. Genesect bloqueia Stamp; Judge é ótimo; Red Card é fraco aqui." },
      "slowking": { r: 1, ir: "1º", p: "Hammer nas energias dos Slowpoke e item lock (bloqueia Wondrous Patch). Tenha 2 Dragapult ex (Kyurem não pode te pegar de surpresa). Boss no Kangaskhan + Phantom Dive. Cuidado com techs (Drapion paralisa)." },
      "festival-lead": { r: 0, ir: "1º", p: "Mate os atacantes, não os Thwackey. Risky Ruins no T1 pune os bases pequenos. Se ficar atrás, Boss stall em Thwackey sem Air Balloon." },
      "hide-n-sneak": { r: -1, ir: "1º", p: "Hammer no Banette e Cruel Arrow (Fezandipiti ex) no Dhelmise; eles não jogam Switch. Banette/Dhelmise não fazem OHKO no Fez." },
      "crustle": { r: 0, ir: "1º/2º", p: "Hammer SOMENTE a Mist Energy para abrir Mind Bend (confusão) no Crustle. Judge junto para tirar Jumbo Ice Cream. Cuidado ao usar Budew com Kangaskhan ativo." },
      "mega-sharpedo": { r: 0, ir: "2º", p: "Hammers são ótimos (eles jogam poucas energias). Item lock impede Poké Pad. Procure KO duplo em Pecharunt ex + Sharpedo (1-2-3)." },
      "hydrapple": { r: 0, ir: "1º", p: "Judge + Itchy Pollen no T2; Hammer na energia do Celebi; Boss KO Meganium; não mate Celebi cedo (abre Briar). Moltres ajuda muito." },
      "mega-lucario": { r: 0, ir: "1º", p: "Hammers cedo e depois Phantom Dive para 2-hit nos Fighting. Contra Garchomp cuidado com Spiritomb; Boss em Roserade." },
      "zoroark": { r: -1, ir: "—", p: "Zoroark costuma ser favorável a eles: cuidado com Darmanitan e Yveltal; Moltres ajuda a 'amaciar' Zoroark (jogue ao redor de Reshiram)." },
      "honchkrow": { r: -2, ir: "—", p: "TR Articuno anula boa parte do seu dano em básicos; Honchkrow resiste ao seu plano. Matchup ruim." },
      "okidogi": { r: 1, ir: "—", p: "Seus Hammers são o pior pesadelo deles. Eles tentam 2 prêmios antes do seu 1º Phantom Dive." },
      "mew-box": { r: -1, ir: "—", p: "Mew ex/Lillie's Clefairy batem em fraqueza e Frillish trava itens. Quebre o item lock e Hammer as energias." },
      "mega-manectric": { r: 0, ir: "—", p: "Spread mata os Eelektrik; Battle Cage deles protege. Pressione antes do Cage." },
      "tera-box": { r: -1, ir: "—", p: "Tera Box gosta do matchup (60/40). Dudunsparce ex castiga quem tem muitos ex no banco." },
      "garchomp": { r: 0, ir: "1º", p: "Hammer cedo, Boss Roserade com Jet Headbutt; cuidado com Spiritomb + 2 Roserade (320)." }
    },
    fontes: [
      { titulo: "Dragapult/Crushing Hammer (Julius)", url: "https://metafy.gg/guides/view/dragapult-slash-crushing-hammer-b8VBEqelFoB" },
      { titulo: "Sparkle Pult — NAIC Top 64 (Genessa Benton)", url: "https://metafy.gg/guides/view/how-i-got-top-64-at-naic-chaos-rising-6Gv1OyAPLVs" },
      { titulo: "Dance of the Dragons — o mirror", url: "https://metafy.gg/guides/view/dance-of-the-dragons-an-introduction-to-th-AyvGhgwiglZ" }
    ],
    assinatura: ["Dreepy", "Drakloak", "Dragapult ex", "Budew", "Crushing Hammer", "Munkidori"]
  },

  {
    id: "basic-box",
    nome: "Basic Box / Slop Box (Mega Kangaskhan)",
    apelidos: ["Slop Box", "Ogerpon Box", "Big Basics", "Clefairy Box", "Raging Bolt"],
    estilo: "Big Basics (Pokémon básicos de 2–3 prêmios)",
    formato: "Standard atual",
    status: "meta",
    dificuldade: 3,
    resumo: "Caixa de atacantes básicos poderosos com muita aceleração de energia. Flexível: escolhe o atacante e o prize map conforme o matchup.",
    comoFunciona: "Mega Kangaskhan ex (Run Errand: compra 2 se estiver ativo) dá consistência e pressão. Teal Mask Ogerpon ex acelera, Wellspring Mask Ogerpon ex prende (Sob) e faz Torrential Pump, Raging Bolt ex e Iron Crown ex (Twin Shotels em 2 alvos do banco) cobrem matchups. Crispin + Energy Switch aceleram. Chien-Pao remove os próprios Pokémon danificados (com Area Zero Underdepths) para negar prêmios.",
    pecasChave: [
      ["Mega Kangaskhan ex (x4)", "Motor e pressão; 4 cópias para abrir com ele no ativo."],
      ["Teal Mask / Wellspring Mask Ogerpon ex", "Aceleração e atacante; Wellspring prende o ativo (Sob) e faz 2 prêmios cedo."],
      ["Raging Bolt ex", "KOs grandes quando há energia suficiente."],
      ["Iron Crown ex", "Tech vs Alakazam, Dipplin/Festival Lead (passa por Shaymin/Rabsca)."],
      ["Chien-Pao", "Remove Pokémon danificados do próprio banco (nega prêmios) e remove estádio."],
      ["Latias ex, Fezandipiti ex, Clefairy, Meowth ex", "Suporte (recuo, compra, fraqueza, busca)."],
      ["Crispin, Energy Switch, Prime Catcher, Special Red Card, Area Zero Underdepths", "Aceleração, gust, disrupção e banco maior."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "Kangaskhan ativo, Teal Mask no banco, preparar o primeiro atacante.",
      turno2: "Começar a tomar prêmios antes de o oponente montar (especialmente vs Dragapult).",
      meio: "Sempre ter o próximo atacante pronto antes do seu ativo cair. Use Chien-Pao para descartar Pokémon danificados.",
      final: "Prime Catcher no turno decisivo; Special Red Card quando o oponente tem ≤3 prêmios e depende de cartas específicas."
    },
    primeiroOuSegundo: "Quase sempre 1º.",
    dicas: [
      "Planeje o prize map antes de atacar — não pegue o prêmio fácil que te deixa sem continuação.",
      "Escolha o ativo com cuidado: Kangaskhan compra, mas às vezes outro atacante faz jogada melhor.",
      "Não gaste toda aceleração num ataque que não muda a partida.",
      "Não encha o banco: só baixe o que contribui para o plano (Boss/spread punem).",
      "Pense um turno à frente: quem ataca se o ativo cair?",
      "Guarde Prime Catcher para o turno decisivo.",
      "Spread de dano só vale se criar KOs futuros; KO imediato que impede o próximo atacante é prioridade."
    ],
    erros: ["Insistir em Kangaskhan contra Crushing Hammer — troque para Wellspring/outro atacante.", "Encher o banco contra Dragapult/Dusknoir."],
    prizeMaps: ["vs Zoroark: Wellspring 2 → Teal Mask 2 → Raging Bolt 2 (2-2-2).", "vs Slowking: 3-1-2 ou 3-2-1 (KO no Kangaskhan com Raging Bolt primeiro)."],
    matchups: {
      "dragapult": { r: 1, ir: "1º", p: "Favorável se o Hammer não descarrilar seu setup. Tome prêmios antes do Phantom Dive constante; troque para Wellspring (Sob) se a energia do Kangaskhan sumir. Vs Pult/Dusknoir: gestão de banco e Chien-Pao." },
      "alakazam": { r: -1, ir: "1º", p: "Difícil. Iron Crown ex nos Abra antes de evoluírem; se não der, Kangaskhan + Teal Mask e jogo de tempo." },
      "basic-box": { r: 0, ir: "1º", p: "Mirror: ter atacante de resposta pronto antes do 1º KO; organize o banco." },
      "zoroark": { r: 0, ir: "1º", p: "Plano Wellspring 2-2-2 é o mais confiável; cuidado com Watchtower e Red Card." },
      "slowking": { r: 1, ir: "1º", p: "Sob prende Slowpoke/Slowking/Latias; KO no Kangaskhan deles com Raging Bolt. Vigie Switch e Secret Box deles." },
      "festival-lead": { r: -1, ir: "1º", p: "Iron Crown ex cedo em Goldeen/Dipplin; Red Card + Prime Catcher quando eles tiverem ≤3 prêmios." },
      "hide-n-sneak": { r: 0, ir: "1º", p: "Tome KOs cedo, controle quais Pokémon eles podem nocautear e use Chien-Pao para descartar os danificados." },
      "crustle": { r: -2, ir: "—", p: "Crustle bloqueia dano de Pokémon ex: 12% de vitória no NAIC. Precisa de techs não-ex." },
      "mega-manectric": { r: -1, ir: "—", p: "Flash Ray impede dano de Pokémon básicos — seu deck inteiro. Use gust para contornar." },
      "mega-sharpedo": { r: 0, ir: "—", p: "Eles querem KO no Sharpedo no T2; você tem 3 formas de OHKO (Teal Mask com 5 energias, Kangaskhan, Iron Leaves)." },
      "okidogi": { r: -1, ir: "—", p: "Okidogi faz OHKO em Fez, Meowth e Kangaskhan e troca bem contra básicos." },
      "tera-box": { r: -1, ir: "—", p: "Tera Box tem mais outs de retreat lock (≈60/40 para eles)." },
      "mew-box": { r: -1, ir: "—", p: "Mew box lista 'Big Basics' como favorável." }
    },
    fontes: [{ titulo: "Mastering the basics of Basic Box", url: "https://metafy.gg/guides/view/mastering-the-basics-of-basic-box-VafkHyafArB" }],
    assinatura: ["Mega Kangaskhan ex", "Teal Mask Ogerpon ex", "Wellspring Mask Ogerpon ex", "Raging Bolt ex", "Chien-Pao", "Crispin", "Energy Switch"]
  },

  {
    id: "hide-n-sneak",
    nome: "Hide 'n' Sneak (Dhelmise / Spiritomb)",
    apelidos: ["HnS", "Dhelmise", "Sneakers", "Ghost Veil"],
    estilo: "Single-prize agressivo / descarte",
    formato: "Standard atual (Pitch Black em diante)",
    status: "meta",
    dificuldade: 4,
    resumo: "Deck de um prêmio que bate 170 com Dhelmise e fica mais forte quanto mais Pokémon com a habilidade Hide 'n' Sneak estão no descarte. Spiritomb finaliza com spread grande.",
    comoFunciona: "Três planos: Dhelmise agressivo (Vengeful Anchor 170), spread com Poltchageist/Sinistcha (Matcha Spin) e híbrido com Spiritomb (Spirit End exige ~13 HnS no descarte). Banette (Puppet Pull: 80 por 1 energia e busca carta) é um primeiro atacante excelente. Legacy Energy (ACE) faz o oponente pegar um prêmio a menos.",
    pecasChave: [
      ["Dhelmise (x4)", "Atacante principal (170)."],
      ["Shuppet / Banette", "80 de dano por 1 energia + busca carta; KO em Budew, ótimo vs Alakazam."],
      ["Poltchageist / Sinistcha", "Matcha Spin (spread) e pivô."],
      ["Spiritomb", "Finalizador quando o descarte está cheio de HnS."],
      ["Lillie's Clefairy ex (x2)", "Fraqueza nos dragões — 'cheat code' contra Dragapult."],
      ["Patrat, Shaymin", "Patrat anula movimento de contadores; Shaymin protege o banco (Slowking, Wellspring, Grimmsnarl, Zoroark)."],
      ["Legacy Energy, Telepathic Energy, Night Stretcher, Ultra Ball, Gwynn, Prism Tower", "Motor de descarte e energia."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "Sem saber o oponente: ir 1º às cegas e preparar Banette para o T2. Faça o prize check cedo.",
      turno2: "Banette (ou Dhelmise 170 indo 2º) para tomar o primeiro prêmio — tomar o 1º prêmio é crucial.",
      meio: "Manter poucos Pokémon no banco, descartar HnS com Ultra Ball/Gwynn/Prism Tower, preparar Legacy no ativo antes do oponente ter 4 prêmios.",
      final: "Spiritomb ou Matcha Spin + Boss duplo em alvos já danificados."
    },
    primeiroOuSegundo: "1º às cegas (Banette T2 estabiliza). Indo 2º, o swing de 170 no T1 acontece só ~50% das vezes.",
    dicas: [
      "Banette é subestimado: 80 por 1 energia e busca a carta que quiser.",
      "Dois Clefairy em campo criam checkmate contra Dragapult, mas viram passivo se você tomar Stamp/Red Card.",
      "Contra Slowking: mantenha só 2 Dhelmise no banco até o Trifrost; depois baixe o 3º.",
      "Não descarte todos os Banette — você precisa deles depois do Red Card.",
      "Preserve Boss para o late game (contornar Legacy, Bloodmoon Ursaluna)."
    ],
    erros: ["Começar com Latias (alvo grátis de 2 prêmios).", "Descartar todos os Banette e ficar sem resposta à disrupção."],
    prizeMaps: ["2-4, 1-1-4 ou 1-1-2-2 (Spiritomb leva 4 de uma vez)."],
    matchups: {
      "dragapult": { r: 1, ir: "1º/2º", p: "Banette KO Budew, depois Boss em Drakloak com energia + KO usando a fraqueza do Clefairy. Variante Dusknoir/Telepathic é muito favorável; Blaziken levemente desfavorável (Patrat ajuda)." },
      "basic-box": { r: 0, ir: "1º", p: "Precisa de velocidade; Chien-Pao remove dano e Wellspring tira 2 prêmios. Rotas: 2 prêmios + Matcha Spin + KOs em alvos ≤210." },
      "slowking": { r: 2, ir: "1º", p: "Extremamente favorável: manutenção baixa, Legacy e Spiritomb. Bancar só 2 Dhelmise; Shaymin ajuda." },
      "alakazam": { r: 2, ir: "1º", p: "Banette é um monstro; Hide 'n' Sneak é pesadelo para eles. Boss em Dunsparce para virar o prize race." },
      "festival-lead": { r: 0, ir: "2º", p: "Batalha de recursos: tome o 1º prêmio (eles precisam de 2 Gladion por causa da Legacy)." },
      "zoroark": { r: -1, ir: "—", p: "Watchtower, Darmanitan (fraqueza Dark) e Munkidori. Bancar Shaymin enquanto não souber se jogam Darmanitan." },
      "crustle": { r: 0, ir: "—", p: "Muita cura (até ~380). Vença com Spiritomb nos dois Kangaskhan, sem mostrar Spiritomb cedo (eles ligam Mist)." },
      "mega-lucario": { r: 2, ir: "1º", p: "Autowin: Dhelmise faz OHKO em Lucario (3 prêmios) e Lucario quase não te machuca." },
      "honchkrow": { r: 1, ir: "1º", p: "Batalha 1 por 1 em que sua manutenção é menor. Cuidado com Murkrow Torment no início." },
      "hydrapple": { r: -1, ir: "—", p: "A cura e o Briar complicam; foque em 2 prêmios cedo + Spiritomb." },
      "hide-n-sneak": { r: 0, ir: "—", p: "Mirror: quem toma o 1º prêmio e põe Legacy cedo. Guarde 2 Boss para Bloodmoon Ursaluna." },
      "mega-sharpedo": { r: 0, ir: "—", p: "Teoricamente bom (3 prêmios), mas 3 Judge deles incomodam." }
    },
    fontes: [
      { titulo: "Hide in my mind… — Frankfurt recap", url: "https://metafy.gg/guides/view/hide-in-my-mind-and-sneak-into-their-own-a-8jkhyOBhBqf" },
      { titulo: "Sneak your way to victory (notas)", url: "https://metafy.gg/guides/view/sneak-your-way-to-victory-hUDNRkqOjyX" }
    ],
    assinatura: ["Dhelmise", "Shuppet", "Banette", "Poltchageist", "Sinistcha", "Spiritomb", "Legacy Energy"]
  },

  {
    id: "slowking",
    nome: "Slowking / Mega Kangaskhan (toolbox)",
    apelidos: ["Slowking", "Slowpoo"],
    estilo: "Toolbox (copia ataques do topo do deck)",
    formato: "Standard atual",
    status: "meta",
    dificuldade: 5,
    resumo: "Slowking (Seek Inspiration) usa o ataque do Pokémon que está no topo do deck. Você manipula o topo para escolher, a cada turno, o ataque que resolve o problema: Kyurem (Trifrost, spread) ou Metagross (KO grande), entre outros.",
    comoFunciona: "Três camadas: 1) montar board e motor (Mega Kangaskhan ex, Dudunsparce); 2) decidir o que o board precisa; 3) colocar o Pokémon certo no topo (Academy at Night, Ciphermaniac's Codebreaking) e atacar com Slowking. Wondrous Patch e Telepathic Energy fornecem energia.",
    pecasChave: [
      ["Slowpoke / Slowking", "Toolbox — proteja a contagem de Slowpoke; cada Slowking perdido é um turno de ataque a menos."],
      ["Kyurem", "Trifrost: dano em vários Pokémon (spread)."],
      ["Metagross", "KO grande em alvo único."],
      ["Mega Kangaskhan ex / Dudunsparce", "Motor de compra (Kangaskhan é 3 prêmios — não exagere)."],
      ["Academy at Night, Ciphermaniac's Codebreaking", "Controle do topo do deck."],
      ["Lillie's Clefairy ex, Latias ex, Fezandipiti ex, Shaymin, Pawmot, Unown, Drapion", "Techs e suporte."]
    ],
    lista: {
      titulo: "Charlie Queen — Slowking Masterclass (formato 30th)",
      texto: `Pokémon: 22
4 Slowpoke SCR 57
3 Slowking SCR 58
1 Dunsparce TEF 128
1 Dunsparce JTG 120
2 Dudunsparce TEF 129
1 Fezandipiti ex ASC 142
1 Latias ex SSP 76
1 Lillie's Clefairy ex ASC 76
1 Tatsugiri TWM 131
1 Shaymin DRI 10
1 Kyurem SFA 47
1 Metagross CRI 61
1 Pawmot PFL 34
1 Unown 30C 72
1 Dedenne SSP 87
1 Smoochum SSP 75
Trainer: 29
4 Lillie's Determination MEG 119
4 Team Rocket's Petrel ASC 207
1 Lana's Aid TWM 155
4 Poké Pad POR 81
4 Night Stretcher ASC 196
3 Wondrous Patch PFL 94
3 Ultra Ball MEG 131
1 Switch MEG 130
1 Precious Trolley SSP 185
4 Academy at Night SFA 54
Energy: 9
5 Psychic Energy MEE 5
4 Telepathic Psychic Energy POR 88`
    },
    planoDeJogo: {
      turno1: "Vários Slowpoke em campo e o motor online (Kangaskhan/Dudunsparce).",
      turno2: "Decida o objetivo do ataque ANTES de sequenciar: KO, spread, remover peça, preparar o próximo turno?",
      meio: "Use Kangaskhan para comprar SEM destruir o topo já preparado (compra por baixo). Conte quantos Kyurem/Metagross restam.",
      final: "Antes de atacar pergunte: 'se eu fizer esse KO, qual a melhor resposta do oponente?'"
    },
    primeiroOuSegundo: "Geralmente 1º.",
    dicas: [
      "Sequência: 1) objetivo 2) escolher o ataque 3) como colocar o Pokémon no topo 4) resto do turno 5) checar o prize map.",
      "Valor do ataque = dano + prêmios + tempo + posição futura + recursos gastos.",
      "Proteja suas opções: não comprometa todos os atacantes num plano só.",
      "Quantos turnos de Slowking você precisa neste jogo? Garanta que terá esses Slowking."
    ],
    erros: ["Atacar só porque pode.", "Trifrost sem plano (60 em todos só vale se criar KOs).", "Encher o banco de Rule Box (Kangaskhan = 3 prêmios).", "Queimar Ciphermaniac cedo demais."],
    prizeMaps: ["Contra decks de ex: Trifrost prepara KOs duplos; Metagross fecha alvos grandes."],
    matchups: {
      "dragapult": { r: -1, ir: "1º", p: "Eles fazem item lock (bloqueia Wondrous Patch) e martelam energias. Precisa resolver o Budew e explorar a fraqueza (Clefairy)." },
      "hide-n-sneak": { r: -2, ir: "—", p: "Muito difícil: eles têm manutenção baixa e Legacy. Pawmot + Unown e Cofagrigus são ideias para melhorar." },
      "basic-box": { r: -1, ir: "—", p: "Wellspring Sob prende seus Pokémon e eles miram o seu Kangaskhan." },
      "honchkrow": { r: 2, ir: "1º", p: "Trifrost é imparável para eles (sem Shaymin): 2 Trifrost costumam encerrar o jogo." },
      "mega-lucario": { r: 1, ir: "—", p: "Metagross faz o KO no Lucario; eles precisam de disrupção para te parar." },
      "crustle": { r: 1, ir: "—", p: "Favorável (Crustle tem ~34%)." },
      "zoroark": { r: -1, ir: "—", p: "Zoroark bate em fraqueza (Dark) e copia Darmanitan." },
      "mega-manectric": { r: 0, ir: "—", p: "Baby Manectric força você a atacar com Latias/Kangaskhan." },
      "okidogi": { r: -1, ir: "—", p: "Se eles tiverem Shaymin, seu Trifrost perde força." },
      "mega-sharpedo": { r: 0, ir: "—", p: "Eles tentam 3-2-1 (Kangaskhan, Latias, Slowking)." },
      "tera-box": { r: 0, ir: "1º", p: "50/50; depende do seu ACE SPEC (Prime Catcher vs Secret Box)." }
    },
    fontes: [
      { titulo: "The Ultimate Slowking Guide", url: "https://metafy.gg/guides/view/the-ultimate-slowking-guide-1Fnl8dPZ7DA" },
      { titulo: "Charlie Queen — Slowking Masterclass", url: "https://metafy.gg/guides/view/charlie-queen-slowking-masterclass-sEytmLPPHXE" }
    ],
    assinatura: ["Slowpoke", "Slowking", "Kyurem", "Metagross", "Academy at Night", "Wondrous Patch"]
  },

  {
    id: "alakazam",
    nome: "Alakazam / Dudunsparce",
    apelidos: ["Zam", "Alakazam", "ZamNoir (variante Dusknoir)"],
    estilo: "Single-prize Stage 2 (dano = cartas na mão)",
    formato: "Standard atual",
    status: "meta",
    dificuldade: 4,
    resumo: "Alakazam (Powerful Hand) coloca contadores de dano iguais ao número de cartas na sua mão. O deck compra muitas cartas e troca 1 prêmio por 2–3 do oponente.",
    comoFunciona: "Abra → Kadabra (compra 2 ao evoluir) → Alakazam. Dudunsparce (Run Away Draw: compra e volta para o deck — nunca fica exposto) é o motor; Enriching Energy (ACE) + Wondrous Patch reabastecem a mão. Supporters que ADICIONAM cartas (Dawn, Hilda), não que embaralham a mão. Battle Cage, Shaymin e Psyduck ('Bench Barrier Protection Squad') protegem o banco.",
    pecasChave: [
      ["Abra / Kadabra / Alakazam 4-4-3", "Atacante e compra; Kadabra 30 de dano mata Budew."],
      ["Dunsparce / Dudunsparce 4-4", "Motor de compra; embaralhe-o de volta, não deixe em campo."],
      ["Dawn / Hilda", "Busca de Pokémon e Enriching Energy."],
      ["Enriching Energy + Wondrous Patch", "Compra repetida ao ligar energia."],
      ["Battle Cage, Shaymin, Psyduck", "Protegem o banco de Munkidori/Phantom Dive, Wellspring/Scream Tail e Dusknoir."],
      ["Enhanced Hammer", "Remove Mist Energy (que anula contadores)."],
      ["Abra TWM (Teleporter) + Jet Energy", "Evitam deck-out e dão mobilidade."]
    ],
    lista: {
      titulo: "Project Artemis (Kevin) — Phantasmal Flames (pré-rotação: Tulip, Counter Catcher, Artazon e Jet Energy saíram do Standard; o guia vencedor de Indianapolis usa Dedenne, Lucky Helmet, Genesect e Sacred Ash)",
      texto: `Pokémon: 23
3 Abra MEG 54
1 Abra TWM 80
4 Kadabra MEG 55
3 Alakazam MEG 56
4 Dunsparce PAL 156
4 Dudunsparce TEF 129
1 Fan Rotom SCR 118
1 Shaymin DRI 10
1 Fezandipiti ex SFA 38
1 Psyduck MEP 7
Trainer: 32
4 Dawn PFL 87
4 Hilda WHT 84
3 Boss's Orders MEG 114
2 Tulip PAR 181
4 Buddy-Buddy Poffin TEF 144
2 Dusk Ball SSP 175
2 Wondrous Patch PFL 94
2 Rare Candy MEG 125
2 Night Stretcher SFA 61
2 Enhanced Hammer TWM 148
1 Counter Catcher PAR 160
3 Battle Cage PFL 85
1 Artazon PAL 171
Energy: 5
3 Psychic Energy MEE 5
1 Enriching Energy SSP 191
1 Jet Energy PAL 190`
    },
    planoDeJogo: {
      turno1: "3 Abra e Dunsparces em campo (Fan Rotom busca Dunsparces).",
      turno2: "Evoluir manualmente para Kadabra (compra) e construir a mão; Rare Candy só se precisar acelerar.",
      meio: "Use Battle Cage quando o spread de Munkidori/Dusknoir for ficar online. Guarde Dudunsparce para sair de disrupção (Stamp/Red Card/Iono).",
      final: "Tulip recupera atacantes e dá +60 no último KO. Boss em alvos de 2–3 prêmios."
    },
    primeiroOuSegundo: "Geralmente 2º (setup melhor contra Stage 2); 1º contra decks de Fan Rotom/Noctowl e decks agressivos de básicos.",
    dicas: [
      "Nunca deixe Dudunsparce exposto — use Run Away Draw para devolvê-lo ao deck.",
      "Deixe uma energia Psychic no descarte cedo para ligar o Wondrous Patch.",
      "Mist Energy anula o Powerful Hand: contorne com gust até achar Enhanced Hammer.",
      "Não banque Fezandipiti ex cedo contra Dragapult e Mega Absol (eles batem 200 nele e terminam com spread)."
    ],
    erros: ["Usar supporters que embaralham a mão (Professor's Research, Iono, Lillie's) — você quer mão grande.", "Bancar Fan Rotom em matchups onde ele vira prêmio fácil no late game."],
    prizeMaps: [
      "vs Dragapult: Budew 1 → Drakloak 1 → Dragapult 2 → Meowth/Fez 2.",
      "vs Mega Greninja: Budew 1 → Mega Greninja 3 → Meowth/Fez 2.",
      "vs Mega Lucario: Solrock 1 → Mega Lucario 3 → Meowth 2.",
      "vs Mega Absol: 1-2-3, deixando o KO de 3 prêmios por último."
    ],
    matchups: {
      "dragapult": { r: 1, ir: "2º", p: "Kadabra mata Budew (30). Battle Cage anula o ping do Phantom Dive e o Adrena-Brain; Psyduck para Dusknoir. Guarde draws para o Stamp/Red Card. (Um guia diz desfavorável; com o 'Anti-Pult squad' fica favorável.)" },
      "basic-box": { r: 1, ir: "1º", p: "Eles têm muitos alvos de vários prêmios e dependem de Meowth. Shaymin contra Wellspring; Lucky Helmet se te prenderem." },
      "zoroark": { r: 1, ir: "2º", p: "Board só de Alakazams e Dudunsparces. Use Battle Cage para trocar com Watchtower. Genesect bloqueia o Stamp deles." },
      "mega-lucario": { r: 1, ir: "2º", p: "Solrock pressiona cedo, mas Lucario dá 3 prêmios. Rocky Fighting Energy é o problema; Genesect bloqueia Hero's Cape." },
      "hide-n-sneak": { r: -2, ir: "—", p: "Banette e a habilidade Hide 'n' Sneak são pesadelo; trocar 1 por 1 favorece eles." },
      "crustle": { r: -1, ir: "—", p: "Crustle ~61% contra você: 4 Mist no Kangaskhan e Xerosic quando sua mão está grande." },
      "festival-lead": { r: -1, ir: "—", p: "Com Gladion's Final Battle eles tomam 2 prêmios contra one-prizers." },
      "honchkrow": { r: 0, ir: "1º", p: "50/50; Articuno deles protege básicos do Powerful Hand." },
      "mega-manectric": { r: 2, ir: "—", p: "Manectric não consegue fazer parede contra contadores." },
      "slowking": { r: 0, ir: "—", p: "Trocas de prêmios equilibradas." },
      "tera-box": { r: 1, ir: "—", p: "Leve favorável; com Shaymin cedo fica muito bom." },
      "mega-sharpedo": { r: -1, ir: "—", p: "Carvanha + Binding Mochi faz OHKO no Alakazam (140) e eles têm 3 Judge + Watchtower." },
      "okidogi": { r: 0, ir: "—", p: "50/50: quem toma o 1º prêmio. Legacy não funciona contra contadores." },
      "mega-lopunny": { r: -1, ir: "2º", p: "4 Mist Energy + Hilda: precisa de 2 Enhanced Hammer bem cronometrados." }
    },
    fontes: [
      { titulo: "Alakazam Guide — Phantasmal Flames (Project Artemis)", url: "https://metafy.gg/guides/view/alakazam-guide-phantasmal-flames-yxbYHfmexMy" },
      { titulo: "Drawing Cards Is Good! (Ken Guy)", url: "https://metafy.gg/guides/view/drawing-cards-is-good-alakazam-in-the-chao-agm6UouHS8d" }
    ],
    assinatura: ["Abra", "Kadabra", "Alakazam", "Dunsparce", "Dudunsparce", "Dawn", "Enriching Energy"]
  },

  {
    id: "festival-lead",
    nome: "Festival Lead (Dipplin / Thwackey)",
    apelidos: ["FLead", "Festival", "Praça de Festas", "Applin"],
    estilo: "Single-prize que ataca duas vezes",
    formato: "Standard atual (Pitch Black)",
    status: "meta",
    dificuldade: 4,
    resumo: "One-prizers com a habilidade Festival Lead: com o estádio Festival Grounds em jogo, atacam DUAS vezes por turno. Thwackey busca qualquer carta.",
    comoFunciona: "Applin/Dipplin (atacante principal) e Goldeen/Seaking atacam duas vezes; Grookey/Thwackey busca cartas (encadeie dois Thwackey); Rellor/Rabsca protege o banco; Gladion's Final Battle permite tomar 2 prêmios contra decks de um prêmio.",
    pecasChave: [
      ["Applin / Dipplin", "Atacante principal com modificadores (Brave Bangle)."],
      ["Goldeen / Seaking", "Atacante alternativo e bom ativo inicial."],
      ["Grookey / Thwackey", "'O melhor Pokémon de suporte do jogo' — busca."],
      ["Rellor / Rabsca, Shaymin", "Proteção do banco contra spread."],
      ["Festival Grounds", "Habilita o ataque duplo."],
      ["Gladion's Final Battle, Poké Pad, Secret Box (ACE), Air Balloon", "Recursos-chave."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "Sair 1º. Ativo: Goldeen (a menos que tenha Dipplin garantido no próximo turno). Indo 2º às cegas, bancar todos os Pokémon do arquétipo (contra Risky Ruins).",
      turno2: "Atacar duas vezes e tomar 2 prêmios.",
      meio: "Monte pelo menos dois Thwackey. Tenha SEMPRE um Pokémon Festival Lead de reserva.",
      final: "Buscas extras de Thwackey pensando no próximo turno (e em Special Red Card)."
    },
    primeiroOuSegundo: "1º sempre que puder.",
    dicas: [
      "Contra Unfair Stamp, não dê KO cedo sem banco desenvolvido.",
      "Encadeie Thwackey: o primeiro busca o segundo.",
      "Se precisa de muitas peças, busque Lillie's com o 1º Thwackey."
    ],
    erros: ["Atacar com Dipplin/Seaking sem reserva e ficar sem continuidade após disrupção.", "Baixar techs inúteis no matchup e travar o banco."],
    prizeMaps: ["Contra 2–3 prêmios: o prize trade já favorece você.", "Contra one-prizers: Gladion para fazer 2 prêmios num turno."],
    matchups: {
      "basic-box": { r: 1, ir: "1º", p: "Prize trade favorável contra básicos de 2–3 prêmios." },
      "mega-lucario": { r: 1, ir: "1º", p: "Mesma lógica: Lucario dá 3 prêmios." },
      "hydrapple": { r: 1, ir: "1º", p: "Favorável." },
      "zoroark": { r: 2, ir: "1º", p: "Zoroark é fraco a Grass e sofre contra one-prizers." },
      "garchomp": { r: 1, ir: "1º", p: "Garchomp é fraco a Grass." },
      "dragapult": { r: -1, ir: "1º", p: "Spread de Phantom Dive é o problema; Rabsca ajuda, mas se Dragapult ex atacar você está em apuros." },
      "alakazam": { r: 1, ir: "1º", p: "Com Gladion a balança pende para você na briga de one-prizers." },
      "hide-n-sneak": { r: 0, ir: "1º", p: "Batalha de recursos; Legacy deles exige 2 Gladion." },
      "excadrill": { r: -1, ir: "—", p: "Resistência a Grass e alto HP." },
      "grimmsnarl": { r: -1, ir: "—", p: "Froslass + Munkidori espalham contadores nos seus Pokémon de baixo HP." },
      "festival-lead": { r: 0, ir: "1º", p: "Mirror: quem começa evolui e toma os 2 primeiros prêmios." },
      "slowking": { r: 0, ir: "—", p: "Trifrost ameaça seus Pokémon de baixo HP." },
      "okidogi": { r: -1, ir: "—", p: "Solrock donk e Cornerstone Ogerpon (não recebe dano de Dipplin/Seaking) complicam." },
      "mega-manectric": { r: 0, ir: "1º", p: "Baby Manectric faz parede; sua saída é Gladion + Applin." },
      "tera-box": { r: 0, ir: "—", p: "Eles tentam matar Rellor para impedir Rabsca." }
    },
    fontes: [{ titulo: "Guía Competitiva de Festival Lead (ES)", url: "https://metafy.gg/guides/view/guia-competitiva-de-festival-lead-uSdFWG1rcop" }],
    assinatura: ["Applin", "Dipplin", "Grookey", "Thwackey", "Goldeen", "Seaking", "Festival Grounds", "Rabsca"]
  },

  {
    id: "zoroark",
    nome: "N's Zoroark ex",
    apelidos: ["Zoro", "Zoroark do N", "Zorobark"],
    estilo: "Stage 1 toolbox (copia ataques dos Pokémon do N)",
    formato: "Standard atual",
    status: "meta",
    dificuldade: 4,
    resumo: "N's Zoroark ex compra com Trade (descarta 1, compra 2) e ataca com Night Joker, copiando o ataque de um Pokémon do N no banco (Darmanitan, Zekrom, Reshiram).",
    comoFunciona: "4 Buddy-Buddy Poffin para Zorua cedo; ideal 3 Zoroark em campo. N's PP Up acelera Darkness do descarte. N's Darmanitan (Flamebody Cannon: 90 no ativo + 90 no banco) faz KOs duplos. Munkidori e Binding Mochi + Pecharunt ex ajustam a conta. Yveltal faz retreat lock. Watchtower/Unfair Stamp/Hammers disruptam.",
    pecasChave: [
      ["N's Zorua / N's Zoroark ex", "Compra (Trade) + ataque (Night Joker)."],
      ["N's Darmanitan, N's Zekrom, N's Reshiram", "Ataques copiados."],
      ["N's PP Up, N's Castle", "Energia do descarte e recuo grátis."],
      ["Munkidori, Pecharunt ex + Binding Mochi, Yveltal", "Modificadores de dano e lock."],
      ["Crushing Hammer, Unfair Stamp, Team Rocket's Watchtower, Xerosic", "Disrupção."]
    ],
    lista: {
      titulo: "Gustavo — lista para Chaos Rising (guia em PT)",
      texto: `Pokémon: 16
4 N's Zorua JTG 97
4 N's Zoroark ex JTG 98
2 Munkidori ASC 99
1 N's Zekrom ASC 155
1 Yveltal MEG 88
1 N's Reshiram JTG 116
1 Pecharunt ex SFA 39
1 Meowth ex POR 62
1 Budew ASC 16
Trainer: 36
4 Lillie's Determination MEG 119
4 Boss's Orders MEG 114
2 Cyrano SSP 170
1 Xerosic's Machinations SFA 64
4 Buddy-Buddy Poffin TEF 144
4 Ultra Ball ASC 213
4 Crushing Hammer POR 71
3 N's PP Up JTG 153
2 Poké Pad ASC 198
2 Night Stretcher ASC 196
1 Unfair Stamp TWM 165
1 Enhanced Hammer TWM 148
2 N's Castle JTG 152
2 Team Rocket's Watchtower ASC 210
Energy: 8
8 Darkness Energy MEE 7`
    },
    planoDeJogo: {
      turno1: "Poffin para 2+ Zorua; use os Itens cedo (contra Pult o Budew vem).",
      turno2: "Evoluir, começar as Trocas, ligar energias (PP Up).",
      meio: "Janela de Darmanitan no T2–T3 para tirar Drakloaks/motores de compra. Não deixe dano no lado do oponente se ele joga Munkidori.",
      final: "Boss em liabilities de 2 prêmios; Unfair Stamp/Watchtower para travar a resposta."
    },
    primeiroOuSegundo: "Depende; contra Pult use os Itens antes do item lock.",
    dicas: [
      "Toda carta tem um momento certo para ser descartada pela Troca.",
      "Descartar energia/Pokémon recuperáveis os torna acessíveis do descarte (PP Up, Night Stretcher).",
      "Prize check inicial: linha do Zoroark, atacantes do N, Mochi/Pecharunt, Tatsugiri. Meio/fim: Boss restantes, PP Up, Night Stretcher, Meowth, energias.",
      "Se o oponente abrir com Meowth/Duskull ativo sem recuar, Yveltal impede o recuo."
    ],
    erros: ["Bancar mais de 3 Zoroark e travar o banco.", "Deixar Zorua de 70 HP expostos contra spread."],
    prizeMaps: ["Contra Mega: tomar 3-3 enquanto eles fazem 2-2-2."],
    matchups: {
      "dragapult": { r: 1, ir: "—", p: "Favorável (Pult puro muito favorável). Use Itens antes do Budew; Darmanitan cedo nos Drakloak; Yveltal no Duskull/Meowth ativo." },
      "alakazam": { r: 1, ir: "—", p: "Fraqueza Dark: sequencie Darmanitan para nocautear Dunsparces/Abras até eles baixarem Shaymin." },
      "slowking": { r: 1, ir: "—", p: "Bate em fraqueza; cuidado com Slowking T2 + Kyurem nos Zorua." },
      "festival-lead": { r: -2, ir: "—", p: "Pior matchup: fraqueza a Grass, só 1 prêmio por KO e eles jogam Shaymin." },
      "crustle": { r: -1, ir: "—", p: "Crustle tem 64% contra você: Night Joker não atravessa o Mysterious Rock Inn." },
      "excadrill": { r: -1, ir: "—", p: "Genesect + Metang aceleram desde o T2." },
      "garchomp": { r: -1, ir: "—", p: "Garchomp com Power Weight tem HP altíssimo." },
      "mega-lucario": { r: -1, ir: "—", p: "Lucario é o melhor matchup do Lucario segundo o guia de Lucario; guia de Zoroark diz 'pouco favorável'." },
      "hide-n-sneak": { r: 1, ir: "—", p: "Darmanitan + Munkidori castigam Dhelmise (fraqueza Dark)." },
      "honchkrow": { r: 1, ir: "1º", p: "Monte Zoroark rápido e copie Darmanitan." },
      "okidogi": { r: 0, ir: "—", p: "Com Yveltal, muito bom para você; sem Yveltal/Darmanitan, ruim." },
      "basic-box": { r: 0, ir: "—", p: "Eles tentam Wellspring 2-2-2." },
      "zoroark": { r: 0, ir: "—", p: "Mirror divertido e técnico." },
      "mega-sharpedo": { r: 0, ir: "—", p: "Não deixe dano no board deles; Sharpedo pode ser rushado." },
      "tera-box": { r: -1, ir: "—", p: "Wellspring snipa Zorua; Koraidon bate em Pecharunt/Fez." }
    },
    fontes: [{ titulo: "Zoroark ex do N — Guia Completo (PT)", url: "https://metafy.gg/guides/view/zoroark-ex-do-n-guia-completo-kAyWd6sdrW5" }],
    assinatura: ["N's Zorua", "N's Zoroark ex", "N's PP Up", "N's Darmanitan", "N's Zekrom", "N's Reshiram", "N's Castle"]
  },

  {
    id: "mega-lucario",
    nome: "Mega Lucario ex (Hariyama ou Dudunsparce)",
    apelidos: ["Lucario", "Mega Brave"],
    estilo: "Mega (3 prêmios) agressivo com aceleração",
    formato: "Standard atual (Pitch Black)",
    status: "meta",
    dificuldade: 3,
    resumo: "Mega Lucario ex é atacante e acelerador: Aura Jab (130 + liga até 3 Fighting do descarte no banco) e Mega Brave (270; não repete no turno seguinte). Vence com modificadores para OHKO.",
    comoFunciona: "Riolu → Mega Lucario ex. Lunatone + Solrock (Lunar Cycle descarta Fighting e compra; Solrock faz donk cedo). Hariyama (Heave-Ho Catcher: gust ao evoluir; ataque 210) ou Dudunsparce. Modificadores: Premium Power Pro, Gravity Mountain, Black Belt's Training, Maximum Belt.",
    pecasChave: [
      ["Riolu / Mega Lucario ex (3+)", "Atacante principal."],
      ["Lunatone / Solrock (3/2)", "Motor de compra e descarte de energia."],
      ["Makuhita / Hariyama", "Gust grátis e atacante de 1 prêmio."],
      ["Premium Power Pro, Gravity Mountain, Black Belt's Training", "Dano extra para OHKO."],
      ["Unfair Stamp / Maximum Belt / Secret Box / Hero's Cape / Legacy Energy", "Opções de ACE SPEC por variante."],
      ["Rocky Fighting Energy", "Previne efeitos de ataques (anti-Alakazam)."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "2 Riolu + Lunatone/Solrock; Lunar Cycle para ver mais cartas.",
      turno2: "Mega Lucario e Aura Jab para acelerar o banco.",
      meio: "Controle energias e modificadores restantes. Manipule o prize trade (não entregue 3 prêmios de graça).",
      final: "Mega Brave para OHKO nos ex; Hariyama fecha single-prizers."
    },
    primeiroOuSegundo: "Quase sempre 1º.",
    dicas: [
      "É fácil jogar Lucario, difícil jogar bem: o segredo é manipular o prize trade.",
      "Conte energias Fighting: você gasta muitas com Aura Jab e Lunar Cycle.",
      "Às vezes é preciso descartar Premium Power Pro com Ultra Ball — saiba quantos restam."
    ],
    erros: ["Achar que é um deck 'sem cérebro' e ignorar o board state.", "Ficar sem atacante seguinte com Mega Brave travado."],
    prizeMaps: ["vs Dragapult: 1-1-2-2 (Budew, Dreepy/Drakloak e dois ex).", "vs Mega: 3-3."],
    matchups: {
      "zoroark": { r: 1, ir: "1º", p: "Melhor matchup do meta: Zoroark não faz OHKO em Lucario e o suporte deles (Pecharunt, Fez) é fraco a Fighting. Cuidado com Darmanitan + Zekrom." },
      "dragapult": { r: 1, ir: "1º", p: "1-1-2-2. Prepare-se para Budew e Stamp cedo." },
      "excadrill": { r: 1, ir: "1º", p: "340 HP: Excadrill não faz OHKO sem modificador (exceto Kieran)." },
      "alakazam": { r: 0, ir: "1º", p: "Rocky Fighting Energy força recursos; eles jogam Enhanced Hammer e Dedenne." },
      "slowking": { r: -1, ir: "1º", p: "Monte Lucario no T2 e mate Kangaskhan/Latias; Metagross vai te pegar — use Stamp." },
      "hide-n-sneak": { r: -2, ir: "—", p: "Dhelmise faz OHKO como single-prizer." },
      "festival-lead": { r: -1, ir: "—", p: "Gladion deixou Festival Lead mais forte; single-prizers são difíceis." },
      "honchkrow": { r: -1, ir: "—", p: "Murkrow/Honchkrow resistem a Fighting." },
      "crustle": { r: 0, ir: "—", p: "Mega Lopunny e afins são respostas; Lucario sofre com a parede." },
      "mega-manectric": { r: 0, ir: "1º", p: "Prize race entre Megas; Hariyama é a vantagem." },
      "okidogi": { r: -1, ir: "—", p: "Okidogi faz 3-3 com OHKO no Lucario." },
      "tera-box": { r: -1, ir: "—", p: "Bate em fraqueza Psychic com Full Moon Rondo/Eon Blade." }
    },
    fontes: [{ titulo: "Mega Lucario ex: Mega Braving your way to victory (PixelCheetah)", url: "https://metafy.gg/guides/view/mega-lucario-ex-mega-braving-your-way-to-v-vN8HwDBhUUf" }],
    assinatura: ["Riolu", "Mega Lucario ex", "Lunatone", "Solrock", "Hariyama", "Premium Power Pro"]
  },

  {
    id: "crustle",
    nome: "Crustle / Mega Kangaskhan",
    apelidos: ["Crustle", "Crusty"],
    estilo: "Parede/controle",
    formato: "Standard atual",
    status: "meta",
    dificuldade: 4,
    resumo: "Crustle (Mysterious Rock Inn) não recebe dano de Pokémon ex. O deck enrola o jogo, cura e tira recursos do oponente.",
    comoFunciona: "Mega Kangaskhan ex compra tempo (300 HP); Dwebble → Crustle é a parede. Growing Grass Energy (+20 HP cada), Hero's Cape, Jumbo Ice Cream (cura 80 com 3 energias), Pokémon Center Lady, Mist Energy (anti-spread), Team Rocket's Petrel, Xerosic's Machinations (mão para 3), Eri.",
    pecasChave: [
      ["Dwebble / Crustle", "Parede contra Pokémon ex; Superb Scissors ignora efeitos."],
      ["Mega Kangaskhan ex", "Início de jogo e compra."],
      ["Jumbo Ice Cream, Growing Grass Energy, Hero's Cape", "Sustain (até 330 HP)."],
      ["Mist Energy", "Protege contra spread de Dragapult e contadores."],
      ["Xerosic's Machinations, Eri, TR Petrel", "Controle e busca."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "Kangaskhan ativo; Dwebble no banco.",
      turno2: "Crustle pronto; energias distribuídas (não tudo num só contra Hammer).",
      meio: "Curar, não atacar o que não pode OHKO (Munkidori move o dano).",
      final: "Xerosic quando a mão do oponente estiver grande."
    },
    primeiroOuSegundo: "Varia por matchup.",
    dicas: ["Contra Dragapult/Dusknoir: banco pequeno e Mist no Pokémon que mais importa.", "Não ataque só por atacar: às vezes curar mais uma vez é melhor."],
    erros: ["Atacar Pokémon que não pode nocautear (deixa dano para Munkidori)."],
    prizeMaps: ["Jogo longo: desgastar recursos."],
    matchups: {
      "basic-box": { r: 2, ir: "—", p: "84,85% no NAIC: Crustle anula os atacantes ex deles." },
      "zoroark": { r: 1, ir: "—", p: "64%: Night Joker não atravessa Crustle." },
      "alakazam": { r: 1, ir: "—", p: "61%: 4 Mist no Kangaskhan; Xerosic quando a mão deles crescer." },
      "dragapult": { r: 0, ir: "—", p: "Drakloak e Munkidori atacam; jogue devagar contra os Hammers. Variante Dusknoir é pior." },
      "slowking": { r: -1, ir: "—", p: "34%: arraste o jogo e disrupte nos momentos certos (Eri, Xerosic)." },
      "excadrill": { r: -2, ir: "—", p: "~20%: Metagross não é ex e Excadrill resiste a Grass." },
      "honchkrow": { r: -2, ir: "—", p: "Honchkrow não é ex e não tem habilidade de ataque: vitória grátis para eles." },
      "tera-box": { r: 2, ir: "—", p: "Tera Box tem 5/95 contra você sem techs." },
      "hide-n-sneak": { r: 0, ir: "—", p: "Eles precisam de 7 ataques de Dhelmise ou Spiritomb." },
      "mega-sharpedo": { r: -1, ir: "—", p: "Sharpedo mata Kangaskhan no T2 e drena com Carvanha." },
      "mega-lucario": { r: 0, ir: "—", p: "Depende de techs." }
    },
    fontes: [{ titulo: "The Ultimate Crustle Guide", url: "https://metafy.gg/guides/view/the-ultimate-crustle-guide-tuOarFdU1a8" }],
    assinatura: ["Dwebble", "Crustle", "Jumbo Ice Cream", "Growing Grass Energy", "Mega Kangaskhan ex"]
  },

  {
    id: "honchkrow",
    nome: "Team Rocket's Honchkrow",
    apelidos: ["Honchkrow", "Rocket Crow"],
    estilo: "Single-prize explosivo (dano por Supporters descartados)",
    formato: "Standard atual (pós-rotação)",
    status: "meta",
    dificuldade: 2,
    resumo: "Honchkrow causa dano proporcional aos Supporters que você descarta — 6 Supporters ≈ 360. Single-prize, resiste a Fighting e é barato de montar.",
    comoFunciona: "TR Proton (pode ser usado indo 1º) busca básicos; TR Murkrow → TR Honchkrow; TR Porygon/Porygon2 (atacante tardio com Ignition Energy); TR Articuno protege básicos TR (ótimo contra Dragapult/Alakazam); TR Mimikyu copia ataques de Tera e tem recuo grátis. TR Ariana/Archer compram e disruptam.",
    pecasChave: [
      ["TR Murkrow / TR Honchkrow (4-4)", "Atacante; Murkrow Torment mata Budew, Deceit busca Supporter."],
      ["TR Proton (x4)", "Setup no T1, mesmo indo 1º."],
      ["TR Ariana, TR Archer", "Compra e disrupção ('Archer Wars')."],
      ["TR Articuno, TR Mimikyu, TR Porygon2", "Proteção, pivô/cópia e finalizador."],
      ["TR Transceiver, Miracle Headset, Roto Stick, Poké Pad, Night Stretcher", "Busca de Supporters/Pokémon."],
      ["Energias especiais Rocket/Ignition", "Difíceis de buscar — o ponto fraco do deck."]
    ],
    lista: {
      titulo: "Lista do guia (reconstruída da explicação carta a carta, versão de maio/2026)",
      texto: `Pokémon: 13
4 Team Rocket's Murkrow
4 Team Rocket's Honchkrow
2 Team Rocket's Porygon
1 Team Rocket's Porygon2
1 Team Rocket's Articuno
1 Team Rocket's Mimikyu
Trainer: 39
4 Team Rocket's Proton
4 Team Rocket's Archer
4 Team Rocket's Petrel
4 Team Rocket's Ariana
4 Team Rocket's Giovanni
4 Team Rocket's Transceiver
3 Poké Pad
1 Ultra Ball
3 Roto Stick
3 Night Stretcher
1 Miracle Headset
4 Team Rocket's Factory
Energy: 8
4 Team Rocket's Energy
4 Ignition Energy`
    },
    planoDeJogo: {
      turno1: "Ir 1º e jogar Proton: 2 Murkrow + 1 Porygon (vs Dragapult/Alakazam: Articuno no lugar do Porygon).",
      turno2: "Evoluir e jogar Ariana; começar a atacar.",
      meio: "Guardar Ariana/Archer; manter velocidade.",
      final: "Porygon2 (R Command) como finalizador se você preservou Ignition Energy."
    },
    primeiroOuSegundo: "SEMPRE 1º. Indo 2º: Proton se tiver; senão Petrel → Poké Pad/Ultra Ball; Murkrow Deceit busca Supporter.",
    dicas: ["Kangaskhan precisa de 5 descartes (7 com Hero's Cape); >300 HP precisa de 6.", "Não deixe Porygon ativo contra Lucario (fraqueza e donk de Solrock).", "No mirror, NÃO descarte Archer."],
    erros: ["Gastar Ariana/Archer à toa.", "Deixar os básicos parados contra spread (Grimmsnarl/Slowking)."],
    prizeMaps: ["Troca 1 por 1, mirando os ex de 2–3 prêmios."],
    matchups: {
      "dragapult": { r: 2, ir: "1º", p: "Muito favorável com Articuno no banco protegendo os básicos." },
      "mega-lucario": { r: 2, ir: "1º", p: "Murkrow/Honchkrow resistem a Fighting." },
      "crustle": { r: 2, ir: "1º", p: "Vitória grátis: nada seu é ex. Torment no Kangaskhan." },
      "hydrapple": { r: 1, ir: "1º", p: "Mire os ex; Mimikyu copia Teal Mask." },
      "alakazam": { r: 0, ir: "1º", p: "50/50: com Articuno, mantenha básicos sem evoluir até atacar." },
      "zoroark": { r: 0, ir: "1º", p: "Cuidado com Darmanitan (Articuno não para) e Yveltal." },
      "slowking": { r: -2, ir: "1º", p: "Pior matchup: Trifrost é imparável sem Shaymin." },
      "grimmsnarl": { r: -1, ir: "1º", p: "Sem Shaymin, o dano no banco castiga; evolua tudo rápido." },
      "hide-n-sneak": { r: -1, ir: "—", p: "Eles têm manutenção menor na troca 1 por 1." },
      "honchkrow": { r: 0, ir: "1º", p: "Archer Wars." },
      "mega-manectric": { r: -1, ir: "—", p: "Baby Manectric faz parede; Torment desliga a barreira por um turno." },
      "tr-mewtwo": { r: 1, ir: "1º", p: "Mire Mewtwo/Kangaskhan quando baixarem; Spidops precisa de 5 Pokémon TR." }
    },
    fontes: [{ titulo: "Team Rocket's Honchkrow Guide", url: "https://metafy.gg/guides/view/team-rockets-honchkrow-guide-DlH1VdEzQWK" }],
    assinatura: ["Team Rocket's Murkrow", "Team Rocket's Honchkrow", "Team Rocket's Proton", "Team Rocket's Ariana", "Team Rocket's Archer", "Team Rocket's Articuno"]
  },

  {
    id: "mega-sharpedo",
    nome: "Mega Sharpedo ex / Toxtricity",
    apelidos: ["Sharpedo", "Hungry Jaws", "Shark"],
    estilo: "Mega agressivo com veneno e ciclo de recuo",
    formato: "Standard atual",
    status: "rogue",
    dificuldade: 3,
    resumo: "Mega Sharpedo ex tem recuo grátis; o deck recua para Tatsugiri (busca Supporter), usa Pecharunt ex (Subjugating Chains) para trazer o atacante de volta envenenado e soma dano com Munkidori e Binding Mochi.",
    comoFunciona: "Carvanha → Mega Sharpedo ex; Toxel → Toxtricity acelera energias (anti-Hammer); Pecharunt ex (traz Pokémon Dark do banco + veneno; ataque forte depois); Tatsugiri; Munkidori; Yveltal (retreat lock); Judge x3 + Watchtower.",
    pecasChave: [
      ["Carvanha / Mega Sharpedo ex", "Atacante; Carvanha + Mochi faz 70–140."],
      ["Toxel / Toxtricity", "Aceleração; não dá para prizar."],
      ["Pecharunt ex", "Subjugating Chains e atacante de 180–210."],
      ["Tatsugiri, Munkidori, Fezandipiti ex", "Busca, dano extra, compra."],
      ["Binding Mochi, Judge, Team Rocket's Watchtower, Legacy Energy", "Dano e disrupção; Legacy reduz prêmios cedidos."]
    ],
    lista: {
      titulo: "Hungry Jaws breakdown — ideia TEF-POR",
      texto: `Pokémon: 21
3 Carvanha PFL 60
2 Mega Sharpedo ex PFL 61
3 Toxel PFL 67
2 Toxtricity PFL 68
2 Dunsparce PRE 79
2 Dudunsparce PRE 80
2 Munkidori TWM 95
2 Pecharunt ex SFA 39
1 Fezandipiti ex SFA 38
1 Meowth ex POR 62
1 Moltres PFL 14
Trainer: 30
4 Lillie's Determination ASC 192
3 Judge POR 76
2 Hilda WHT 84
2 Boss's Orders ASC 183
3 Buddy-Buddy Poffin ASC 184
3 Poké Pad POR 81
2 Ultra Ball ASC 213
2 Night Stretcher ASC 196
2 Energy Switch MEG 115
1 Tool Scrapper ASC 212
1 Mega Signal ASC 193
2 Binding Mochi PRE 95
1 Air Balloon ASC 181
2 Gravity Mountain SSP 177
Energy: 9
7 Darkness Energy MEE 7
1 Legacy Energy TWM 167
1 Prism Energy ASC 216`
    },
    planoDeJogo: {
      turno1: "4 Pokémon: Toxel, Carvanha, Pecharunt ex, Tatsugiri (ou 2º Carvanha se já tem Supporter).",
      turno2: "Sharpedo + Toxtricity. Com energia + Judge priorize Sharpedo; sem disrupção, Toxtricity.",
      meio: "Board ideal: Sharpedo (Mochi) ativo; Munkidori, Sharpedo (Mochi), Tatsugiri, Toxtricity, Pecharunt ex no banco.",
      final: "Pecharunt ex fecha em Fez/Meowth (checkmate)."
    },
    primeiroOuSegundo: "1º às cegas; 2º contra Excadrill.",
    dicas: ["Raramente deixe dano no board do oponente (Munkidori deles).", "Carvanha + Mochi + veneno mata Dreepy, mas Drakloak + Crispin devolve."],
    erros: ["Bancar o 2º Sharpedo contra Slop Box (Boss 3-3)."],
    prizeMaps: ["vs Dragapult: 1-1-2-2.", "vs Slowking: 3-2-1 (Kangaskhan, Latias, Slowking)."],
    matchups: {
      "dragapult": { r: 1, ir: "1º", p: "Board core; Toxtricity supera os Hammers; Munkidori é necessário para OHKO no Dragapult (sem ele: 310)." },
      "basic-box": { r: 0, ir: "1º", p: "Sharpedo KO no T2; se devolverem, Pecharunt + Boss em Latias/Meowth." },
      "zoroark": { r: 0, ir: "1º", p: "Pode bancar o 2º Sharpedo (eles não têm Boss + Black Belt); cuidado com Darumaka." },
      "alakazam": { r: 1, ir: "2º", p: "Carvanha + Mochi = 140 (KO no Alakazam). 3 Judge + Watchtower pressionam." },
      "excadrill": { r: -1, ir: "2º", p: "Judge cedo; eles fazem OHKO no Sharpedo, você precisa de 30 de dano prévio." },
      "crustle": { r: 1, ir: "1º", p: "Mate o Kangaskhan no T2 e drene com Carvanha." },
      "slowking": { r: 0, ir: "—", p: "3-2-1 com Carvanha no Slowking." },
      "hide-n-sneak": { r: 0, ir: "—", p: "Seus Judges incomodam eles." }
    },
    fontes: [
      { titulo: "Sharpedo ex guide (MacTmac)", url: "https://metafy.gg/guides/view/sharpedo-ex-guide-lIwBhKLSAIw" },
      { titulo: "A Hungry Jaws breakdown", url: "https://metafy.gg/guides/view/a-hungry-jaws-breakdown-30mBdt3sMRJ" }
    ],
    assinatura: ["Carvanha", "Mega Sharpedo ex", "Toxel", "Toxtricity", "Pecharunt ex", "Binding Mochi"]
  },

  {
    id: "okidogi",
    nome: "Okidogi (Lunatone/Solrock)",
    apelidos: ["Dogi", "Okidogi"],
    estilo: "Básicos de 1 prêmio Fighting",
    formato: "Standard (30th Celebration)",
    status: "rogue",
    dificuldade: 3,
    resumo: "Okidogi é um atacante básico que troca prêmios muito bem; Lunatone + Solrock (Lunar Cycle) são a compra.",
    comoFunciona: "SEMPRE Lunatone + Solrock no T1. Binacle/Barbaracle, Bloodmoon Ursaluna, Moltres, Genesect, Patrat, Clefairy, Psyduck, Cornerstone Ogerpon. Versões: Battle Cage/Patrat (anti-Pult), Clefairy + Energy Switch, Energy Control, PPP/Bangle (agressiva).",
    pecasChave: [
      ["Okidogi", "Atacante (Prism/Legacy)."],
      ["Lunatone / Solrock", "Compra; Solrock donk."],
      ["Battle Cage + Patrat", "Reduzem o output do Dragapult."],
      ["Bloodmoon Ursaluna, Moltres, Genesect", "Finalizador, anti-Grass, anti-ACE."]
    ],
    lista: null,
    planoDeJogo: {
      turno1: "Lunatone + Solrock antes de tudo; Binacle em seguida.",
      turno2: "Lunar Cycle no início do turno e só então decidir o Supporter.",
      meio: "Ciclar Okidogis e Boss nos alvos.",
      final: "Guarde 2–3 Lillie's para resetar a mão após disrupção."
    },
    primeiroOuSegundo: "Blind 2º. Contra Budew/Frillish (Pult, ZamNoir, Snarl) vá 2º; contra o resto, 1º.",
    dicas: ["'Se você não está comprando cartas, não está jogando o jogo.'", "Prize check vs Pult: Cages, Prism/Legacy e Patrat."],
    erros: ["Ficar sem atacantes montados antes de um Judge."],
    prizeMaps: ["vs Pult: 2 prêmios antes do 1º Phantom Dive, 1-1-2-2.", "vs Lucario: 3-3."],
    matchups: {
      "dragapult": { r: -1, ir: "2º", p: "Pior matchup por causa dos Hammers. Tome 2 prêmios antes do 1º Phantom Dive." },
      "zoroark": { r: 1, ir: "1º", p: "65/35 se não jogarem Yveltal/Darmanitan; 25/75 com eles." },
      "festival-lead": { r: 1, ir: "1º", p: "Solrock donk; Cornerstone Ogerpon tanka (não recebe dano de Dipplin/Seaking)." },
      "alakazam": { r: 0, ir: "1º", p: "50/50: quem toma o 1º prêmio." },
      "hydrapple": { r: 1, ir: "1º", p: "Moltres faz Boss KO em Teal Mask." },
      "excadrill": { r: 0, ir: "1º", p: "Duvidoso se jogarem 4 Ice Cream." },
      "mega-lucario": { r: 1, ir: "1º", p: "Vá com tudo; 3-3." },
      "hide-n-sneak": { r: 0, ir: "1º", p: "Tome o 1º prêmio; Genesect anula Legacy." },
      "slowking": { r: 1, ir: "1º", p: "Shaymin praticamente vence o matchup." },
      "basic-box": { r: 1, ir: "1º", p: "Okidogi mata Fez, Meowth e Kangaskhan." }
    },
    fontes: [{ titulo: "THE Okidogi Guide for PTCG 30C", url: "https://metafy.gg/guides/view/the-okidogi-guide-for-ptcg-30c-KAYt6xUcNiw" }],
    assinatura: ["Okidogi", "Lunatone", "Solrock", "Binacle", "Barbaracle"]
  },

  {
    id: "tera-box",
    nome: "Tera Box (Terapagos / Ogerpon)",
    apelidos: ["Terabox", "Tera Box"],
    estilo: "Big Basics Tera",
    formato: "Standard atual",
    status: "rogue",
    dificuldade: 4,
    resumo: "Caixa de Pokémon Tera ex (não recebem dano de ataques no banco) com Terapagos ex (Crown Opal) e vários atacantes para cada situação.",
    comoFunciona: "Hoothoot/Noctowl (Jewel Seeker) e Fan Rotom para setup; Wellspring Mask (Torrential Pump), Teal Mask, Iron Leaves, Koraidon, Chien-Pao; Sparkling Crystal; Energy Switch x2; Crispin.",
    pecasChave: [
      ["Terapagos ex", "Crown Opal — bom contra Dhelmise."],
      ["Wellspring / Teal Mask Ogerpon ex, Iron Leaves, Koraidon, Chien-Pao", "Atacantes."],
      ["Noctowl, Fan Rotom", "Setup."],
      ["Sparkling Crystal, Energy Switch, Crispin", "Energia."]
    ],
    lista: null,
    planoDeJogo: { turno1: "Jewel Seeker antes do oponente montar.", turno2: "Atacante certo para o matchup.", meio: "Controle a quantidade de ex no banco (Dudunsparce ex castiga).", final: "Feche com o atacante que bate em fraqueza." },
    primeiroOuSegundo: "Quase sempre 1º (2º vs Crustle).",
    dicas: ["Pré-banque Fez e Kangaskhan contra Pult; Clefairy só se eles não tiverem energia.", "Máximo de 3 ex no banco se o oponente jogar Dudunsparce ex."],
    erros: ["Não ter tech contra Crustle."],
    prizeMaps: ["2-2-2 com atacantes ex."],
    matchups: {
      "dragapult": { r: 1, ir: "1º", p: "60/40: Fan Rotom KO Budew; Koraidon contra Dudunsparce ex." },
      "slowking": { r: 0, ir: "1º", p: "50/50; Zeraora deles snipa Latias." },
      "basic-box": { r: 1, ir: "1º", p: "60/40: mais outs de retreat lock." },
      "zoroark": { r: 1, ir: "1º", p: "60/40: Wellspring snipa Zorua; Chien-Pao e Koraidon bons." },
      "festival-lead": { r: 0, ir: "1º", p: "Mate Rellor e Applins." },
      "alakazam": { r: -1, ir: "—", p: "Se baixarem Shaymin cedo, é muito difícil." },
      "mega-lopunny": { r: 1, ir: "1º", p: "65/35 com Koraidon (fraqueza)." },
      "hydrapple": { r: -1, ir: "1º", p: "45/55; Bulu single-prize e Stamp incomodam." },
      "crustle": { r: -2, ir: "2º", p: "5/95 sem techs (Chi-Yu, Paldean Tauros, Enamorus)." },
      "excadrill": { r: 0, ir: "—", p: "Boss ao redor do Excadrill." },
      "mega-lucario": { r: 1, ir: "1º", p: "60/40 vs Hariyama; Dudunsparce 50/50." },
      "hide-n-sneak": { r: 0, ir: "1º", p: "Crown Opal nega Dhelmise; Sinistcha é a resposta deles." }
    },
    fontes: [{ titulo: "How to play Terabox", url: "https://metafy.gg/guides/view/how-to-play-terabox-0gshHX3xKnk" }],
    assinatura: ["Terapagos ex", "Hoothoot", "Noctowl", "Wellspring Mask Ogerpon ex", "Koraidon", "Fan Rotom"]
  },

  {
    id: "mega-manectric",
    nome: "Mega Manectric ex",
    apelidos: ["Manectric", "Babyman"],
    estilo: "Mega com parede contra básicos",
    formato: "Standard (Pitch Black / 30th)",
    status: "rogue",
    dificuldade: 3,
    resumo: "Flash Ray: dano médio e o Mega Manectric não recebe dano de ataques de Pokémon BÁSICOS no próximo turno. Riotous Blasting 200 (+130 descartando energias).",
    comoFunciona: "Tynamo/Eelektrik aceleram, Mega Eelektross (Split Bomb, dano direto), Manectric baby (barreira contra evoluídos), Kilowattrel (compra), Voltaic Energy, Zekrom, Zeraora (snipa ex no banco), Stunfisk (retreat lock). Battle Cage x3, Hero's Cape + Wally's Compassion, Air Balloon.",
    pecasChave: [["Mega Manectric ex", "Parede contra básicos e OHKO com Riotous Blasting."], ["Tynamo / Eelektrik / Mega Eelektross", "Aceleração e Split Bomb."], ["Manectric (baby)", "Parede contra evoluídos."], ["Battle Cage, Hero's Cape, Wally's Compassion", "Proteção e sustain."]],
    lista: null,
    planoDeJogo: { turno1: "Electrike + Tynamos; Battle Cage cedo vs Dragapult.", turno2: "Mega Manectric e Flash Ray.", meio: "Contra decks de básicos: monte o mínimo e seja parede.", final: "Riotous Blasting para OHKO." },
    primeiroOuSegundo: "1º na maioria (Lucario, Slowking, Festival).",
    dicas: ["Energia 8 Lightning / 3 Volt.", "Contra Festival Lead, monte tudo EXCETO o 3-prizer."],
    erros: ["Usar Zeraora em Tera (não funciona)."],
    prizeMaps: ["vs Pult: 2 prêmios cedo e depois 2 Dragapult."],
    matchups: {
      "basic-box": { r: 1, ir: "1º", p: "Seja parede com Flash Ray." }, "tera-box": { r: 1, ir: "1º", p: "Parede." }, "okidogi": { r: 1, ir: "1º", p: "Parede contra básicos." },
      "dragapult": { r: 0, ir: "—", p: "Battle Cage protege os Eels; pegue prêmios cedo." }, "zoroark": { r: 0, ir: "—", p: "Não deixe Darmanitan montar." },
      "alakazam": { r: -2, ir: "—", p: "Injogável: contadores atravessam a parede." }, "garchomp": { r: -2, ir: "—", p: "400 HP Fighting." },
      "slowking": { r: 0, ir: "1º", p: "Foque nos Slowbro; baby Manectric força Latias/Kangaskhan." }, "festival-lead": { r: 0, ir: "1º", p: "Gladion Applin é a resposta deles." },
      "honchkrow": { r: 1, ir: "—", p: "Baby Manectric faz parede." }, "mega-lucario": { r: 0, ir: "1º", p: "Prize race; Hariyama atrapalha." }, "excadrill": { r: 0, ir: "—", p: "Cape é enorme." }
    },
    fontes: [{ titulo: "Introduction to Mega Manectric", url: "https://metafy.gg/guides/view/introduction-to-mega-manectric-IdWHwshnL2Y" }],
    assinatura: ["Electrike", "Mega Manectric ex", "Tynamo", "Eelektrik", "Mega Eelektross", "Kilowattrel"]
  },

  {
    id: "mew-box",
    nome: "Mew ex / Mega Diancie / Dusknoir",
    apelidos: ["Mew Box", "Mew ex"],
    estilo: "Psychic toolbox com item lock",
    formato: "Standard (30th Celebration)",
    status: "rogue",
    dificuldade: 4,
    resumo: "Mew ex (Memory Helix copia ataques; recuo grátis) com suporte Psychic: Frillish trava itens, Dusknoir monta KOs com Cursed Blast e Mega Diancie ex bate até 240.",
    comoFunciona: "Frillish (Oceanic Gloom = item lock), Duskull/Dusclops/Dusknoir, Jellicent ex, Lillie's Clefairy ex, Telepathic Energy, Mystery Garden, Wondrous Patch, Colress's Tenacity, Secret Box, Special Red Card.",
    pecasChave: [["Mew ex", "Copia ataques; recuo grátis."], ["Frillish", "Item lock."], ["Dusclops/Dusknoir", "Cursed Blast monta o prize map."], ["Mega Diancie ex", "Garland Ray até 240."], ["Colress's Tenacity, Mystery Garden", "Busca/compra."]],
    lista: null,
    planoDeJogo: { turno1: "Ir 2º: Supporter no T1 para achar Telepathic e começar o item lock.", turno2: "Oceanic Gloom; peças de Dusknoir.", meio: "Use Cursed Blast para administrar ameaças.", final: "Oceanic Curse + Special Red Card para virar." },
    primeiroOuSegundo: "2º.",
    dicas: ["Contra Dragapult, quebre o item lock deles: 2 Oceanic Gloom no Budew ou Cursed Blast."],
    erros: [],
    prizeMaps: [],
    matchups: {
      "dragapult": { r: 1, ir: "2º", p: "Quebre o item lock; Mew/Clefairy em fraqueza." }, "basic-box": { r: 1, ir: "—", p: "Favorável." }, "festival-lead": { r: 1, ir: "—", p: "Favorável." },
      "zoroark": { r: 0, ir: "—", p: "Equilibrado." }, "alakazam": { r: 0, ir: "—", p: "Equilibrado." }, "excadrill": { r: -1, ir: "—", p: "Ruim." }, "hydrapple": { r: -1, ir: "—", p: "Ruim." }, "mega-manectric": { r: -2, ir: "—", p: "Manectric vence quase sem montar." }
    },
    fontes: [{ titulo: "Mew ex Guide", url: "https://metafy.gg/guides/view/mew-ex-guide-QHaa2wjovIU" }],
    assinatura: ["Mew ex", "Mega Diancie ex", "Frillish", "Duskull", "Dusclops", "Dusknoir", "Colress's Tenacity"]
  },

  {
    id: "garchomp",
    nome: "Cynthia's Garchomp ex",
    apelidos: ["Garchomp", "Chomp", "Landshark"],
    estilo: "Stage 2 Fighting com modificadores",
    formato: "Mega Evolution (2025) — ainda aparece no meta",
    status: "rogue",
    dificuldade: 3,
    resumo: "Cynthia's Garchomp ex (Corkscrew Dive: ataca e compra até 6) recebe dano extra de cada Cynthia's Roserade em campo e de Premium Power Pro.",
    comoFunciona: "Gible → Gabite (Champion's Call: busca) → Garchomp ex; Roselia → Roserade (Cheer On to Glory); Forest of Vitality evolui Grass no mesmo turno; Cynthia's Power Weight; Toedscruel contra Gholdengo/recuperação.",
    pecasChave: [["Cynthia's Gible/Gabite/Garchomp ex 3-3-3", "Atacante."], ["Cynthia's Roselia/Roserade 3-3", "Dano extra."], ["Premium Power Pro, Fighting Gong, Forest of Vitality", "Dano, busca, evolução."]],
    lista: {
      titulo: "Ellie (Project Artemis) — Mega Evolution",
      texto: `Pokémon: 17
3 Cynthia's Roselia DRI 7
3 Cynthia's Roserade DRI 8
3 Cynthia's Gible DRI 102
3 Cynthia's Gabite DRI 103
3 Cynthia's Garchomp ex DRI 104
1 Toedscool PAR 16
1 Toedscruel PAR 17
Trainer: 36
4 Arven SVI 166
4 Lillie's Determination MEG 119
3 Boss's Orders PAL 172
2 Iono PAL 185
1 Professor Turo's Scenario PAR 171
4 Buddy-Buddy Poffin TEF 144
4 Premium Power Pro MEG 124
2 Fighting Gong MEG 116
1 Counter Catcher PAR 160
1 Super Rod PAL 188
1 Rare Candy SVI 191
1 Night Stretcher SFA 61
1 Ultra Ball SVI 196
1 Secret Box TWM 163
2 Cynthia's Power Weight DRI 162
2 Forest of Vitality MEG 117
2 Artazon PAL 171
Energy: 7
7 Fighting Energy SVE 6`
    },
    planoDeJogo: { turno1: "Arven; bancar Gible antes de Roselia.", turno2: "Gabite busca; não evolua todos os Gabite até a hora de atacar.", meio: "Boss em Fezandipiti ex (fraco a Fighting).", final: "Vários Roserade para o OHKO." },
    primeiroOuSegundo: "Geralmente 1º.",
    dicas: ["Fezandipiti ex morre com 1 Roserade ou 1 Premium Power Pro."], erros: [], prizeMaps: [],
    matchups: { "mega-manectric": { r: 2, ir: "—", p: "400 HP Fighting." }, "zoroark": { r: 1, ir: "—", p: "HP altíssimo." }, "festival-lead": { r: -1, ir: "—", p: "Fraco a Grass." }, "hide-n-sneak": { r: 0, ir: "—", p: "Rocky Energy contra Spiritomb; Dhelmise 70 após resistência." }, "dragapult": { r: 0, ir: "—", p: "Hammers são perigosos." } },
    fontes: [{ titulo: "Cynthia's Garchomp ex Guide (Project Artemis)", url: "https://metafy.gg/guides/view/cynthias-garchomp-ex-guide-mega-evolution-xmuKn1dm53W" }],
    assinatura: ["Cynthia's Gible", "Cynthia's Gabite", "Cynthia's Garchomp ex", "Cynthia's Roselia", "Cynthia's Roserade"]
  },

  {
    id: "prism-box",
    nome: "Prism Box (Ting-Lu / Pecharunt / Bloodmoon)",
    apelidos: ["Prism Box"],
    estilo: "Single-prize spread + trap (rogue)",
    formato: "Chaos Rising",
    status: "rogue",
    dificuldade: 5,
    resumo: "1) Ting-Lu ataca 1–3 vezes espalhando dano; 2) Boss + Pecharunt + Counter Gain prendem e envenenam; 3) Bloodmoon Ursaluna (Mad Bite) finaliza.",
    comoFunciona: "4-4 Dudunsparce como motor, Patrat (limita o dano do Pult no banco a 60), Prism Tower, Prism Energy, Psyduck, Poké Pad, Poffin, 6 estádios.",
    pecasChave: [["Ting-Lu", "Spread e descarte de estádio."], ["Pecharunt + Counter Gain", "Trap + veneno."], ["Bloodmoon Ursaluna", "Finalizador."], ["Dudunsparce 4-4", "Motor reutilizável."]],
    lista: null,
    planoDeJogo: { turno1: "Dunsparces em campo.", turno2: "Ting-Lu começa o spread.", meio: "Boss + Pecharunt para prender.", final: "Bloodmoon one-shot." },
    primeiroOuSegundo: "—",
    dicas: ["Use os dois Dudunsparce antes do Poffin para buscar os mesmos de novo.", "Prism Tower: descarte primeiro os Pokémon inúteis no matchup."], erros: ["Overbench/pré-bench Pecharunt contra Phantom Dive."], prizeMaps: [], matchups: {},
    fontes: [{ titulo: "Prism Box in Chaos Rising — Deck Spotlight", url: "https://metafy.gg/guides/view/prism-box-in-chaos-rising-deck-spotlight-s-qyRITC4CyKM" }],
    assinatura: ["Ting-Lu", "Pecharunt", "Bloodmoon Ursaluna", "Counter Gain", "Prism Tower", "Patrat"]
  },

  {
    id: "gholdengo",
    nome: "Gholdengo ex",
    apelidos: ["Dengo", "Rock Dengo", "Secret Box Dengo"],
    estilo: "Stage 1 OHKO (descarta energias)",
    formato: "Black Bolt/White Flare (2025) — versões novas: Rock Dengo",
    status: "formato-anterior",
    dificuldade: 3,
    resumo: "Gholdengo ex compra com Coin Bonus e ataca com Make It Rain (dano por energia descartada, sem limite). 'Vá na frente e fique na frente.'",
    comoFunciona: "Gimmighoul → Gholdengo ex; Genesect ex (Metallic Signal: busca 2 evoluções Metal) permite ir 1º; Scizor single-prize; Genesect (Ace Nullifier); Munkidori; Superior Energy Retrieval; Fan Rotom + Secret Box para tomar o 1º prêmio mantendo board de 1 prêmio; Revavroom repõe mão.",
    pecasChave: [["Gimmighoul / Gholdengo ex 4-4", "Motor e atacante."], ["Genesect ex", "Busca as evoluções."], ["Superior Energy Retrieval, Energy Search Pro", "Combustível do Make It Rain."]],
    lista: {
      titulo: "Sky DelaCruz (Project Artemis) — Black Bolt/White Flare",
      texto: `Pokémon: 15
3 Gimmighoul SSP 97
1 Gimmighoul PAR 87
4 Gholdengo ex PAR 139
2 Genesect ex BLK 67
1 Scyther MEW 123
1 Scizor OBF 141
1 Munkidori TWM 95
1 Fezandipiti ex SFA 38
1 Genesect SFA 40
Trainer: 34
4 Arven OBF 186
4 Boss's Orders PAL 172
2 Professor Turo's Scenario PAR 171
1 Lana's Aid TWM 155
1 Ciphermaniac's Codebreaking PRE 104
4 Buddy-Buddy Poffin TEF 144
4 Superior Energy Retrieval PAL 189
4 Nest Ball SVI 181
2 Pokégear 3.0 BLK 84
1 Energy Search Pro SSP 176
1 Earthen Vessel PAR 163
1 Counter Catcher PAR 160
1 Night Stretcher SFA 61
3 Air Balloon BLK 79
1 Moonlit Hill PAF 81
Energy: 11
3 Metal Energy SVE 16
2 Psychic Energy SVE 13
1 Darkness Energy SVE 15
1 Grass Energy SVE 9
1 Water Energy SVE 11
1 Lightning Energy SVE 12
1 Fighting Energy SVE 14
1 Fire Energy SVE 10`
    },
    planoDeJogo: { turno1: "Ir 1º; Genesect ex busca 2 Gholdengo.", turno2: "Gholdengo e primeiro OHKO.", meio: "Boss nos alvos de 2 prêmios.", final: "Ficar à frente." },
    primeiroOuSegundo: "1º.",
    dicas: ["Contra Raging Bolt, deixe-os atacar primeiro e responda com Boss no Teal Mask."], erros: [], prizeMaps: [],
    matchups: { "dragapult": { r: 2, ir: "1º", p: "Muito favorável." }, "tera-box": { r: -1, ir: "1º", p: "~40%." }, "crustle": { r: -2, ir: "—", p: "Quase impossível." }, "alakazam": { r: -1, ir: "—", p: "Alakazam é favorito (sobrevive a Solrock e evolui)." }, "garchomp": { r: 1, ir: "—", p: "Toedscruel deles é tech contra você." } },
    fontes: [
      { titulo: "Gholdengo ex Guide — Black Bolt/White Flare", url: "https://metafy.gg/guides/view/gholdengo-ex-guide-black-bolt-white-flare-WEpEZSdJS5M" },
      { titulo: "The Secret Dengo Guide", url: "https://metafy.gg/guides/view/the-secret-dengo-guide-D1nHQM7Dg3i" }
    ],
    assinatura: ["Gimmighoul", "Gholdengo ex", "Genesect ex", "Superior Energy Retrieval"]
  },

  {
    id: "joltik-box",
    nome: "Joltik Box",
    apelidos: ["Joltik", "Crayola"],
    estilo: "Big Basics turbo",
    formato: "Black Bolt/White Flare (2025)",
    status: "formato-anterior",
    dificuldade: 2,
    resumo: "Joltik (Jolting Charge) acelera energias no início e o deck tenta tomar 2 prêmios por turno em 3 turnos.",
    comoFunciona: "Iron Hands ex (prêmio extra), Miraidon ex, Pikachu ex (Topaz Bolt; Resolute Heart), Bloodmoon Ursaluna para fechar, muito gust (4 Pokégear, 4 Boss, Prime Catcher).",
    pecasChave: [["Joltik", "Jolting Charge."], ["Pikachu ex, Miraidon ex, Iron Hands ex", "Atacantes."], ["Boss/Prime Catcher/Pokégear", "Gust constante."]],
    lista: {
      titulo: "Project Artemis (Kevin) — Black Bolt/White Flare",
      texto: `Pokémon: 16
1 Galvantula SFA 2
2 Miraidon ex SVI 81
2 Iron Hands ex PAR 70
1 Latias ex SSP 76
2 Mew ex MEW 151
1 Iron Leaves ex TEF 25
1 Fezandipiti ex SFA 38
2 Pikachu ex SSP 57
2 Joltik SCR 50
1 Bloodmoon Ursaluna ex TWM 141
1 Lillie's Clefairy ex JTG 56
Trainer: 31
4 Ultra Ball SVI 196
1 Earthen Vessel PRE 106
4 Arven OBF 186
4 Crispin SCR 133
1 Night Stretcher SFA 61
1 Iono PAF 80
1 Air Balloon SSH 156
4 Pokégear 3.0 SVI 186
1 Prime Catcher TEF 157
4 Nest Ball SVI 181
2 Bravery Charm PAL 173
4 Boss's Orders PAL 172
Energy: 13
5 Basic {L} Energy SVE 12
5 Basic {G} Energy SVE 9
1 Basic {P} Energy SVE 13
2 Basic {M} Energy SVE 16`
    },
    planoDeJogo: { turno1: "Jolting Charge o quanto antes.", turno2: "2 prêmios.", meio: "2 prêmios.", final: "Bloodmoon fecha." },
    primeiroOuSegundo: "—",
    dicas: ["Quanto menos esperada a jogada, mais forte (Iono num deck agressivo).", "'Se você tenta vencer tudo, não vence nada.'"], erros: ["Carregar Miraidon em vez de Pikachu e levar Boss KO."], prizeMaps: ["2-2-2"],
    matchups: { "gholdengo": { r: 0, ir: "—", p: "Iron Hands é armadilha aqui." }, "dragapult": { r: 1, ir: "—", p: "Prêmios rápidos limitam o Dusknoir." } },
    fontes: [{ titulo: "Joltik Box Guide", url: "https://metafy.gg/guides/view/joltik-box-guide-black-bolt-and-white-flar-tyO5XYZdW0e" }],
    assinatura: ["Joltik", "Pikachu ex", "Miraidon ex", "Iron Hands ex"]
  },

  {
    id: "gardevoir",
    nome: "Gardevoir ex + Jellicent ex",
    apelidos: ["Gardy", "Jellicent Gardy", "Turbo Gardy"],
    estilo: "Stage 2 Psychic com item lock",
    formato: "Phantasmal Flames (rotacionou parcialmente em 2026)",
    status: "formato-anterior",
    dificuldade: 4,
    resumo: "Gardevoir ex (Psychic Embrace) acelera energias; Frillish trava itens; Munkidori move dano.",
    comoFunciona: "Frillish/Jellicent ex, Gardevoir ex, Munkidori, Lillie's Clefairy ex, Mew ex, Scream Tail, Bravery Charm, TM Devolution, Counter Catcher, Team Rocket's Watchtower (tech vs Pidgeot/Fan Rotom/Noctowl).",
    pecasChave: [["Frillish", "Item lock."], ["Gardevoir ex", "Aceleração."], ["Munkidori", "Move dano."]],
    lista: null,
    planoDeJogo: { turno1: "Prize check na 1ª busca.", turno2: "Frillish item lock.", meio: "Munkidori.", final: "Devolution / Mew." },
    primeiroOuSegundo: "Depende.",
    dicas: ["Contra Gholdengo NÃO evolua para Jellicent (perde para Boss)."], erros: [], prizeMaps: ["vs Ceruledge: Scream Tail 2 → Gnome Hacking 2 → 1 + 1."], matchups: {},
    fontes: [{ titulo: "Complete Gardevoir + Jellicent ex Guide", url: "https://metafy.gg/guides/view/complete-gardevoir-plus-jellicent-ex-guide-9izWDb7KRqV" }],
    assinatura: ["Ralts", "Kirlia", "Gardevoir ex", "Frillish", "Jellicent ex"]
  },

  {
    id: "venusaur",
    nome: "Mega Venusaur / Mega Meganium",
    apelidos: ["Venusaur"],
    estilo: "Stage 2 de late game",
    formato: "Standard",
    status: "rogue",
    dificuldade: 3,
    resumo: "Guia em espanhol (conteúdo majoritariamente em imagens): força no late game quando Mega Meganium e Mega Venusaur (o maior HP do jogo, 380) estão em campo.",
    comoFunciona: "Motor de compra, motor de busca, early game indo 1º/2º e fraquezas do deck são discutidos no guia original.",
    pecasChave: [["Mega Venusaur ex", "Um dos atacantes mais fortes do formato (380 HP)."], ["Mega Meganium", "Suporte/aceleração."]],
    lista: null, planoDeJogo: { turno1: "Montar as linhas Stage 2.", turno2: "—", meio: "—", final: "Late game com os dois Megas." }, primeiroOuSegundo: "Veja o guia.", dicas: [], erros: [], prizeMaps: [], matchups: {},
    fontes: [{ titulo: "Guía para usar a Venusaur (ES)", url: "https://metafy.gg/guides/view/guia-para-usar-a-venusaur-UUjgfcW2GZN" }],
    assinatura: ["Mega Venusaur ex", "Bulbasaur", "Ivysaur", "Mega Meganium ex", "Chikorita"]
  },

  {
    id: "tr-mewtwo",
    nome: "Team Rocket's Mewtwo (Rocket Box)",
    apelidos: ["Rocket Box", "TR Mewtwo"],
    estilo: "Toolbox Team Rocket",
    formato: "Phantasmal Flames",
    status: "rogue",
    dificuldade: 3,
    resumo: "Guia em vídeo. Pelos outros guias: Spidops precisa de 5 Pokémon TR em campo para KO em Honchkrow; TR Mewtwo ex e Kangaskhan são alvos de 2–3 prêmios; Articuno protege básicos.",
    comoFunciona: "Assista ao masterclass no link.", pecasChave: [["Team Rocket's Spidops", "Atacante de 1 prêmio que escala com Pokémon TR."], ["Team Rocket's Mewtwo ex", "Atacante principal."], ["Team Rocket's Articuno", "Proteção."]],
    lista: null, planoDeJogo: { turno1: "—", turno2: "—", meio: "—", final: "—" }, primeiroOuSegundo: "—", dicas: [], erros: [], prizeMaps: [],
    matchups: { "honchkrow": { r: -1, ir: "—", p: "Honchkrow bate em fraqueza no Mewtwo (3 Supporters)." }, "mega-manectric": { r: -1, ir: "—", p: "Flash Ray mata Spidops sem troca." }, "zoroark": { r: -1, ir: "—", p: "Zoroark foca nos Spidops." } },
    fontes: [{ titulo: "Team Rocket's Mewtwo Masterclass", url: "https://metafy.gg/guides/view/team-rockets-mewtwo-masterclass-as-of-phan-mqPMEo8eVm3" }],
    assinatura: ["Team Rocket's Mewtwo ex", "Team Rocket's Spidops", "Team Rocket's Tarountula"]
  }
];

/* Arquétipos citados nos guias que não têm guia próprio entre os 30 — usados
   nas análises de matchup do motor. */
window.ARQUETIPOS_EXTRA = {
  "excadrill": { nome: "Mega Excadrill ex", nota: "Pitch Black: 330 por turno (Maximum Drilling), Genesect + Metang aceleram, Metagross single-prize, Jumbo Ice Cream. Resistente a Grass." },
  "hydrapple": { nome: "Hydrapple ex / Meganium (Ogerpon Box)", nota: "Meganium (Wild Growth) dobra energias Grass; Teal Mask, Celebi, Briar, cura." },
  "grimmsnarl": { nome: "Marnie's Grimmsnarl ex / Froslass", nota: "Froslass (Freezing Shroud) + Munkidori espalham contadores; castiga habilidades e baixo HP." },
  "mega-lopunny": { nome: "Mega Lopunny ex (Froslass / Dusknoir / Dudunsparce)", nota: "Gale Thrust; 4 Mist Energy; Wally's Compassion cura." },
  "mega-greninja": { nome: "Mega Greninja ex", nota: "Greninja ex TWM (Shinobi Blade) tutora; Mortal Shuriken no banco." },
  "beedrill": { nome: "Beedrill ex", nota: "110 de dano por abelha; às vezes com Arboliva ex." },
  "mega-rayquaza": { nome: "Mega Rayquaza / Talonflame", nota: "Delta Reign: big basics com Mega Kangaskhan." },
  "mega-absol": { nome: "Mega Absol ex", nota: "Claw of Darkness; Mist Energy." }
};
