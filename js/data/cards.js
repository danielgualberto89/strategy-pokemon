/* Base de cartas citadas nos guias, com os PAPÉIS que cada uma cumpre.
   Papéis: compra, busca, gust, mobilidade, acel (energia), recuperacao,
   disrupcao, itemlock, spread, protecao (banco), cura, dano (modificador),
   atacante, motor, tech, estadio, ferramenta.
   cat: P (Pokémon), T (Trainer), E (Energia). sub: supporter/item/ferramenta/estadio.
   est: 0 básico, 1 Stage 1, 2 Stage 2. premios: prêmios que entrega ao ser nocauteado.
   fragil: HP baixo citado nos guias (morre para spread de Dragapult, etc.).
   As descrições resumem o que os guias dizem — confira o texto oficial da carta. */

window.CARDS = (function () {
  const C = {};
  function add(nome, o) { C[nome.toLowerCase()] = Object.assign({ nome }, o); }

  /* ---------- Trainers: Supporters ---------- */
  add("Lillie's Determination", { cat: "T", sub: "supporter", papeis: ["compra"], d: "Embaralha a mão e compra 6 (8 se ainda não pegou prêmio)." });
  add("Professor's Research", { cat: "T", sub: "supporter", papeis: ["compra"], d: "Descarta a mão e compra 7." });
  add("Iono", { cat: "T", sub: "supporter", papeis: ["compra", "disrupcao"], d: "Ambos embaralham a mão no fundo e compram 1 carta por prêmio restante." });
  add("Judge", { cat: "T", sub: "supporter", papeis: ["disrupcao", "compra"], d: "Ambos embaralham a mão e compram 4." });
  add("Boss's Orders", { cat: "T", sub: "supporter", papeis: ["gust"], d: "Troca um Pokémon do banco do oponente com o ativo dele." });
  add("Crispin", { cat: "T", sub: "supporter", papeis: ["acel"], d: "Busca energias básicas de tipos diferentes; liga uma." });
  add("Rosa's Encouragement", { cat: "T", sub: "supporter", papeis: ["acel"], d: "Aceleração de energia (usada no Dragapult para recuperar a vantagem de energia)." });
  add("Arven", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca um Item e uma Ferramenta." });
  add("Hilda", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca uma evolução e uma energia (acha Enriching/Voltaic etc.)." });
  add("Dawn", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca 3 Pokémon de estágios diferentes." });
  add("Team Rocket's Petrel", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca qualquer Trainer." });
  add("Team Rocket's Proton", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca básicos Team Rocket; pode ser usado indo 1º." });
  add("Team Rocket's Ariana", { cat: "T", sub: "supporter", papeis: ["compra"], d: "Compra (motor do Honchkrow)." });
  add("Team Rocket's Archer", { cat: "T", sub: "supporter", papeis: ["disrupcao", "compra"], d: "Disrupção de mão ('Archer Wars')." });
  add("Team Rocket's Giovanni", { cat: "T", sub: "supporter", papeis: ["gust", "mobilidade"], d: "Troca ativos (gust + troca)." });
  add("Cyrano", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca Pokémon ex." });
  add("Colress's Tenacity", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca estádio e energia." });
  add("Tulip", { cat: "T", sub: "supporter", papeis: ["recuperacao", "dano"], d: "Recupera Pokémon Psychic e energias; +60 de dano no Alakazam." });
  add("Gwynn", { cat: "T", sub: "supporter", papeis: ["compra"], d: "Compra/descarte (Hide 'n' Sneak, Okidogi)." });
  add("Professor Turo's Scenario", { cat: "T", sub: "supporter", papeis: ["cura", "mobilidade"], d: "Devolve um Pokémon à mão (nega prêmio)." });
  add("Lana's Aid", { cat: "T", sub: "supporter", papeis: ["recuperacao"], d: "Recupera Pokémon e energias do descarte." });
  add("Xerosic's Machinations", { cat: "T", sub: "supporter", papeis: ["disrupcao"], d: "Oponente descarta até ficar com 3 cartas." });
  add("Eri", { cat: "T", sub: "supporter", papeis: ["disrupcao"], d: "Olha a mão do oponente e descarta Itens." });
  add("Gladion's Final Battle", { cat: "T", sub: "supporter", papeis: ["dano"], d: "Festival Lead: permite tomar 2 prêmios contra Pokémon de 1 prêmio." });
  add("Wally's Compassion", { cat: "T", sub: "supporter", papeis: ["cura"], d: "Cura um Mega Evolution ex." });
  add("Briar", { cat: "T", sub: "supporter", papeis: ["dano"], d: "Prêmio extra quando o oponente tem 2 prêmios restantes (Tera)." });
  add("Pokémon Center Lady", { cat: "T", sub: "supporter", papeis: ["cura"], d: "Cura 60 e remove condições especiais." });
  add("Larry's Skill", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Busca/descarte (Hide 'n' Sneak)." });
  add("Black Belt's Training", { cat: "T", sub: "supporter", papeis: ["dano"], d: "+dano neste turno contra ex." });
  add("Carmine", { cat: "T", sub: "supporter", papeis: ["compra"], d: "Pode ser usado no 1º turno indo 1º." });
  add("Ciphermaniac's Codebreaking", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Coloca 2 cartas no topo do deck." });
  add("Kieran", { cat: "T", sub: "supporter", papeis: ["dano", "mobilidade"], d: "Troca ou +dano contra ex." });
  add("Salvatore", { cat: "T", sub: "supporter", papeis: ["busca"], d: "Evolui direto do deck (não no 1º turno)." });

  /* ---------- Trainers: Itens ---------- */
  add("Ultra Ball", { cat: "T", sub: "item", papeis: ["busca"], d: "Descarta 2 e busca qualquer Pokémon." });
  add("Nest Ball", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca um básico para o banco." });
  add("Buddy-Buddy Poffin", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca 2 básicos de 70 HP ou menos para o banco." });
  add("Poké Pad", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca Pokémon sem Rule Box." });
  add("Dusk Ball", { cat: "T", sub: "item", papeis: ["busca"], d: "Olha o fundo do deck e pega um Pokémon." });
  add("Mega Signal", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca Mega Evolution ex." });
  add("Fighting Gong", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca básico Fighting ou energia Fighting." });
  add("Earthen Vessel", { cat: "T", sub: "item", papeis: ["busca"], d: "Descarta 1, busca 2 energias básicas." });
  add("Energy Search Pro", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca energias de tipos diferentes (ACE SPEC).", ace: true });
  add("Pokégear 3.0", { cat: "T", sub: "item", papeis: ["busca"], d: "Olha o topo e pega um Supporter." });
  add("Team Rocket's Transceiver", { cat: "T", sub: "item", papeis: ["busca"], d: "Busca Supporter TR." });
  add("Roto-Stick", { cat: "T", sub: "item", papeis: ["busca"], d: "Procura Supporters." });
  add("Rare Candy", { cat: "T", sub: "item", papeis: ["busca"], d: "Básico → Stage 2 (não no 1º turno nem em Pokémon que entrou neste turno)." });
  add("Night Stretcher", { cat: "T", sub: "item", papeis: ["recuperacao"], d: "Recupera Pokémon ou energia básica do descarte." });
  add("Super Rod", { cat: "T", sub: "item", papeis: ["recuperacao"], d: "Embaralha até 3 Pokémon/energias básicas no deck." });
  add("Sacred Ash", { cat: "T", sub: "item", papeis: ["recuperacao"], d: "Embaralha até 5 Pokémon no deck." });
  add("Superior Energy Retrieval", { cat: "T", sub: "item", papeis: ["recuperacao"], d: "Descarta 2, pega até 4 energias básicas." });
  add("N's PP Up", { cat: "T", sub: "item", papeis: ["acel"], d: "Liga energia do descarte num Pokémon do N." });
  add("Wondrous Patch", { cat: "T", sub: "item", papeis: ["acel"], d: "Liga energia Psychic do descarte." });
  add("Energy Switch", { cat: "T", sub: "item", papeis: ["acel", "mobilidade"], d: "Move energia básica entre seus Pokémon." });
  add("Crushing Hammer", { cat: "T", sub: "item", papeis: ["disrupcao"], d: "Moeda: cara descarta energia do oponente." });
  add("Enhanced Hammer", { cat: "T", sub: "item", papeis: ["disrupcao", "tech"], d: "Descarta energia especial (Mist, Prism, Rocky)." });
  add("Counter Catcher", { cat: "T", sub: "item", papeis: ["gust"], d: "Gust quando você tem mais prêmios restantes." });
  add("Prime Catcher", { cat: "T", sub: "item", papeis: ["gust", "mobilidade"], d: "Gust + troca (ACE SPEC).", ace: true });
  add("Special Red Card", { cat: "T", sub: "item", papeis: ["disrupcao"], d: "Oponente com ≤3 prêmios embaralha a mão e compra 3." });
  add("Switch", { cat: "T", sub: "item", papeis: ["mobilidade"], d: "Troca o seu ativo." });
  add("Jumbo Ice Cream", { cat: "T", sub: "item", papeis: ["cura"], d: "Cura 80 no ativo com 3+ energias." });
  add("Precious Trolley", { cat: "T", sub: "item", papeis: ["busca"], d: "ACE SPEC de busca para o banco.", ace: true });
  add("Secret Box", { cat: "T", sub: "item", papeis: ["busca"], d: "ACE SPEC: descarta 3, busca Item, Ferramenta, Supporter e Estádio.", ace: true });
  add("Unfair Stamp", { cat: "T", sub: "item", papeis: ["disrupcao"], d: "ACE SPEC: após sofrer KO, você compra 5 e o oponente 2.", ace: true });
  add("Computer Search", { cat: "T", sub: "item", papeis: ["busca"], ace: true, d: "ACE SPEC (Expanded)." });
  add("Dowsing Machine", { cat: "T", sub: "item", papeis: ["recuperacao"], ace: true, d: "ACE SPEC (Expanded)." });
  add("Megaton Blower", { cat: "T", sub: "item", papeis: ["disrupcao"], ace: true, d: "ACE SPEC: remove ferramentas, estádio e energias especiais." });
  add("Brilliant Blender", { cat: "T", sub: "item", papeis: ["busca"], ace: true, d: "ACE SPEC de descarte." });
  add("Accompanying Flute", { cat: "T", sub: "item", papeis: ["gust"], d: "Bota básicos do topo do deck do oponente no banco dele." });
  add("Tool Scrapper", { cat: "T", sub: "item", papeis: ["disrupcao", "tech"], d: "Descarta ferramentas." });
  add("Premium Power Pro", { cat: "T", sub: "item", papeis: ["dano"], d: "+dano para Pokémon Fighting neste turno." });
  add("Battle Compressor", { cat: "T", sub: "item", papeis: ["busca"], d: "Expanded: descarta 3 cartas do deck." });
  add("VS Seeker", { cat: "T", sub: "item", papeis: ["recuperacao"], d: "Expanded: recupera Supporter." });

  /* ---------- Trainers: Ferramentas ---------- */
  add("Sparkling Crystal", { cat: "T", sub: "ferramenta", papeis: ["acel"], ace: true, d: "ACE SPEC: reduz custo de ataque de Tera (Phantom Dive com 1 ligação)." });
  add("Hero's Cape", { cat: "T", sub: "ferramenta", papeis: ["cura"], ace: true, d: "ACE SPEC: +100 HP." });
  add("Maximum Belt", { cat: "T", sub: "ferramenta", papeis: ["dano"], ace: true, d: "ACE SPEC: +50 contra ex." });
  add("Air Balloon", { cat: "T", sub: "ferramenta", papeis: ["mobilidade"], d: "Reduz recuo em 2." });
  add("Bravery Charm", { cat: "T", sub: "ferramenta", papeis: ["cura"], d: "+HP para básico." });
  add("Binding Mochi", { cat: "T", sub: "ferramenta", papeis: ["dano"], d: "+dano se envenenado." });
  add("Lucky Helmet", { cat: "T", sub: "ferramenta", papeis: ["compra"], d: "Compra ao receber dano." });
  add("Brave Bangle", { cat: "T", sub: "ferramenta", papeis: ["dano"], d: "+dano contra ex (sem Rule Box)." });
  add("Cynthia's Power Weight", { cat: "T", sub: "ferramenta", papeis: ["cura"], d: "+HP para Cynthia's." });
  add("Float Stone", { cat: "T", sub: "ferramenta", papeis: ["mobilidade"], d: "Expanded: recuo grátis." });

  /* ---------- Trainers: Estádios ---------- */
  add("Battle Cage", { cat: "T", sub: "estadio", papeis: ["protecao"], d: "Protege o banco de dano e contadores de efeitos do oponente." });
  add("Area Zero Underdepths", { cat: "T", sub: "estadio", papeis: ["motor"], d: "Banco de até 8 com Tera em jogo." });
  add("Risky Ruins", { cat: "T", sub: "estadio", papeis: ["spread"], d: "Dano em básicos não-Darkness que entram no banco." });
  add("Team Rocket's Watchtower", { cat: "T", sub: "estadio", papeis: ["disrupcao"], d: "Desliga habilidades de certos Pokémon — os guias citam Fan Rotom, Noctowl, Pidgeot, Patrat e Dunsparce/Dudunsparce." });
  add("Academy at Night", { cat: "T", sub: "estadio", papeis: ["busca"], d: "Coloca carta da mão no topo do deck." });
  add("Mystery Garden", { cat: "T", sub: "estadio", papeis: ["compra"], d: "Descarta energia, compra até 6 (Psychic)." });
  add("Artazon", { cat: "T", sub: "estadio", papeis: ["busca"], d: "Busca básico sem Rule Box." });
  add("Prism Tower", { cat: "T", sub: "estadio", papeis: ["compra"], d: "Descarte/compra." });
  add("Festival Grounds", { cat: "T", sub: "estadio", papeis: ["motor"], d: "Habilita Festival Lead (atacar 2x)." });
  add("Forest of Vitality", { cat: "T", sub: "estadio", papeis: ["busca"], d: "Grass evolui no turno em que entrou." });
  add("Gravity Mountain", { cat: "T", sub: "estadio", papeis: ["dano"], d: "-HP em Stage 2." });
  add("N's Castle", { cat: "T", sub: "estadio", papeis: ["mobilidade"], d: "Recuo grátis para Pokémon do N." });
  add("Jamming Tower", { cat: "T", sub: "estadio", papeis: ["disrupcao"], d: "Desliga ferramentas." });
  add("Levincia", { cat: "T", sub: "estadio", papeis: ["recuperacao"], d: "Recupera energias Lightning." });
  add("Moonlit Hill", { cat: "T", sub: "estadio", papeis: ["cura"], d: "Cura (Psychic)." });
  add("Path to the Peak", { cat: "T", sub: "estadio", papeis: ["disrupcao"], d: "Expanded: Rule Box sem habilidades." });
  add("Silent Lab", { cat: "T", sub: "estadio", papeis: ["disrupcao"], d: "Expanded: básicos sem habilidades." });

  /* ---------- Energias especiais ---------- */
  add("Legacy Energy", { cat: "E", papeis: ["protecao"], ace: true, d: "ACE SPEC: o oponente pega 1 prêmio a menos uma vez." });
  add("Enriching Energy", { cat: "E", papeis: ["compra"], ace: true, d: "ACE SPEC: compra 4 ao ligar." });
  add("Neo Upper Energy", { cat: "E", papeis: ["acel"], ace: true, d: "ACE SPEC: 2 energias de qualquer tipo em Stage 2." });
  add("Telepathic Psychic Energy", { cat: "E", papeis: ["busca", "acel"], d: "Ao ligar, busca básicos Psychic." });
  add("Telepathic Psychic Energy", { cat: "E", papeis: ["busca", "acel"], d: "Ao ligar, busca básicos Psychic." });
  add("Mist Energy", { cat: "E", papeis: ["protecao"], d: "Previne efeitos de ataques (anula contadores do Alakazam, spread)." });
  add("Rocky Fighting Energy", { cat: "E", papeis: ["protecao"], d: "Previne efeitos de ataques no Pokémon Fighting." });
  add("Prism Energy", { cat: "E", papeis: ["acel"], d: "Todos os tipos em Pokémon Básico (1 por vez)." });
  add("Jet Energy", { cat: "E", papeis: ["mobilidade"], d: "Ao ligar, troca para o ativo." });
  add("Growing Grass Energy", { cat: "E", papeis: ["cura"], d: "+20 HP." });
  add("Ignition Energy", { cat: "E", papeis: ["acel"], d: "Energia especial (Porygon2 TR)." });
  add("Team Rocket's Energy", { cat: "E", papeis: ["acel"], d: "Energia especial TR." });
  add("Voltaic Lightning Energy", { cat: "E", papeis: ["dano"], d: "Mais dano para Manectric." });
  add("Double Dragon Energy", { cat: "E", papeis: ["acel"], d: "Expanded: 2 energias para dragões." });

  /* ---------- Pokémon ---------- */
  const P = (nome, o) => add(nome, Object.assign({ cat: "P" }, o));
  // Dragapult
  P("Dreepy", { est: 0, premios: 1, papeis: [], d: "Básico do Dragapult (70 HP)." });
  P("Drakloak", { est: 1, premios: 1, papeis: ["compra", "motor"], d: "Recon Directive: olha 2 do topo, pega 1." });
  P("Dragapult ex", { est: 2, premios: 2, papeis: ["atacante", "spread"], d: "Phantom Dive: 200 + 6 contadores no banco." });
  P("Budew", { est: 0, premios: 1, papeis: ["itemlock"], fragil: true, d: "Itchy Pollen: item lock no próximo turno do oponente." });
  P("Munkidori", { est: 0, premios: 1, papeis: ["spread", "dano"], d: "Adrena-Brain move até 3 contadores (precisa Darkness); Mind Bend confunde." });
  P("Meowth ex", { est: 0, premios: 2, papeis: ["busca"], d: "Busca Supporter ao entrar." });
  P("Fezandipiti ex", { est: 0, premios: 2, papeis: ["compra", "atacante"], d: "Flip the Script: compra após KO; Cruel Arrow 100 em qualquer alvo." });
  P("Dunsparce", { est: 0, premios: 1, papeis: [], d: "Básico do Dudunsparce." });
  P("Dudunsparce", { est: 1, premios: 1, papeis: ["compra", "motor"], d: "Run Away Draw: compra 3 e volta para o deck." });
  P("Dudunsparce ex", { est: 1, premios: 2, papeis: ["atacante", "tech"], d: "Castiga quem tem muitos Pokémon ex/Clefairy no banco." });
  P("Moltres", { est: 0, premios: 1, papeis: ["atacante", "tech"], d: "Tech contra Grass (Teal Mask, Hydrapple)." });
  P("Duskull", { est: 0, premios: 1, papeis: [], d: "Básico do Dusknoir." });
  P("Dusclops", { est: 1, premios: 1, papeis: ["spread"], d: "Cursed Blast: nocauteia-se e coloca 5 contadores." });
  P("Dusknoir", { est: 2, premios: 1, papeis: ["spread"], d: "Cursed Blast: 13 contadores e nocauteia-se." });
  P("Psyduck", { est: 0, premios: 1, papeis: ["protecao", "tech"], d: "Impede habilidades que se nocauteiam (anti-Dusknoir)." });
  P("Shaymin", { est: 0, premios: 1, papeis: ["protecao", "tech"], d: "Protege o banco de dano de ataques." });
  P("Patrat", { est: 0, premios: 1, papeis: ["protecao", "tech"], d: "Limita os contadores colocados pelo oponente (anti-Munkidori); com Battle Cage segura o Phantom Dive (máx. 60 no banco)." });
  P("Lillie's Clefairy ex", { est: 0, premios: 2, papeis: ["tech", "atacante"], d: "Fairy Zone: dragões do oponente ficam fracos a Psychic." });
  P("Latias ex", { est: 0, premios: 2, papeis: ["mobilidade"], d: "Recuo grátis para básicos." });
  P("Mew ex", { est: 0, premios: 2, papeis: ["atacante", "mobilidade"], d: "Copia ataques; recuo grátis." });
  P("Genesect", { est: 0, premios: 1, papeis: ["tech"], d: "Ace Nullifier: o oponente não usa ACE SPEC." });
  P("Genesect ex", { est: 0, premios: 2, papeis: ["busca"], d: "Metallic Signal: busca 2 evoluções Metal." });
  P("Fan Rotom", { est: 0, premios: 1, papeis: ["busca", "atacante"], d: "Fan Call: busca Pokémon Colorless no 1º turno; ataca 70." });
  P("Tatsugiri", { est: 0, premios: 1, papeis: ["busca"], d: "Busca Supporter quando vai para o ativo." });
  P("Bloodmoon Ursaluna ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Finalizador barato no late game." });
  P("Bloodmoon Ursaluna", { est: 0, premios: 1, papeis: ["atacante"], d: "Mad Bite: finalizador." });
  P("Yveltal", { est: 0, premios: 1, papeis: ["tech"], d: "Retreat lock (Clutch)." });
  P("Pecharunt ex", { est: 0, premios: 2, papeis: ["gust", "atacante"], d: "Subjugating Chains: traz Dark do banco e envenena." });
  P("Chien-Pao", { est: 0, premios: 1, papeis: ["tech"], d: "Remove Pokémon do próprio banco/estádio." });
  // Basic Box
  P("Mega Kangaskhan ex", { est: 0, premios: 3, papeis: ["compra", "atacante", "motor"], d: "Run Errand: compra 2 se ativo; 300 HP." });
  P("Teal Mask Ogerpon ex", { est: 0, premios: 2, papeis: ["acel", "atacante"], d: "Acelera Grass e ataca." });
  P("Wellspring Mask Ogerpon ex", { est: 0, premios: 2, papeis: ["atacante", "spread"], d: "Sob (retreat lock) e Torrential Pump." });
  P("Cornerstone Mask Ogerpon ex", { est: 0, premios: 2, papeis: ["tech"], d: "Não recebe dano de Pokémon com habilidade." });
  P("Raging Bolt ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Dano por energia descartada." });
  P("Iron Crown ex", { est: 0, premios: 2, papeis: ["atacante", "spread"], d: "Twin Shotels em 2 alvos do banco." });
  P("Iron Leaves ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Atacante Grass." });
  P("Koraidon", { est: 0, premios: 1, papeis: ["atacante"], d: "Atacante Fighting." });
  P("Terapagos ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Crown Opal." });
  P("Hoothoot", { est: 0, premios: 1, papeis: [], d: "Básico do Noctowl." });
  P("Noctowl", { est: 1, premios: 1, papeis: ["busca", "motor"], d: "Jewel Seeker: busca Trainers com Tera em jogo." });
  // Hide n Sneak
  P("Dhelmise", { est: 0, premios: 1, papeis: ["atacante"], d: "Vengeful Anchor 170." });
  P("Shuppet", { est: 0, premios: 1, papeis: [], d: "Básico do Banette." });
  P("Banette", { est: 1, premios: 1, papeis: ["atacante", "busca"], d: "Puppet Pull: 80 + busca carta." });
  P("Poltchageist", { est: 0, premios: 1, papeis: ["mobilidade"], d: "Pivô." });
  P("Sinistcha", { est: 1, premios: 1, papeis: ["spread"], d: "Matcha Spin." });
  P("Spiritomb", { est: 0, premios: 1, papeis: ["atacante", "spread"], d: "Spirit End com HnS no descarte." });
  // Slowking
  P("Slowpoke", { est: 0, premios: 1, papeis: [], d: "Básico do Slowking." });
  P("Slowking", { est: 1, premios: 1, papeis: ["atacante"], d: "Seek Inspiration: usa o ataque do Pokémon do topo." });
  P("Kyurem", { est: 0, premios: 1, papeis: ["spread"], d: "Trifrost: dano em vários Pokémon." });
  P("Metagross", { est: 2, premios: 1, papeis: ["atacante"], d: "KO grande single-prize." });
  // Alakazam
  P("Abra", { est: 0, premios: 1, papeis: [], d: "Básico do Alakazam." });
  P("Kadabra", { est: 1, premios: 1, papeis: ["compra"], d: "Compra 2 ao evoluir; 30 de dano." });
  P("Alakazam", { est: 2, premios: 1, papeis: ["atacante"], d: "Powerful Hand: contadores = cartas na mão." });
  // Festival
  P("Applin", { est: 0, premios: 1, papeis: [], d: "Festival Lead." });
  P("Dipplin", { est: 1, premios: 1, papeis: ["atacante"], d: "Atacante principal (ataca 2x)." });
  P("Grookey", { est: 0, premios: 1, papeis: [], d: "Básico do Thwackey." });
  P("Thwackey", { est: 1, premios: 1, papeis: ["busca", "motor"], d: "Busca qualquer carta." });
  P("Goldeen", { est: 0, premios: 1, papeis: [], d: "Festival Lead." });
  P("Seaking", { est: 1, premios: 1, papeis: ["atacante"], d: "Atacante (ataca 2x)." });
  P("Rellor", { est: 0, premios: 1, papeis: [], d: "Básico do Rabsca." });
  P("Rabsca", { est: 1, premios: 1, papeis: ["protecao"], d: "Protege o banco." });
  // Zoroark
  P("N's Zorua", { est: 0, premios: 1, papeis: [], d: "Básico (70 HP)." });
  P("N's Zoroark ex", { est: 1, premios: 2, papeis: ["compra", "atacante", "motor"], d: "Trade + Night Joker." });
  P("N's Darmanitan", { est: 1, premios: 1, papeis: ["spread"], d: "Flamebody Cannon 90 + 90 no banco." });
  P("N's Darumaka", { est: 0, premios: 1, papeis: [], d: "Básico do Darmanitan." });
  P("N's Zekrom", { est: 0, premios: 1, papeis: ["atacante"], d: "Ataque copiado." });
  P("N's Reshiram", { est: 0, premios: 1, papeis: ["atacante"], d: "Ataque copiado." });
  // Lucario
  P("Riolu", { est: 0, premios: 1, papeis: [], d: "Básico do Mega Lucario." });
  P("Mega Lucario ex", { est: 1, premios: 3, papeis: ["atacante", "acel"], d: "Aura Jab 130 + acelera; Mega Brave 270." });
  P("Lunatone", { est: 0, premios: 1, papeis: ["compra", "motor"], d: "Lunar Cycle (com Solrock)." });
  P("Solrock", { est: 0, premios: 1, papeis: ["atacante"], d: "Cosmic Beam: donk cedo." });
  P("Makuhita", { est: 0, premios: 1, papeis: [], d: "Básico do Hariyama." });
  P("Hariyama", { est: 1, premios: 1, papeis: ["gust", "atacante"], d: "Heave-Ho Catcher ao evoluir; 210." });
  P("Togekiss", { est: 2, premios: 1, papeis: ["dano"], d: "Wonder Kiss: chance de prêmio extra." });
  // Crustle
  P("Dwebble", { est: 0, premios: 1, papeis: [], d: "Básico do Crustle." });
  P("Crustle", { est: 1, premios: 1, papeis: ["protecao", "atacante"], d: "Mysterious Rock Inn: não recebe dano de Pokémon ex." });
  // Honchkrow
  P("Team Rocket's Murkrow", { est: 0, premios: 1, papeis: ["busca"], d: "Torment mata Budew; Deceit busca Supporter." });
  P("Team Rocket's Honchkrow", { est: 1, premios: 1, papeis: ["atacante"], d: "Dano por Supporter descartado." });
  P("Team Rocket's Porygon", { est: 0, premios: 1, papeis: [], fragil: true, d: "60 HP." });
  P("Team Rocket's Porygon2", { est: 1, premios: 1, papeis: ["atacante"], d: "R Command (Ignition Energy)." });
  P("Team Rocket's Articuno", { est: 0, premios: 1, papeis: ["protecao"], d: "Protege básicos TR." });
  P("Team Rocket's Mimikyu", { est: 0, premios: 1, papeis: ["mobilidade", "atacante"], fragil: true, d: "60 HP; copia ataque de Tera; recuo grátis." });
  // Sharpedo
  P("Carvanha", { est: 0, premios: 1, papeis: ["atacante"], d: "Básico atacante." });
  P("Mega Sharpedo ex", { est: 1, premios: 3, papeis: ["atacante"], d: "Recuo grátis; Hungry Jaws." });
  P("Toxel", { est: 0, premios: 1, papeis: [], d: "Básico do Toxtricity." });
  P("Toxtricity", { est: 1, premios: 1, papeis: ["acel"], d: "Acelera energias (anti-Hammer)." });
  // Manectric
  P("Electrike", { est: 0, premios: 1, papeis: [], d: "Básico do Manectric." });
  P("Mega Manectric ex", { est: 1, premios: 3, papeis: ["atacante", "protecao"], d: "Flash Ray: imune a ataques de básicos no próximo turno." });
  P("Tynamo", { est: 0, premios: 1, papeis: [], d: "Básico." });
  P("Eelektrik", { est: 1, premios: 1, papeis: ["acel"], d: "Aceleração Lightning." });
  P("Mega Eelektross ex", { est: 2, premios: 3, papeis: ["atacante", "spread"], d: "Split Bomb (dano direto)." });
  P("Kilowattrel", { est: 1, premios: 1, papeis: ["compra"], d: "Compra." });
  P("Zeraora", { est: 0, premios: 1, papeis: ["atacante", "tech"], d: "Snipa ex no banco (não Tera)." });
  P("Stunfisk", { est: 0, premios: 1, papeis: ["tech"], d: "Retreat lock + dano." });
  // Mew box
  P("Frillish", { est: 0, premios: 1, papeis: ["itemlock"], d: "Oceanic Gloom: item lock." });
  P("Jellicent ex", { est: 1, premios: 2, papeis: ["atacante"], d: "Oceanic Curse." });
  P("Mega Diancie ex", { est: 0, premios: 3, papeis: ["atacante"], d: "Garland Ray até 240." });
  // Garchomp
  P("Cynthia's Gible", { est: 0, premios: 1, papeis: [], d: "Básico." });
  P("Cynthia's Gabite", { est: 1, premios: 1, papeis: ["busca"], d: "Champion's Call." });
  P("Cynthia's Garchomp ex", { est: 2, premios: 2, papeis: ["atacante", "compra"], d: "Corkscrew Dive." });
  P("Cynthia's Roselia", { est: 0, premios: 1, papeis: [], d: "Básico." });
  P("Cynthia's Roserade", { est: 1, premios: 1, papeis: ["dano"], d: "+dano para Cynthia's." });
  P("Toedscruel", { est: 1, premios: 1, papeis: ["tech"], d: "Bloqueia recuperação do descarte." });
  // Gholdengo
  P("Gimmighoul", { est: 0, premios: 1, papeis: [], d: "Básico (70/50 HP)." });
  P("Gholdengo ex", { est: 1, premios: 2, papeis: ["atacante", "compra"], d: "Coin Bonus + Make It Rain." });
  P("Scizor", { est: 1, premios: 1, papeis: ["atacante"], d: "Single-prize." });
  P("Revavroom", { est: 1, premios: 1, papeis: ["compra"], d: "Repõe a mão." });
  // Others
  P("Okidogi", { est: 0, premios: 1, papeis: ["atacante"], d: "Atacante Fighting." });
  P("Binacle", { est: 0, premios: 1, papeis: [], d: "Básico." });
  P("Barbaracle", { est: 1, premios: 1, papeis: ["acel"], d: "Stone Arms." });
  P("Ting-Lu", { est: 0, premios: 1, papeis: ["spread", "atacante"], d: "Spread." });
  P("Pecharunt", { est: 0, premios: 1, papeis: ["tech"], d: "Trap + veneno." });
  P("Pikachu ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Topaz Bolt; Resolute Heart." });
  P("Miraidon ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Atacante." });
  P("Iron Hands ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Prêmio extra." });
  P("Joltik", { est: 0, premios: 1, papeis: ["acel"], d: "Jolting Charge." });
  P("Gardevoir ex", { est: 2, premios: 2, papeis: ["acel"], d: "Psychic Embrace." });
  P("Mega Gardevoir ex", { est: 2, premios: 3, papeis: ["atacante"], d: "Mega Symphonia." });
  P("Mega Venusaur ex", { est: 2, premios: 3, papeis: ["atacante"], d: "380 HP." });
  P("Mega Lopunny ex", { est: 1, premios: 3, papeis: ["atacante"], d: "Gale Thrust." });
  P("Mega Absol ex", { est: 0, premios: 3, papeis: ["atacante", "disrupcao"], d: "Lock." });
  P("Mega Excadrill ex", { est: 1, premios: 3, papeis: ["atacante"], d: "Maximum Drilling 330." });
  P("Froslass", { est: 1, premios: 1, papeis: ["spread"], d: "Freezing Shroud." });
  P("Dedenne", { est: 0, premios: 1, papeis: ["recuperacao"], d: "Recicla Trainers." });
  P("Pawmot", { est: 2, premios: 1, papeis: ["tech"], d: "Tech (Slowking)." });
  P("Unown", { est: 0, premios: 1, papeis: ["tech"], d: "Tech." });
  P("Team Rocket's Spidops", { est: 1, premios: 1, papeis: ["atacante"], d: "Escala com Pokémon TR." });
  P("Team Rocket's Mewtwo ex", { est: 0, premios: 2, papeis: ["atacante"], d: "Atacante TR." });

  return C;
})();

/* Energias básicas — nomes aceitos (podem ter mais de 4 cópias). */
window.ENERGIAS_BASICAS = ["grass", "fire", "water", "lightning", "psychic", "fighting", "darkness", "metal", "fairy", "dragon",
  "{g}", "{r}", "{w}", "{l}", "{p}", "{f}", "{d}", "{m}", "{y}"];
