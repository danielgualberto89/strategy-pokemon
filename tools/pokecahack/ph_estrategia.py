# Estratégia por deck (nomes de carta em inglês; o app mostra em PT e em negrito).
# resumo: a ideia do deck numa frase · plano: turno a turno · dicas: decisões que ganham jogos
# cuidados: o que perde jogos · contra: (deck do meta, como jogar) · ajustes: como ler as opções da lista
E = {}

E["dragapult_ex"] = dict(
 resumo="Monte 2 Dragapult ex enquanto o Budew trava Itens; cada Phantom Dive tira 1 prêmio no Ativo e prepara 2 ou 3 no Banco.",
 plano=[
  "**T1:** Buddy-Buddy Poffin / Poké Pad para **2–3 Dreepy** e o **Budew**. Ataque com o Budew (Itchy Pollen: o oponente não joga Itens no próximo turno) — indo 2º, ele já atrapalha o setup deles.",
  "**T2:** evolua para **Drakloak** e use a habilidade (olha 2, fica com 1) **antes** de escolher o Apoiador. Se der, **Rare Candy** direto para o Dragapult ex.",
  "**T3 em diante:** Phantom Dive (200 + 6 contadores no Banco). Escolha os contadores pensando no **próximo** turno: 6 contadores = 60 de dano: derrubam Budew (30), Applin (40) e Básicos de até 60 HP, ou completam KOs em Pokémon que já têm dano (Risky Ruins, Munkidori).",
  "**Fim de jogo:** Boss's Orders no alvo que fecha os prêmios; os contadores espalhados antes transformam o último turno em 2–3 prêmios de uma vez (Dusknoir/Dusclops ajudam a fechar a conta).",
  "**Mapa típico:** 2-2-2 contra ex; contra 1 prêmio, 1 + 2 + 3 (os contadores rendem KOs duplos)."],
 dicas=[
  "**Informação antes do Apoiador:** use Drakloak e Dudunsparce primeiro, depois decida entre Lillie's Determination, Crispin ou Boss's Orders.",
  "**Não espalhe por espalhar:** coloque os contadores onde viram prêmio no próximo turno (Pokémon de 60–70 HP, ou completando um KO de Munkidori/Dusclops).",
  "**Munkidori** (com Energia {D}) move até 3 contadores dos seus Pokémon para os deles: tira o dano do seu Dragapult ex e completa KOs.",
  "**Unfair Stamp** (91% das listas) é o seu reset: guarde para o turno depois de perder um Pokémon, quando o oponente está com a mão grande.",
  "**Crushing Hammer ×4** (40% das listas) é o plano anti-aceleração: contra Mega Lucario, Raging Bolt e decks de energia básica, cada cara é um turno a mais para você."],
 cuidados=[
  "**Lillie's Clefairy ex** em jogo deixa o Dragapult ex **fraco a {P}**: contra atacantes {P} que causam dano (Team Rocket's Mewtwo ex, Mega Gardevoir ex, Slowking), derrube a Clefairy com Boss's Orders antes de expor o Dragapult.",
  "**Fezandipiti ex** (99%) e **Meowth ex** cedem 2 prêmios: não deixe os dois no Banco à toa — baixe o Meowth só quando for buscar o Apoiador.",
  "**Phantom Dive cedo contra mão grande** é o erro mais comum: o oponente responde com Unfair Stamp/Fezandipiti e você fica sem recursos.",
  "**Shaymin** do oponente protege o Banco sem Regra dos contadores — confira antes de planejar KOs no Banco.",
  "Dragapult ex não tem fraqueza, mas a versão com **Blaziken ex** (15%) é a única que ganha velocidade contra Hydrapple/Arboliva (fraqueza a {R})."],
 contra=[
  ("Dragapult ex (mirror)", "Quem ataca primeiro fica exposto a Stamp e Hammer. Mate o Budew deles com o seu Budew, espalhe nos Drakloak com energia e tenha 2 Dragapult prontos."),
  ("Festival Lead", "Os Pokémon deles têm 50–80 HP: um Phantom Dive bem distribuído derruba 1 no Ativo e prepara 2 no Banco. Mate os atacantes (Dipplin/Seaking), não os Thwackey; o Shaymin deles é o alvo do Boss se travar seus KOs."),
  ("Mega Lucario ex", "Hammer cedo nas Energias {F} e Phantom Dive para KO em 2 golpes (340 HP). Mapa 1-1-2-2: derrube Riolu/Solrock antes de virarem ameaça."),
  ("N's Zoroark ex", "Matchup difícil: eles batem forte e cedem pouco. Itens antes do Budew deles, espalhe nos N's Zorua (70 HP) e não deixe o Darmanitan pegar seu Banco."),
  ("Hydrapple ex", "Judge + Itchy Pollen no T2 seguram o Meganium; Boss no Meganium antes de ele dobrar as energias.")],
 ajustes=[
  "**Dusknoir/Dusclops (37%) ou Dudunsparce (43%)** são as duas linhas de apoio: Dusknoir fecha prêmios de uma vez (bom contra 1 prêmio), Dudunsparce dá consistência (bom no mirror e contra disrupção).",
  "**Risky Ruins (60%)** pune decks de Básicos sem {D} (Festival Lead, Alakazam, Raging Bolt): cada Básico que baixam já entra com 20 de dano.",
  "**Team Rocket's Watchtower (55%)** desliga as habilidades dos Pokémon incolores (Meowth ex, Mega Kangaskhan ex, Dudunsparce) do oponente.",
  "**Lillie's Clefairy ex (17%)** é a carta para o mirror: deixa o Dragapult ex rival fraco a {P}."])

E["festival_ondo"] = dict(
 resumo="Pokémon de 1 prêmio que atacam duas vezes por turno no Festival Grounds; o Thwackey busca a carta que faltar.",
 plano=[
  "**T1:** 4 Grookey e Applin com Buddy-Buddy Poffin/Poké Pad; **baixe o Festival Grounds** (sem ele a habilidade não existe). Shaymin no Banco cedo contra Dragapult.",
  "**T2:** evolua para **Thwackey** e **Dipplin**. Com um Pokémon de Festival Lead no Ativo, **cada Thwackey busca 1 carta** — o primeiro busca o segundo Thwackey, Boss's Orders ou a peça que faltar.",
  "**Ataque:** o Dipplin dá 20 × Pokémon no seu Banco, **duas vezes** (até 200). Com Brave Bangle (+30 contra ex) e Kieran (+30 contra ex), cada golpe sobe.",
  "**Mapa:** você cede 1 prêmio por KO; o oponente de ex precisa de 6 KOs. Pegue 2 prêmios por turno com o ataque duplo e termine antes de ele recuperar."],
 dicas=[
  "**Banco cheio = dano:** o ataque do Dipplin conta o Banco; mantenha 5 Pokémon no Banco antes de atacar.",
  "**O 2º ataque vale mesmo se o 1º nocautear:** o novo Ativo entra e recebe o 2º golpe — escolha a ordem com isso em mente.",
  "**Gladion's Resolve (96%)** é a peça contra outros decks de 1 prêmio: guarde para o turno em que ela vira a conta de prêmios.",
  "**Sacred Ash (78%)** devolve até 5 Pokémon do descarte ao baralho: use depois de 2–3 KOs para não ficar sem atacantes.",
  "Pokémon com energia não sofrem Condições Especiais no Festival Grounds: o veneno do Pecharunt ex e o sono da Mega Froslass ex não pegam."],
 cuidados=[
  "**Se trocarem o Estádio, você não ataca duas vezes:** leve os 4 Festival Grounds e guarde um para responder.",
  "**50–80 HP:** spread (Phantom Dive, Froslass + Munkidori, Arboliva ex) derruba vários de uma vez — **Shaymin** é obrigatório contra Dragapult.",
  "**Thwackey preso no Ativo** custa 2 energias para recuar: tenha Switch ou Air Balloon (100% das listas).",
  "Contra **Unfair Stamp**, não pegue o 1º KO sem o Banco desenvolvido: o oponente fica com 5 cartas e você com 2.",
  "**Legendary Lava Lake** (Estádio de decks Basic como Mega Rayquaza) apaga habilidades de evoluções: Thwackey e Dipplin perdem as habilidades até você trocar o Estádio."],
 contra=[
  ("Dragapult ex", "O pior matchup: o Phantom Dive derruba seus Pokémon pequenos. Shaymin no Banco no T1–T2 e ataque o Budew e os Drakloak antes de o Dragapult ex chegar."),
  ("Mega Lucario ex", "Favorável: cada Lucario cede 3 prêmios. Dois ataques duplos bem montados vencem; cuidado com o Solrock indo 2º."),
  ("N's Zoroark ex", "Muito favorável: Zoroark é fraco a {G} e só pega 1 prêmio por KO seu."),
  ("Hydrapple ex", "Favorável na corrida: você pega 2 por turno e cede 1; evite deixar o Meganium deles vivo."),
  ("Mega Excadrill ex", "Difícil: resistência a {G} e 340 HP. Monte Banco cheio + Brave Bangle + Kieran para o KO em 2 turnos.")],
 ajustes=[
  "**Growing Grass Energy (59%)** e **Mist Energy (22%)**: a Mist protege de efeitos de ataques (sono, confusão, veneno de ataque) — mas não do Crushing Hammer, que é Item.",
  "**Rellor + Rabsca (31%)**: a linha que segura o spread de contadores — entra quando o meta tem muito Dragapult.",
  "**Psyduck (51%)** impede habilidades que se nocauteiam (Cursed Blast do Dusknoir)."])

E["mega_rukario_ex"] = dict(
 resumo="Estágio 1 de 340 HP que bate 130 por uma energia acelerando o Banco e 270 no turno seguinte; Lunatone/Solrock dão compra e o 1º ataque.",
 plano=[
  "**T1:** Riolu ×2–3 + **Lunatone e Solrock** no Banco (Fighting Gong busca Básico {F} ou Energia {F}). Use o **Lunar Cycle** (descarta 1 Energia {F} e compra 3) — a energia descartada vira munição do Aura Jab.",
  "**T1 indo 2º:** o **Solrock** já ataca por 70 (com Lunatone em jogo): derrube um Básico que ia evoluir.",
  "**T2:** Mega Lucario ex e **Aura Jab** (130 por 1 energia) ligando até 3 Energias {F} do descarte no Banco — o próximo Lucario já fica pronto.",
  "**T3:** **Mega Brave** (270, 2 energias). Com **Premium Power Pro** (+30 cada, 4 na lista) chega a 300–390 e derruba qualquer Mega.",
  "**Ritmo:** Aura Jab → Mega Brave → (troca de Lucario) → Mega Brave. Mega Brave não pode ser usado em turnos seguidos pelo mesmo Pokémon."],
 dicas=[
  "**Conte as Energias {F}:** você gasta muitas no Lunar Cycle e no Aura Jab; 9 básicas + 2 Rock Fighting Energy é o padrão das listas.",
  "**Gravity Mountain (91%)**: Estágio 2 ficam com -30 HP — Dragapult ex (320 → 290) cai num Mega Brave + 1 Premium Power Pro (300), e o Alakazam fica mais frágil.",
  "**Judge ×3 (98%)** é a disrupção do deck: use depois de pegar um prêmio, quando o oponente se apoia em mão grande (Alakazam, Raging Bolt).",
  "**Rock Fighting Energy (73%)** impede efeitos de ataques no Pokémon: protege dos contadores do Powerful Hand (Alakazam) e do Phantom Dive.",
  "Mapa típico: **1-1-2-2** — o Solrock e o Aura Jab pegam os pequenos, os Mega Brave pegam os ex."],
 cuidados=[
  "**Mega ex cede 3 prêmios:** dois Lucario derrubados e o jogo acabou. Não exponha um Lucario no Ativo sem resposta ao ataque do oponente.",
  "**Mega Brave travado:** se o mesmo Lucario ficar no Ativo, ele não usa Mega Brave no turno seguinte — tenha Switch (87%) ou outro Lucario pronto.",
  "**Fraco a {P}:** Alakazam e Team Rocket's Mewtwo ex fazem o dobro. Mist/Rock Fighting Energy e KOs rápidos nos Kadabra são a resposta.",
  "**Ultra Ball** descarta cartas: às vezes você precisa descartar Premium Power Pro — saiba quantos restam antes do turno de 300+."],
 contra=[
  ("Dragapult ex", "Favorável se você for rápido: Solrock no Budew, Aura Jab nos Drakloak e Mega Brave no Dragapult ex (com Gravity Mountain ele tem 290: Mega Brave + 1 Premium Power Pro derruba). Cuidado com Crushing Hammer nas suas energias."),
  ("N's Zoroark ex", "Seu melhor matchup: eles não derrubam um Lucario de 340 num golpe e o suporte deles (Pecharunt ex, Fezandipiti ex) é presa fácil para o Aura Jab."),
  ("Festival Lead", "Difícil: 1 prêmio contra 3. Use Aura Jab nos Dipplin e Judge para quebrar a busca dos Thwackey; guarde Mega Brave para o fim."),
  ("Mega Excadrill ex", "Favorável: 340 HP — eles só fazem OHKO com Kieran. Mega Brave + 1 Premium Power Pro derruba o Excadrill."),
  ("Alakazam", "Equilibrado: Rock Fighting Energy obriga Enhanced Hammer; derrube Abra/Kadabra com Solrock e Aura Jab antes do Powerful Hand.")],
 ajustes=[
  "**Hariyama (42%)** ou **Dudunsparce (49%)**: Hariyama é gust ao evoluir (bom contra Megas e Fezandipiti ex); Dudunsparce é compra (bom contra disrupção).",
  "**Maximum Belt (53%)** contra ex e **Hero's Cape (18%)** para sobreviver a um golpe a mais.",
  "**Team Rocket's Watchtower (29%)** desliga habilidades de incolores (Kangaskhan, Meowth ex, Dudunsparce) do oponente."])

E["n_zoroark_ex"] = dict(
 resumo="N's Zoroark ex compra todo turno com Trade e copia o melhor ataque do Banco (N's Zekrom, N's Reshiram, N's Darmanitan); veneno do Pecharunt ex + Binding Mochi completam o dano.",
 plano=[
  "**T1:** 3–4 **N's Zorua** com Buddy-Buddy Poffin/Poké Pad + um atacante de N (N's Zekrom ou N's Darmanitan). **N's Castle** zera o recuo dos Pokémon de N.",
  "**T2:** N's Zoroark ex e **Trade** (descarta 1, compra 2) em cada um. Descarte energia e Pokémon que você pode recuperar (N's PP Up, Night Stretcher).",
  "**Ataque:** **Night Joker** copia o ataque de um Pokémon de N do Banco; **N's PP Up** liga energia do descarte no Banco para mudar de ataque sem perder turno.",
  "**Pecharunt ex** troca um Pokémon {D} do Banco para o Ativo envenenando-o; com **Binding Mochi** (+40 envenenado) e **Black Belt's Training** (+40 contra ex) o dano chega aos OHKOs."],
 dicas=[
  "**Cada carta tem o momento certo para ir ao descarte:** energia descartada pelo Trade volta com N's PP Up; Pokémon voltam com Night Stretcher.",
  "**Não baixe mais de 3 Zoroark:** o Banco precisa dos Pokémon de N que dão os ataques.",
  "**Yveltal (82%)** impede o recuo: se o oponente abrir com Meowth ex/Duskull no Ativo, prenda e pegue prêmios.",
  "**Tatsugiri (59%)** busca Apoiador quando está no Ativo — bom início em mão sem Lillie's Determination.",
  "**Prize check** no T1: veja se a linha do Zoroark, os atacantes de N e o Pecharunt não estão nos prêmios."],
 cuidados=[
  "**Fraco a {G}:** Festival Lead, Hydrapple ex, Arboliva ex e Teal Mask Ogerpon ex fazem o dobro — e o Festival Lead ainda cede só 1 prêmio.",
  "**N's Zorua de 70 HP** caem no spread do Phantom Dive; não deixe 3 expostos de uma vez.",
  "Sem Pokémon de N no Banco, o Night Joker não tem o que copiar: proteja (ou recupere) o N's Zekrom.",
  "**Team Rocket's Watchtower** e **Gravity Mountain** do oponente não afetam seus Pokémon ({D} e Estágio 1) — mas o N's Castle precisa voltar ao jogo se eles trocarem o Estádio."],
 contra=[
  ("Dragapult ex", "Favorável: use os Itens antes do Budew travar, Darmanitan cedo nos Drakloak e Night Joker no Dragapult ex com Black Belt's Training."),
  ("Festival Lead", "O pior matchup: fraqueza a {G} e trocas de 1 prêmio. Procure KOs duplos e use Yveltal para prender o Thwackey no Ativo."),
  ("Mega Lucario ex", "Desfavorável: o Lucario de 340 HP aguenta seus golpes. Envenene + Binding Mochi + Black Belt's Training para o KO, e derrube Lunatone/Solrock."),
  ("Alakazam", "Favorável: Alakazam é fraco a {D}. Darmanitan derruba Abra/Dunsparce antes do Shaymin deles."),
  ("Mega Excadrill ex", "Difícil: Genesect ex + Metang aceleram desde o T2. Pegue os Metang antes de virarem Metagross.")],
 ajustes=[
  "**Janine's Secret Art (39%)** acelera Energia {D} e envenena; **Gravity Mountain (32%)** contra Estágio 2.",
  "**Secret Box (55%)** ou **Unfair Stamp (25%)** na vaga de ACE SPEC: Secret Box é consistência, Unfair Stamp é virada.",
  "**Budew (30%)** para travar Itens cedo contra Estágio 2."])

E["kamitsuorochi_ex"] = dict(
 resumo="Hydrapple ex liga Energia {G} da mão todo turno e cura 30; com Meganium dobrando cada Energia {G} básica, o Syrup Storm passa de 300 de dano.",
 plano=[
  "**T1:** Applin, Chikorita e **Teal Mask Ogerpon ex** (Teal Dance: liga Energia {G} da mão e compra 1). **Bug Catching Set ×4** busca Pokémon {G} e Energia {G}.",
  "**T2:** com **Forest of Vitality**, evolua o Applin até Hydrapple ex e o Chikorita até **Meganium** no mesmo turno (do 2º turno em diante).",
  "**T3:** Syrup Storm: 30 + 30 por Energia {G} em todos os seus Pokémon. Com o Meganium, cada Energia {G} básica conta como 2 — 6 energias em jogo já viram 390.",
  "**Defesa:** a habilidade do Hydrapple ex liga energia e **cura 30** por turno; Lana's Aid devolve Pokémon sem Regra e energia do descarte."],
 dicas=[
  "**Proteja o Meganium:** é o primeiro alvo do Boss's Orders. Tenha a 2ª linha de Chikorita/Bayleef (2-2-2 nas listas) pronta.",
  "**Dipplin** ataca por 1 Energia {G}: 20 por Pokémon no Banco (100 com 5, 160 com Area Zero Underdepths) — bom 1º ataque enquanto o Hydrapple não está pronto.",
  "**Briar (66%)**: com o oponente em 2 prêmios, o KO do Teal Mask Ogerpon ex (Pokémon Tera) pega 1 prêmio a mais e fecha o jogo.",
  "**Dawn (85%)** busca Básico + Estágio 1 + Estágio 2: monta Hydrapple ou Meganium num Apoiador só.",
  "**Unfair Stamp (71%)** depois de perder o Meganium: a mão deles cai para 2 enquanto você reconstrói."],
 cuidados=[
  "**Fraco a {R}:** Dragapult com Blaziken ex, Ceruledge ex e Mega Charizard ex derrubam o Hydrapple ex num golpe.",
  "**Applin (40 HP) e Chikorita** caem fácil no spread: não comece com tudo no Banco contra Dragapult.",
  "**Não ataque antes do Meganium** se o golpe não derrubar: o dano baixo só entrega tempo para o oponente.",
  "**Legendary Lava Lake** do oponente apaga as habilidades do Hydrapple ex e do Meganium — guarde Forest of Vitality para trocar o Estádio."],
 contra=[
  ("Dragapult ex", "Equilibrado: Judge + Itchy Pollen deles no T2 é o perigo. Monte o Meganium no turno em que for atacar e derrube o Dragapult ex em 1 golpe (320 HP = 10 energias contadas)."),
  ("N's Zoroark ex", "Favorável: Zoroark é fraco a {G} e você cura 30 por turno."),
  ("Marnie's Grimmsnarl ex", "Muito favorável: fraco a {G}, e a cura desfaz o plano de contadores deles."),
  ("Festival Lead", "Desfavorável: ataque duplo de 1 prêmio. Use Dipplin e Teal Mask nos atacantes deles e deixe o Hydrapple para os KOs grandes."),
  ("Mega Excadrill ex", "Difícil: resistência a {G}. Junte energia para passar dos 340 + 30.")],
 ajustes=[
  "**Celebi (71%)** está na maioria das listas premiadas; **Tapu Bulu (20%)** aparece como alternativa.",
  "**Team Rocket's Proton (24%)** busca qualquer Treinador (Forest of Vitality, Unfair Stamp).",
  "14 Grass Energy básicas é o padrão — o deck vive de energia na mão para a habilidade e para o Teal Dance."])

E["mega_doryuzu_ex"] = dict(
 resumo="Mega Excadrill ex de 340 HP bate 330 com 5 energias; Metang acelera Energia {M} do baralho e o Metagross sem Regra é o 2º atacante.",
 plano=[
  "**T1:** **Precious Trolley** (ACE SPEC, 97% das listas) ou Buddy-Buddy Poffin para baixar Beldum ×2–3, Drilbur e Genesect ex. O ataque do **Drilbur** baixa mais 2 Básicos.",
  "**T2:** **Genesect ex** busca 2 evoluções {M} (Metang/Mega Excadrill ex); **Metang** (habilidade: olha 4 do baralho e liga as Energias {M}) começa a acelerar.",
  "**T2–T3:** Mega Excadrill ex com 3 energias = 200; com 5 = **330**, o bastante para derrubar quase qualquer Mega.",
  "**Ataque leve:** contra Pokémon de até 90 HP, use o 1º ataque (90 + descarta 2 do baralho deles) e guarde energia.",
  "**Metagross** (sem Regra, 100% das listas) é o atacante de 1 prêmio quando você não quer expor o Mega."],
 dicas=[
  "**Mantenha 2 Metang em jogo:** são a aceleração; sem eles, você trava em 200 de dano.",
  "**Gravity Mountain (95%)**: Estágio 2 ficam com -30 HP — Dragapult ex vai para 290 e Alakazam para menos; mas o seu Metagross também perde 30.",
  "**Jumbo Ice Cream (97%)** cura o Mega: use depois que ele sobreviver a um golpe, para forçar o oponente a 2 golpes de novo.",
  "**Team Rocket's Transceiver ×4 + Team Rocket's Proton ×4**: o Transceiver busca o Proton, que busca qualquer Treinador — é a sua forma de achar Gravity Mountain, Boss's Orders ou o Ice Cream.",
  "**Kieran (59%)**: +30 contra ex no turno do ataque decisivo."],
 cuidados=[
  "**Fraco a {R}:** a versão Blaziken do Dragapult, Ceruledge ex e Mega Charizard ex derrubam o Excadrill num golpe.",
  "**Mega ex cede 3:** se for atacar com o Mega, que seja para nocautear — não deixe um Excadrill com 3 energias exposto a um Boss.",
  "**Metang perdido para Boss's Orders** trava o deck: deixe o Beldum de reserva no Banco.",
  "**Budew** trava o Precious Trolley e o Poffin: tenha rota por Apoiador (Brock's Scouting, Proton) até o Genesect ex."],
 contra=[
  ("Dragapult ex", "Equilibrado: com Gravity Mountain, Metagross ou o Mega derrubam o Dragapult ex (290). A ameaça é a versão Blaziken (fraqueza {R})."),
  ("Festival Lead", "Favorável: resistência a {G} e 340 HP. Use o 1º ataque (90) nos Pokémon de 50–80 HP e o Metagross para não ceder 3."),
  ("Mega Lucario ex", "Desfavorável: 330 não chega aos 340 do Lucario — guarde o **Kieran** (+30 contra ex) para esse KO; a Gravity Mountain não ajuda (Lucario é Estágio 1)."),
  ("Raging Bolt ex", "Difícil: o dano sem teto deles atravessa os 340. Pegue os ex pequenos (Teal Mask, Meowth ex) primeiro."),
  ("Alakazam", "Desfavorável: 1 prêmio retoma a iniciativa. Gravity Mountain deixa o Alakazam no alcance do 1º ataque + Metagross.")],
 ajustes=[
  "**Shaymin (49%)** protege o Banco de spread; **Mega Skarmory ex (24%)** para snipe no Banco.",
  "**Iron Defender (46%)** reduz o dano recebido; **Jamming Tower (41%)** desliga Ferramentas do oponente (Hero's Cape, Brave Bangle).",
  "16 Metal Energy básicas: a aceleração do Metang depende de achar energia no topo do baralho."])

E["takeruraiko_ex"] = dict(
 resumo="Box de Básicos: Teal Mask Ogerpon ex enche o tabuleiro de energia e o Raging Bolt ex descarta tudo por 70 de dano cada; Mega Kangaskhan ex e Talonflame ex dão o início.",
 plano=[
  "**T1:** Mega Kangaskhan ex e Teal Mask Ogerpon ex no Banco; **Area Zero Underdepths** (Banco de 8 com Tera em jogo). Teal Dance (liga Energia {G} da mão + compra 1) em cada Ogerpon.",
  "**T1 indo 2º:** **Talonflame ex** entra da mão (com Mega incolor em jogo) e ataca por 150 buscando 2 cartas — é o seu 1º prêmio.",
  "**T2:** **Crispin** e **Energy Switch** levam {L} e {F} para o Raging Bolt ex; ataque descartando só as energias necessárias para o KO.",
  "**Variação de atacantes:** Iron Leaves ex (entra no Ativo movendo energia), Wellspring Mask Ogerpon ex (dano no Banco), Lillie's Clefairy ex (Dragões fracos a {P})."],
 dicas=[
  "**Descarte só o necessário:** 70 × energias descartadas — conte o HP do alvo e deixe o resto para o próximo ataque.",
  "**Mega Kangaskhan ex no Ativo** usa o Run Errand (compra 2) antes de recuar com Latias ex (recuo zero para Básicos).",
  "**Glass Trumpet (86%)** liga energias do descarte em Pokémon incolores do Banco (com Tera em jogo) — recupera o tabuleiro depois do ataque grande.",
  "**Lillie's Clefairy ex (93%)** contra Dragapult: o Dragapult ex fica fraco a {P}, e uma Psychic Energy no ataque certo dobra o dano.",
  "Mapa típico: Talonflame (2) + Raging Bolt (2) + Raging Bolt (2), sempre derrubando ex."],
 cuidados=[
  "**Recuo 3:** um Raging Bolt sem energia fica preso no Ativo depois do ataque — Latias ex no Banco sempre.",
  "**Muitos ex no Banco** alimentam o Dudunsparce ex do oponente (60 por ex seu): não baixe ex que você não vai usar.",
  "**Decks de 1 prêmio** (Festival Lead, Alakazam) fazem você precisar de 6 KOs contra 3: troque o plano para KOs duplos com Wellspring Mask.",
  "**Team Rocket's Watchtower** do oponente desliga o Run Errand e o Talonflame só entra da mão (funciona) — tenha outra compra."],
 contra=[
  ("Dragapult ex", "Difícil: ataque antes de o tabuleiro dele ficar pronto. Clefairy em jogo + Raging Bolt no Dragapult ex; Iron Leaves pega os Drakloak."),
  ("Mega Rayquaza ex", "Favorável com Tapu Koko ex/{L}: a Mega Rayquaza é fraca a {L}."),
  ("Festival Lead", "Desfavorável: 1 prêmio com ataque duplo. Use Wellspring Mask e Teal Mask para derrubar 2 por turno."),
  ("Mega Lucario ex", "Raging Bolt derruba o Lucario com 5 energias; cuidado com a Gravity Mountain (não te afeta) e o Judge deles."),
  ("Alakazam", "Desfavorável: 1 prêmio por vez. Pegue os Kadabra cedo com Talonflame e Iron Leaves.")],
 ajustes=[
  "**Passimian (36%)** e **Bloodmoon Ursaluna ex (32%)** são os atacantes de fechamento; **Koraidon ex (18%)** para a linha Ancient.",
  "**Prime Catcher (21%)** ou **Unfair Stamp (68%)** na ACE SPEC: Prime Catcher para fechar, Unfair Stamp para virar.",
  "Energias de 5 tipos: {G} para Teal Dance, {L}/{F} para o Raging Bolt, {P} para a Clefairy, {W} para o Wellspring."])

E["mega_rayquaza_ex"] = dict(
 resumo="Box de Básicos com Mega Rayquaza ex (50 × Energias {R} e {L} em todos os seus Pokémon) e Ethan's Ho-Oh ex acelerando; Legendary Lava Lake desliga as habilidades do oponente.",
 plano=[
  "**T1:** Mega Kangaskhan ex + **Mega Rayquaza ex** no Banco (a habilidade de entrada olha 4 do baralho e liga 1 energia básica). **Ethan's Ho-Oh ex** liga até 2 energias da mão num Pokémon de Ethan do Banco.",
  "**T1 indo 2º:** **Talonflame ex** da mão e ataque por 150 + 2 cartas, ou **Energy Switch** das energias do Ho-Oh para a Mega Rayquaza e já atacar.",
  "**T2:** Mega Rayquaza ex ataca: 7 Energias {R}/{L} em jogo = 350, o bastante para quase todo ex.",
  "**Estádio:** **Legendary Lava Lake** (4 cópias, 88% das listas) apaga as habilidades de Pokémon evoluídos — seus Pokémon são Básicos (o Talonflame usa a habilidade da mão), os do oponente (Drakloak, Thwackey, Kadabra, Metang) param."],
 dicas=[
  "**Espalhe a energia** entre Rayquaza, Ho-Oh e Kangaskhan: o dano conta todos os seus Pokémon, e um KO no Rayquaza não leva tudo.",
  "**Sempre pegue prêmio no turno em que atacar** — a corrida é o plano; Cyrano (96%) e Judge (92%) mantêm a sua mão e cortam a deles.",
  "**Lanterna da Aventura** (92%) busca Energia {R} e {L} básicas: é como a mão nunca fica sem energia.",
  "**Hero's Cape (42%)** na Mega Rayquaza ex deixa ela fora do alcance de muitos atacantes.",
  "Mapa: Talonflame 2 + Rayquaza 2 + 2 — ou 3 num Mega do oponente."],
 cuidados=[
  "**Fraca a {L}:** Tapu Koko ex e Raging Bolt com {L} fazem o dobro.",
  "**Muitos ex na mesa:** Dudunsparce ex do oponente bate 60 por ex seu. Não baixe ex extras sem necessidade.",
  "**Decks de 1 prêmio** (Alakazam, Festival Lead) são desfavoráveis: precisa de 6 KOs contra 3. O Lava Lake cedo desliga o Thwackey e o Kadabra/Alakazam.",
  "**Team Rocket's Watchtower** desliga Kangaskhan e a habilidade de entrada da Rayquaza (incolores): tenha Legendary Lava Lake para trocar o Estádio."],
 contra=[
  ("Dragapult ex", "Favorável: Talonflame pega prêmios cedo enquanto você monta energia; o Lava Lake desliga o Drakloak e o Dusknoir."),
  ("Festival Lead", "Desfavorável na corrida, mas o Legendary Lava Lake apaga a habilidade dos Thwackey e dos Pokémon de Festival Lead (Estágio 1): troque o Estádio deles e eles atacam só uma vez."),
  ("Alakazam", "O Lava Lake apaga a compra do Kadabra/Alakazam; mesmo assim é 1 prêmio — mantenha a mão do oponente pequena com Judge."),
  ("Raging Bolt ex", "Equilibrado: quem pega o 1º KO num ex grande vence. Cuidado com a fraqueza a {L}."),
  ("Mega Lucario ex", "Derrube o Lucario com 7 energias antes do Mega Brave; o Lava Lake não para o Lunar Cycle (o Lunatone é Básico).")],
 ajustes=[
  "**Reshiram ex (25%)** e **Bloodmoon Ursaluna ex (17%)** como atacantes alternativos.",
  "**Prime Catcher (17%)** ou **Unfair Stamp (38%)** na ACE SPEC.",
  "10 Fire Energy + 5 Lightning Energy é o padrão: o ataque conta {R} e {L}."])

E["fudin"] = dict(
 resumo="Alakazam sem Regra põe 2 contadores por carta na sua mão por 1 energia — mão grande é dano; Kadabra e Alakazam compram ao evoluir.",
 plano=[
  "**T1:** Abra ×3–4 com Buddy-Buddy Poffin/Poké Pad; **Telepathic Psychic Energy** (ligada num {P}) baixa mais 2 Básicos {P}.",
  "**T2:** Kadabra (compra 2 ao evoluir) e, com **Rare Candy**, Alakazam (compra 3). Evoluir da mão é o que dá as cartas — não use Rare Candy em Abra que você não vai precisar.",
  "**Ataque:** Powerful Hand = 2 contadores × cartas na mão. 8 cartas = 160; 10 = 200. Não há teto.",
  "**Compra:** Hilda e Dawn (100% das listas) buscam evoluções **sem embaralhar a mão** — as listas não usam Lillie's Determination por isso."],
 dicas=[
  "**Segure a mão:** cada carta guardada é 20 de dano. Só jogue o que muda o turno.",
  "**Dudunsparce** compra 3 e volta para o baralho com tudo que tem ligado: use e devolva, para não deixar um alvo no Banco.",
  "**Enhanced Hammer (70%)** tira Mist Energy e Rock Fighting Energy — os Pokémon com elas não recebem os contadores do Powerful Hand.",
  "**Psyduck (61%)** impede o Cursed Blast do Dusknoir: deixa você jogar contra Dragapult sem perder o Banco.",
  "Mapa: 1 prêmio por KO seu contra 2–3 dos ex deles — você precisa de mais KOs, mas cada um custa pouco."],
 cuidados=[
  "**Fraco a {D}:** N's Zoroark ex e Marnie's Grimmsnarl ex fazem o dobro — derrube os atacantes {D} primeiro.",
  "**Judge, Unfair Stamp e Archer** do oponente cortam a sua mão e o seu dano: guarde uma Hilda ou Dawn para reconstruir.",
  "**Não baixe Fezandipiti ex cedo** contra Dragapult: eles batem 200 nele e terminam com spread.",
  "**Gravity Mountain** do oponente deixa o Alakazam (Estágio 2) com -30 HP."],
 contra=[
  ("Dragapult ex", "Favorável: o Kadabra derruba o Budew; Psyduck para o Dusknoir; Alakazam com 9–10 cartas derruba o Dragapult ex em 2 golpes (o Powerful Hand põe contadores: fraqueza não conta)."),
  ("Mega Lucario ex", "Favorável: o Lucario cede 3 prêmios e você 1. O Powerful Hand põe contadores (a fraqueza a {P} não conta) — use Enhanced Hammer na Rock Fighting Energy e mire os Riolu."),
  ("N's Zoroark ex", "Desfavorável na teoria (fraqueza {D}), mas eles cedem 2 por Zoroark: monte só Alakazam e Dudunsparce no tabuleiro e não exponha Abra."),
  ("Festival Lead", "Difícil: Gladion's Resolve deles pega 2 prêmios contra Pokémon de 1 prêmio. Contadores em Pokémon de 50–80 HP: 3–4 cartas na mão bastam."),
  ("Mega Excadrill ex", "Com Gravity Mountain deles o Alakazam sofre; derrube Metang e Beldum cedo.")],
 ajustes=[
  "**Dusknoir (22%)** e **Dragapult ex (17%)** são pacotes de dano extra; **Genesect (43%)** e **Dudunsparce ex (22%)** completam.",
  "**Battle Colosseum (74%)** é o Estádio padrão; **Team Rocket's Watchtower (17%)** contra decks de incolores.",
  "**Rich Energy (74%)** e **Neo Upper Energy (17%)** entre as energias especiais."])

E["oliva_ex"] = dict(
 resumo="Arboliva ex espalha 120 de dano em 6 escolhas por 1 energia; com Teal Mask Ogerpon ex e Meganium, o deck derruba vários Pokémon pequenos por turno.",
 plano=[
  "**T1:** Smoliv ×2 e Chikorita ×2 com Bug Catching Set; **Budew** (79%) ataca indo 2º para travar Itens.",
  "**T2:** **Forest of Vitality** evolui direto até Arboliva ex e Meganium. **Teal Mask Ogerpon ex** acelera Energia {G} da mão.",
  "**Ataque:** escolha 6 vezes, 20 por escolha, ignorando fraqueza e resistência — 3 Pokémon de 40 HP, ou 2 de 60, ou 1 de 120.",
  "**Fim:** Unfair Stamp (100% das listas) e Briar (84%) com o Teal Mask fecham o jogo."],
 dicas=[
  "**Procure a distribuição que derruba 2 ou mais Pokémon no turno** — Dreepy (70), Budew (30), Applin (40), Riolu, Abra, Zorua.",
  "**Se não derrubar, deixe o número exato:** 20 a menos que o HP restante prepara KOs com o próximo ataque ou com o Dipplin/Teal Mask.",
  "**Atrás nos prêmios:** Counter Catcher prende no Ativo um Pokémon de recuo caro, e a Arboliva continua castigando o Banco.",
  "**Ignora resistência:** contra {F} e {M} com resistência a {G}, o dano é cheio.",
  "Meganium dobra a Energia {G} básica: o Teal Mask Ogerpon ex vira um atacante de 2º plano muito forte."],
 cuidados=[
  "**Não atinge Pokémon Tera no Banco** (Dragapult ex, Teal Mask Ogerpon ex, Ceruledge ex) — o spread não serve contra eles.",
  "**Fraco a {R}** e **o spread não aplica fraqueza** do lado do oponente.",
  "**Teto de 120 num alvo:** contra ex grandes, a Arboliva não derruba sozinha — use o Teal Mask ou o 2º ataque (160).",
  "**Recuo 2:** tenha Switch/Energy Switch para trocar de atacante."],
 contra=[
  ("Dragapult ex", "Favorável: derrube Dreepy e Duskull em grupo antes de evoluírem. Cuidado com a versão Blaziken ex (fraqueza {R})."),
  ("Mega Lucario ex", "Favorável: Riolu, Lunatone e Solrock caem no spread."),
  ("Festival Lead", "Bom: Pokémon de 50–80 HP caem em 2–3 escolhas."),
  ("Raging Bolt ex", "Difícil: tabuleiro de HP alto e Tera no Banco. Use o Teal Mask com Meganium para os ex."),
  ("Mega Excadrill ex", "Difícil: 340 HP e dano alto; pegue os Beldum/Drilbur cedo.")],
 ajustes=[
  "**Team Rocket's Proton (58%)** para achar Forest of Vitality/Unfair Stamp; **Ciphermaniac's Codebreaking (26%)** monta o topo.",
  "**Energy Switch (63%)** move a energia do Teal Mask para quem ataca.",
  "12 Grass Energy básicas — com o Meganium, 6 em jogo valem 12."])

E["marnie_ohlonge_ex"] = dict(
 resumo="Marnie's Grimmsnarl ex liga 5 energias do baralho ao evoluir e bate 180 + 30 no Banco; Froslass e 4 Munkidori espalham e movem contadores para KOs múltiplos.",
 plano=[
  "**T1:** Marnie's Impidimp ×2–3, **Budew** (100% das listas) e Snorunt; **Spikemuth Gym** busca 1 Pokémon de Marnie por turno.",
  "**T2:** **Rare Candy** → Marnie's Grimmsnarl ex: liga **até 5 energias básicas do baralho** nos Pokémon de Marnie. Froslass no Banco (1 contador por checkup em todo Pokémon com habilidade).",
  "**Ataque:** 180 no Ativo + 30 num Pokémon do Banco. Com 4 **Munkidori** movendo até 3 contadores cada, o dano real por turno passa de 300.",
  "**Fechamento:** os contadores acumulados viram KOs duplos com Boss's Orders no alvo certo."],
 dicas=[
  "**Dano moderado de propósito:** deixar o Fezandipiti ex do oponente com 30 HP (180) impede a compra dele; no turno seguinte, Boss + 30 no Banco = KO exato.",
  "**Munkidori ×4:** cada um move 3 contadores dos seus Pokémon (inclusive os do Froslass) para os do oponente — o Froslass machuca os dois lados, o Munkidori limpa o seu.",
  "**Contra Dragapult e Lucario, às vezes não baixe o Froslass:** os contadores no seu tabuleiro colocam seus Pokémon no alcance deles.",
  "**Yveltal (80%)** prende Pokémon no Ativo; **Tatsugiri (47%)** busca Apoiador.",
  "Team Rocket's Proton ×4 (100%) busca o Treinador que falta (Rare Candy, Secret Box)."],
 cuidados=[
  "**Fraco a {G}:** Hydrapple ex, Arboliva ex e Teal Mask Ogerpon ex fazem o dobro — e o Hydrapple ainda cura o seu dano.",
  "**Tera no Banco não recebe** os 30 do ataque (Teal Mask, Dragapult ex).",
  "**Sem 5 energias básicas no baralho**, a habilidade perde força: não descarte energia à toa.",
  "**Não deixe o seu tabuleiro desmoronar com o Froslass:** limpe os contadores com Munkidori antes de passar o turno."],
 contra=[
  ("Dragapult ex", "Favorável: o spread de contadores pega os Estágio 2 em desenvolvimento. Mate o Budew deles e mire os Drakloak."),
  ("Hydrapple ex", "Muito desfavorável: fraqueza a {G} e cura. Pegue o Meganium com Boss + contadores cedo."),
  ("Mega Excadrill ex", "Difícil: o OHKO deles anula a tática de contadores."),
  ("Raging Bolt ex", "Difícil: dano sem teto. Contadores nos Teal Mask (não Tera no Ativo) e nos Meowth ex."),
  ("Alakazam", "Desfavorável: a lógica de 1 prêmio e Estádios que bloqueiam contadores no Banco.")],
 ajustes=[
  "**Dudunsparce (33%)** como compra extra (escapa do Froslass ao voltar ao baralho).",
  "**Team Rocket's Watchtower (47%)** desliga incolores do oponente.",
  "9 Darkness Energy básicas: suficiente para a habilidade e o Munkidori."])

E["mega_yukimenoko_ex"] = dict(
 resumo="Mega Froslass ex bate 50 × cartas na mão do oponente por 1 energia; joga em parceria com Mega Lopunny ex ou Mega Starmie ex e cura com Wally's Compassion.",
 plano=[
  "**T1:** Snorunt ×2 com Buddy-Buddy Poffin; o parceiro (Buneary para Mega Lopunny ex, ou Staryu para Mega Starmie ex).",
  "**T2:** Mega Froslass ex e ataque: com 7 cartas na mão deles, 350 — o bastante para quase tudo.",
  "**Defesa:** **Wally's Compassion** (75% das listas, 4 cópias) cura o Mega e devolve a energia para a mão — o oponente precisa recomeçar o dano.",
  "**Revezamento:** quando a mão deles é pequena, ataque com o parceiro (Mega Lopunny ex ou Mega Starmie ex) e deixe a Froslass para quando a mão crescer."],
 dicas=[
  "**Não use Judge ou Unfair Stamp antes de atacar com a Froslass:** eles diminuem a mão do oponente e o seu dano.",
  "**O melhor momento é logo depois de o oponente comprar muito:** Lillie's Determination (6), Team Rocket's Ariana (8), Trade do Zoroark.",
  "**Mist Energy (50%)** protege dos efeitos de ataques (veneno, confusão) — não do Crushing Hammer, que é Item.",
  "**Hero's Cape (42%)** + 310 HP: o Mega fica fora do alcance de muitos golpes.",
  "O 2º ataque (150 + sono) serve quando a mão deles tem 2 ou menos cartas."],
 cuidados=[
  "**Fraca a {M}:** Mega Excadrill ex e Metagross a derrubam fácil.",
  "**Mega ex cede 3:** com dois Megas no deck (Froslass + parceiro), cada KO sofrido pesa — cure com Wally's Compassion antes de expor.",
  "**Alakazam** quer a mão grande — ótimo para você; mas **decks que jogam com a mão pequena** (Festival Lead buscando com Thwackey) tiram o seu dano.",
  "**Festival Grounds** (do Festival Lead) impede o sono do 2º ataque em Pokémon com energia."],
 contra=[
  ("Dragapult ex", "Equilibrado: eles seguram a mão grande para decidir o turno — ataque quando tiverem 6+ cartas. Shaymin/Psyduck protegem seu Banco."),
  ("Alakazam", "Favorável: o deck deles vive de mão grande — cada carta guardada é 50 de dano seu."),
  ("Marnie's Grimmsnarl ex", "Mão média e muitos contadores: ataque no turno depois do Lillie's deles e use o Wally's para limpar."),
  ("Festival Lead", "Difícil: mão pequena e ataque duplo de 1 prêmio. Use o parceiro (Lopunny/Starmie) nos atacantes."),
  ("Mega Excadrill ex", "Desfavorável: fraqueza a {M}.")],
 ajustes=[
  "**Mega Lopunny ex (50%)** ou **Mega Starmie ex (33%)** como parceiro — a lista típica usa Lopunny.",
  "**Mew ex (67%)** copia ataques; **Dudunsparce (50%)** e **Fan Rotom (50%)** dão o setup.",
  "**Battle Colosseum (50%)** e **Risky Ruins (25%)** como Estádios."])

E["cynthia_gaburias_ex"] = dict(
 resumo="Cynthia's Garchomp ex de 330 HP (400 com Power Weight) e recuo zero: bate 100 e recompõe a mão a 6, ou 260 descartando as energias; cada Cynthia's Roserade soma +30.",
 plano=[
  "**T1:** Cynthia's Gible ×2–3 e Cynthia's Roselia com Buddy-Buddy Poffin; Fighting Gong busca Básico {F} e energia.",
  "**T2:** **Cynthia's Gabite** (habilidade: busca 1 Pokémon de Cynthia) e Cynthia's Roserade. Com Rare Candy (45%), Garchomp ex já no T2.",
  "**Ataque:** o 1º ataque (100 + compra até ter 6 na mão) é o padrão — com 1 Roserade, 130; com 2, 160. O 2º (260 + 30 por Roserade) derruba Megas.",
  "**Defesa:** **Cynthia's Power Weight** (+70 HP, 100% das listas) leva o Garchomp a 400 — poucos decks derrubam num golpe."],
 dicas=[
  "**Recuo zero:** troque de Garchomp à vontade — o Garchomp machucado vai para o Banco e o **Cynthia's Spiritomb** bate o número de contadores dele.",
  "**Cynthia's Spiritomb (100%)**: se um Garchomp sobreviveu com 300 de dano, o Spiritomb dá 300.",
  "**Rock Fighting Energy (100%, 4 cópias)** impede efeitos de ataques: os contadores do Phantom Dive e do Powerful Hand não pegam no Pokémon com ela.",
  "**Team Rocket's Watchtower (91%)** desliga incolores do oponente (Meowth ex, Mega Kangaskhan ex, Dudunsparce) — seus Pokémon de Cynthia não são incolores.",
  "Fezandipiti ex cai com 1 Roserade ou 1 Premium Power Pro no 2º ataque — mire ele para cortar a compra do oponente."],
 cuidados=[
  "**Fraco a {G}:** Hydrapple ex, Arboliva ex, Festival Lead e Teal Mask Ogerpon ex fazem o dobro.",
  "**O 2º ataque descarta todas as energias:** só use se for nocautear; senão, 100 + mão cheia é melhor.",
  "**Crushing Hammer e Enhanced Hammer** tiram a Rock Fighting Energy — tenha energia de sobra.",
  "**Gravity Mountain** do oponente: Garchomp ex (Estágio 2) perde 30 HP."],
 contra=[
  ("Dragapult ex", "Equilibrado: Rock Fighting Energy bloqueia os contadores no Pokémon; os Hammers deles são o perigo. Ataque de 100 + Roserades nos Drakloak."),
  ("N's Zoroark ex", "Favorável: HP altíssimo — eles não derrubam um Garchomp com Power Weight."),
  ("Festival Lead", "Desfavorável: fraco a {G} e 1 prêmio."),
  ("Mega Lucario ex", "Lucario {F} contra seu {F}: 400 HP aguenta o Mega Brave sem Premium Power Pro."),
  ("Hydrapple ex", "Desfavorável: fraqueza a {G} e cura.")],
 ajustes=[
  "**Premium Power Pro (64%)** soma +30 para fechar contas.",
  "**Kieran (18%)** e **Forest of Vitality (27%)** em listas mais agressivas.",
  "**Neo Upper Energy (45%)** para pagar o 2º ataque."])

E["gekkouga_ex"] = dict(
 resumo="Greninja ex (Tera) bate 170 e busca qualquer carta por 1 energia; a linha de Dusknoir completa os KOs que os 170 não alcançam.",
 plano=[
  "**T1:** Froakie ×3 e Duskull ×2 com Buddy-Buddy Poffin; **Budew** (78%) trava Itens.",
  "**T2:** **Rare Candy** (4 na lista) → Greninja ex. 1º ataque: 170 + busca 1 carta qualquer — todo turno você escolhe a carta que falta.",
  "**Fechamento:** Dusclops (5 contadores) e Dusknoir (13) com o Cursed Blast completam o que os 170 não derrubam: 170 + 130 = 300.",
  "**Snipe:** o 2º ataque descarta 2 energias e dá 120 em dois Pokémon — KOs duplos contra Bancos de HP baixo."],
 dicas=[
  "**A busca do ataque é a sua consistência:** pegue Boss's Orders, Rare Candy ou a energia do próximo turno.",
  "**Grand Tree (78%)** evolui Básico → Estágio 2 direto do baralho: Greninja ex no T2 mesmo sem Rare Candy.",
  "**Jamming Tower (67%)** desliga Ferramentas do oponente: Hero's Cape, Cynthia's Power Weight e Brave Bangle deixam de existir.",
  "**Ignition Energy (100%)** paga ataques com uma carta em evoluídos; descarta no fim do turno.",
  "Tera: o Greninja ex não recebe dano de ataques no Banco — prepare o 2º sem medo."],
 cuidados=[
  "**170 não derruba Megas:** planeje o Cursed Blast antes de atacar um Pokémon de 300+.",
  "**Cada Cursed Blast cede 1 prêmio** (o Dusknoir se nocauteia): use quando o KO vale mais.",
  "**Psyduck** do oponente impede o Cursed Blast — derrube-o com o ataque.",
  "**Fraco a {P}:** Team Rocket's Mewtwo ex e outros atacantes {P} fazem o dobro."],
 contra=[
  ("Dragapult ex", "Equilibrado: Budew contra Budew; Greninja ex derruba Drakloak (90) e prepara o Dragapult ex para Dusknoir."),
  ("Festival Lead", "Bom: o 2º ataque derruba 2 Pokémon de até 120 por turno."),
  ("Mega Lucario ex", "170 + Cursed Blast (130) = 300 — falta 40: use Dusclops também ou espere o Lucario ter dano."),
  ("Alakazam", "Os contadores do Powerful Hand ignoram a fraqueza, mas o Alakazam é 1 prêmio: pegue os Abra com o 2º ataque (120 em dois)."),
  ("N's Zoroark ex", "Atacante {D} contra {D}: 170 + busca mantém a corrida.")],
 ajustes=[
  "**Mega Kangaskhan ex + Talonflame ex (22%)** como início alternativo.",
  "**Colress's Tenacity (78%)** busca Estádio e energia; **Zinnia's Resolve (22%)** como compra.",
  "6 Water Energy + 3 Ignition Energy é o padrão."])

E["mega_fushigibana_ex"] = dict(
 resumo="Mega Venusaur ex de 380 HP move energia livremente entre seus Pokémon e bate 240 curando 30; Teal Mask Ogerpon ex e Meganium dão a energia.",
 plano=[
  "**T1:** Bulbasaur, Chikorita e **Teal Mask Ogerpon ex** (Teal Dance: liga Energia {G} da mão e compra 1).",
  "**T2:** **Forest of Vitality** → Mega Venusaur ex e Meganium no mesmo turno (Rare Candy não pode).",
  "**Ataque:** Jungle Dump (240 + cura 30). Com o Meganium, 2 Energias {G} básicas pagam o ataque.",
  "**Energia livre:** a habilidade da Mega move Energia {G} básica entre seus Pokémon quantas vezes quiser — a energia do Teal Dance vai para quem ataca."],
 dicas=[
  "**Truque do Wally's Compassion:** mova as energias para outro Pokémon com a habilidade, use o Wally's (cura total) e mova de volta — sem perder nada.",
  "**Ou use o Wally's com energia ligada** para devolvê-la à mão e comprar de novo com o Teal Dance.",
  "**380 HP + cura 30 por ataque:** o oponente precisa de 2 golpes e você cura entre eles.",
  "**Bug Catching Set no início; Poké Pad para evoluções; Ultra Ball para os ex.**",
  "Para derrubar o Dragapult ex (320), o Teal Mask com Meganium (Myriad Leaf Shower) ou 2 Jungle Dump."],
 cuidados=[
  "**Fraco a {R}:** Dragapult com Blaziken ex, Ceruledge ex e Ethan's Typhlosion derrubam a Mega.",
  "**Recuo 4:** a Mega presa no Ativo é um problema — mova as energias para recuar ou use Switch.",
  "**Mega ex cede 3:** com 380 HP isso é raro, mas um Boss + golpe grande decide o jogo.",
  "**Não evolua o Mega Meganium cedo** sem as linhas montadas."],
 contra=[
  ("Dragapult ex", "Equilibrado: a cura desfaz o spread. Cuidado com a versão Blaziken."),
  ("Festival Lead", "Bom: 380 HP aguenta vários ataques duplos; Jungle Dump derruba qualquer um deles."),
  ("Mega Lucario ex", "Favorável: 270 não derruba 380 e você cura."),
  ("Mega Excadrill ex", "Resistência a {G}: 240 - 30 = 210; precisa de 2 golpes."),
  ("Raging Bolt ex", "Dano sem teto deles atravessa os 380 — derrube os Teal Mask deles cedo.")],
 ajustes=[
  "**Mega Meganium ex (78%)** é o 2º Mega; **Celebi (44%)** aparece em quase metade das listas.",
  "**Area Zero Underdepths (22%)** para Banco de 8.",
  "12 Grass Energy básicas."])

E["soublades_ex"] = dict(
 resumo="Ceruledge ex bate 30 + 20 por energia no descarte por 1 Energia {R}; Lunatone, Carmine e Perfect Mixer enchem o descarte.",
 plano=[
  "**T1 (indo 1º):** Charcadet ×2–3, Lunatone e Solrock. **Carmine** (4 na lista) descarta a mão e compra — mande energia para o descarte.",
  "**T2:** Ceruledge ex e ataque: 10 energias no descarte = 230; 13 = 290; 15 = 330 (o HP dos Estágio 2 ex).",
  "**Todo turno:** **Lunar Cycle** (descarta 1 Energia {F} e compra 3). O Solrock (70 por 1 energia com Lunatone) limpa Pokémon pequenos.",
  "**Perfect Mixer** (ACE SPEC): escolha 5 cartas do baralho para o descarte — até +100 no turno que faltar."],
 dicas=[
  "**Conte antes de atacar:** HP do alvo menos 30, dividido por 20 = energias necessárias no descarte.",
  "**Não termine o turno com a mão cheia de energia:** Prism Tower (descarta 2, compra 1) é o destino das sobras.",
  "**Tera:** a Ceruledge ex no Banco não recebe dano de ataques — prepare a 2ª com segurança.",
  "**Briar (50%)**: com o oponente em 2 prêmios, o KO da Ceruledge (Tera) pega 1 a mais.",
  "**Mist Energy ×2 (100%)** protege a Ceruledge de efeitos de ataques."],
 cuidados=[
  "**19–21 energias:** se não descartar cedo, a mão trava.",
  "**Sem disrupção:** se o oponente sair na frente, há pouco para virar.",
  "**Mina Noturna** (Estádio japonês: Tera pagam +1 energia) tira o ataque de 1 energia.",
  "**Fraca a {W}.**"],
 contra=[
  ("Hydrapple ex", "Favorável: fraqueza a {R}."),
  ("Mega Excadrill ex", "Favorável: fraqueza a {R}."),
  ("Alakazam", "Desfavorável: também tem dano sem teto e é 1 prêmio."),
  ("Festival Lead", "Desfavorável: troca 2 por 1 em prêmios."),
  ("Dragapult ex", "Equilibrado: os dois são Tera; mire os Drakloak com o Solrock e o Dragapult ex com 15 energias.")],
 ajustes=[
  "**Explorer's Guidance (50%)** enche o descarte; **Kieran (25%)** soma +30 contra ex.",
  "**Cornerstone Mask Ogerpon ex (25%)** como muralha contra ex.",
  "11 Fighting Energy + 7 Fire Energy + 2 Mist Energy."])

E["mega_starmie_ex"] = dict(
 resumo="Mega Starmie ex bate 120 + 50 no Banco por 1 energia e 210 que ignora tudo; joga em parceria com Mega Froslass ex ou Dragapult ex.",
 plano=[
  "**T1 indo 2º:** **Seiji** (29%) evolui o Staryu direto para Mega Starmie ex — e você já ataca.",
  "**Ataque padrão:** Jet Blow (120 + 50 num Pokémon do Banco) — pressiona antes de o oponente montar.",
  "**Contra muralhas:** Nebula Beam (210, ignora fraqueza, resistência e efeitos) — atravessa Pokémon que não recebem dano de ex. A Ignition Energy paga sozinha.",
  "**Parceiro:** Mega Froslass ex (57% das listas) ou Dragapult ex (29%) dividem os prêmios."],
 dicas=[
  "**Os 50 no Banco preparam KOs:** Budew (30), Dreepy (70 com 2 golpes), Fezandipiti ex depois de dano.",
  "**Risky Ruins (71%)**: cada Básico sem {D} do oponente entra com 20 de dano — com o Jet Blow, Dreepy e Applin caem em 1 golpe.",
  "**Surfing Beach (29%)** troca o Ativo {W} por outro {W}: resolve o recuo 2.",
  "**Wally's Compassion (43%, 4 cópias)** cura o Mega e devolve energia."],
 cuidados=[
  "**Fraca a {L}.**",
  "**Mega ex cede 3.**",
  "**Recuo 2:** tenha Air Balloon (71%) ou Surfing Beach."],
 contra=[
  ("Dragapult ex", "Jet Blow nos Drakloak e Budew; Nebula Beam no Dragapult ex em 2 golpes."),
  ("Festival Lead", "Bom: 120 + 50 derrubam 2 Pokémon de 50–80 HP."),
  ("Mega Rayquaza ex", "Corrida rápida: pegue o Talonflame ex cedo com o Jet Blow."),
  ("Mega Excadrill ex", "Nebula Beam ignora resistência e Iron Defender.")],
 ajustes=["**Munkidori (57%)** move contadores; **Lucian (43%)** como Apoiador de disrupção."])

E["mega_gekkouga_ex"] = dict(
 resumo="Mega Greninja ex põe 6 contadores onde quiser (descartando 1 energia) enquanto está no Ativo; Greninja ex Tera e o pacote Kangaskhan/Talonflame completam.",
 plano=[
  "**T1:** Froakie ×3–4; Mega Kangaskhan ex e Talonflame ex para o início.",
  "**T2:** **Rare Candy** → Mega Greninja ex. No Ativo, descarte 1 energia básica da mão: **6 contadores** num Pokémon qualquer.",
  "**Ataque:** 120 (+80 devolvendo 1 Energia {W} à mão = 200).",
  "**Habilidade duplicada:** com 2 Mega Greninja e Switch/**Surfing Beach**, use a habilidade, troque e use a do outro — 120 de contadores por turno."],
 dicas=[
  "**Frogadier**: o ataque busca 3 Pokémon — funciona sob a trava de Itens do Budew.",
  "**Greninja ex (Tera, 100%)** cobre a fraqueza e busca cartas com o ataque.",
  "**Não nocauteie cedo** se isso abre Special Red Card/Unfair Stamp do oponente: espalhe contadores e feche vários de uma vez."],
 cuidados=["**Fraca a {L}.**", "**Mega ex cede 3.**", "**Máximo de 200 no ataque** — o dano real vem dos contadores."],
 contra=[
  ("Dragapult ex", "Controle o Dragapult ex com contadores e feche vários de uma vez."),
  ("Alakazam", "Favorável: os 6 contadores derrubam Abra (e Kadabra com o ataque) ao entrarem."),
  ("Raging Bolt ex", "Desfavorável: 3 prêmios de vantagem cedo."),
  ("Mega Lucario ex", "Desfavorável: eles puxam Meowth/Fez e fecham com Premium Power Pro.")],
 ajustes=["**Jamming Tower (67%)** desliga Ferramentas; **Zinnia's Resolve (100%)** como compra."])

E["rocket_donkarasu_porygonz"] = dict(
 resumo="Team Rocket's Honchkrow descarta Apoiadores Rocket por 60 cada; depois, Team Rocket's Porygon2/Porygon-Z batem 20 por Apoiador Rocket no descarte.",
 plano=[
  "**T1:** **Team Rocket's Transceiver** busca **Team Rocket's Petrel** (indo 1º, baixa 3 Pokémon Rocket): Murkrow ×2, Porygon e **Team Rocket's Articuno**.",
  "**Cedo:** Honchkrow descarta Apoiadores Rocket da mão: 6 = 360, o bastante para Megas.",
  "**Meio/fim:** Porygon2/Porygon-Z com 16 Apoiadores Rocket no descarte = 320.",
  "**Energia:** Team Rocket's Energy (2 energias) ou Ignition Energy (3 em evoluídos) pagam o ataque com uma carta."],
 dicas=[
  "**Conte:** Mega Kangaskhan ex precisa de 5 descartes (7 com Hero's Cape); Pokémon de mais de 300 HP, 6.",
  "**Team Rocket's Articuno** protege os Básicos Rocket de efeitos de ataques (Phantom Dive, contadores).",
  "**Team Rocket's Factory** compra 2 depois de cada Apoiador Rocket.",
  "**Miracle Headset** (ACE SPEC): 2 Apoiadores do descarte para a mão = +120 de Honchkrow.",
  "**No mirror, não descarte o Archer.**"],
 cuidados=[
  "**Sem Regra cai fácil:** troque 1 por 1 só se o seu golpe derrubar ex.",
  "**Pouca busca para as energias especiais:** não gaste Team Rocket's Energy à toa.",
  "**Porygon no Ativo contra Lucario** é donk de Solrock — mantenha Murkrow na frente."],
 contra=[
  ("Dragapult ex", "Muito favorável com Articuno no Banco protegendo os Básicos."),
  ("Mega Lucario ex", "Muito favorável: Murkrow/Honchkrow resistem a {F}."),
  ("N's Zoroark ex", "Cuidado com o Darmanitan (o Articuno não para dano) e o Yveltal."),
  ("Marnie's Grimmsnarl ex", "Desfavorável: o dano no Banco castiga; evolua rápido.")],
 ajustes=["**Brave Bangle (50%)** +30 contra ex; **Lucky Helmet (25%)** como alternativa."])

E["rocket_mewtwo_ex"] = dict(
 resumo="Team Rocket's Mewtwo ex (280 HP) bate até 280 com 4+ Pokémon Rocket em jogo; Team Rocket's Spidops recicla energia e Articuno protege dos efeitos.",
 plano=[
  "**T1:** Transceiver → **Team Rocket's Petrel**: Tarountula ×2, Articuno, Mimikyu — chegue a 4 Pokémon Rocket rápido.",
  "**T2:** Spidops (liga energia básica do descarte nele) e Mewtwo ex com **Team Rocket's Energy** (vale 2).",
  "**Ataque:** Eraser Ball 160 + 60 por energia descartada do Banco (até 2) = 280; com **Maximum Belt** (75%) 330 contra ex.",
  "**Ciclo:** o Spidops recoloca a energia descartada — os 280 se repetem."],
 dicas=[
  "**Lillie's Clefairy ex (100% das listas)** contra Dragapult: o Dragapult ex fica fraco a {P} — 160 × 2 = 320 sem descartar nada.",
  "**Team Rocket's Ariana** compra até 8 (10 com a Factory) quando só há Pokémon Rocket em jogo — cuidado ao baixar a Clefairy antes dela.",
  "**Team Rocket's Archer** depois de um KO: as duas mãos voltam ao baralho; você compra 5, o oponente 3.",
  "**Team Rocket's Giovanni** é o gust dos Pokémon Rocket."],
 cuidados=[
  "**Menos de 4 Pokémon Rocket = sem ataque:** proteja o Banco do spread.",
  "**Recuo 3** e **fraco a {D}.**",
  "O Spidops é evoluído: o Articuno não o protege."],
 contra=[
  ("Dragapult ex", "Clefairy + Mewtwo derruba o Dragapult ex sem descartar; o Articuno bloqueia os contadores nos Básicos."),
  ("Team Rocket's Honchkrow", "Desfavorável: eles batem na fraqueza {D} do Mewtwo."),
  ("N's Zoroark ex", "Desfavorável: o Zoroark foca nos Spidops.")],
 ajustes=["**Secret Box (25%)**, **Prism Tower (25%)** e **Psychic Energy (50%)** variam entre as listas."])

E["mega_lizardonx_ex"] = dict(
 resumo="Mega Charizard X ex descarta Energias {R} por 90 cada; na prática as listas premiadas jogam Y + X com o pacote Mega Kangaskhan/Talonflame e Oricorio ex acelerando.",
 plano=[
  "**T1:** Charmander ×2+ (80 HP — use Poké Pad/Ultra Ball) e Mega Kangaskhan ex; Talonflame ex da mão indo 2º.",
  "**T2:** Rare Candy → Mega Charizard; **Oricorio ex** liga Energias {R} da mão no Banco.",
  "**Ataque:** Y ex = 280 em qualquer Pokémon (snipe); X ex = 90 × Energias {R} descartadas — fecha o que o Y não derruba."],
 dicas=["**Ignition Energy só no turno do ataque** (descarta no fim do turno).", "Mire o snipe do Y ex no Pokémon mais desenvolvido do Banco deles."],
 cuidados=["**Deixar só um Charmander** no Banco é perder o jogo para spread.", "**Fraco a {W}** e Mega ex cede 3."],
 contra=[("Dragapult ex", "Difícil: Phantom Dive e Cursed Blast derrubam as pré-evoluções."), ("Hydrapple ex", "Favorável: fraqueza a {R}.")],
 ajustes=["Só 2 listas premiadas: a amostra é pequena — veja o guia completo de Mega Charizard (Pokemite) para o plano detalhado."])

E["hibiki_bakphoon"] = dict(
 resumo="Ethan's Typhlosion sem Regra bate até 280 por 1 Energia {R} com Ethan's Adventure no descarte; explora a fraqueza a {R} dos Pokémon {G} do meta.",
 plano=[
  "**T1:** Ethan's Cyndaquil ×3–4 e Dreepy (motor de compra com Drakloak).",
  "**T2:** **Ethan's Quilava** busca **Ethan's Adventure**; Rare Candy → Typhlosion. Cada Ethan's Adventure usado vai para o descarte e soma +60.",
  "**Ataque:** 40 + 60 × Ethan's Adventure no descarte (4 = 280), +10 com Victini e +30 com Brave Bangle contra ex."],
 dicas=["Use o Ethan's Adventure cedo: ele busca peças **e** vira dano no descarte.", "**Mina Noturna** (2 na lista) faz Pokémon Tera pagarem +1 energia: atrasa Dragapult ex, Teal Mask e Ceruledge."],
 cuidados=["**Fraco a {W}**; recuo 2.", "Só 1 lista premiada até agora: amostra pequena."],
 contra=[("Hydrapple ex / Arboliva ex / Teal Mask", "Favorável: fraqueza a {R}."), ("Dragapult ex", "A Mina Noturna atrasa o Phantom Dive; derrube os Drakloak.")],
 ajustes=["Lista de 1 resultado — teste antes de confiar nas contagens."])

E["mega_gengar_ex"] = dict(
 resumo="Mega Gengar ex faz seus Pokémon {D} cederem 1 prêmio a menos quando nocauteados por ex; bate 230 por 2 energias movendo energia para o Banco.",
 plano=["**Monte a Mega Gengar ex cedo:** enquanto ela estiver em jogo, seus Pokémon {D} sem Regra cedem **0** prêmios contra atacantes ex, e o Fezandipiti ex cede 1.",
  "**Ataque:** 230 por 2 energias, movendo 1 energia para o Banco — o próximo atacante já fica carregado."],
 dicas=["**Janine's Secret Art** + a ligação manual pagam os 2 de custo; no Ativo envenena — com **Binding Mochi**, +40."],
 cuidados=["**Fraca a {F}**: Mega Lucario ex é o pior rival.", "Nocauteada por Pokémon **sem Regra**, cede 3."],
 contra=[("Mega Lucario ex", "Desfavorável: fraqueza a {F}."), ("Decks de ex (Dragapult, Raging Bolt)", "Favorável: a habilidade corta os prêmios que eles pegam.")],
 ajustes=["Sem listas premiadas na temporada — por ora é carta de apoio em decks {D} (N's Zoroark, Marnie's Grimmsnarl)."])
