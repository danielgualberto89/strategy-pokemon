/* Interface do Coach de Decks TCG. Rotas por hash: #inicio, #decks, #deck-<id>,
   #matchup, #laboratorio, #coach, #conceitos, #regras, #cartas. */
(function () {
  const $ = s => document.querySelector(s);
  const app = $("#app");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const ROT = { 2: "Muito favorável", 1: "Favorável", 0: "Equilibrado", "-1": "Desfavorável", "-2": "Muito desfavorável" };
  const chipR = r => `<span class="chip r${r}">${r > 0 ? "+" : ""}${r} · ${ROT[r]}</span>`;
  const STATUS = { meta: "Meta atual", rogue: "Rogue / nicho", "formato-anterior": "Formato anterior" };
  const nomeDeck = id => Engine.nomeDeck(id);
  const store = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignorado */ } } };

  async function copiar(texto, btn) {
    try { await navigator.clipboard.writeText(texto); if (btn) { const t = btn.textContent; btn.textContent = "Copiado"; setTimeout(() => btn.textContent = t, 1500); } }
    catch (e) { const ta = document.createElement("textarea"); ta.value = texto; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); } catch (_) { /* sem cópia */ } ta.remove(); if (btn) btn.textContent = "Selecione e copie manualmente"; }
  }

  /* ---------------- Início ---------------- */
  function vInicio() {
    const meta = DECKS.filter(d => d.status === "meta");
    app.innerHTML = `<section class="vista">
      <div class="bloco"><h2>Aprenda a jogar cada deck e crie estratégias para decks novos</h2>
      <p class="lead">Li os 30 primeiros guias gratuitos de Pokémon TCG do Metafy e as regras oficiais de 2026 e transformei tudo em um sistema: planos de jogo turno a turno, matchups, dicas, erros comuns e um laboratório que analisa qualquer lista nova e monta a estratégia para ela.</p></div>
      <div class="grade">
        <a class="cartao" href="#decks" style="text-decoration:none;color:inherit"><span class="rotulo">Aprender</span><h3>${DECKS.length} decks explicados</h3><p class="nota">Como funciona, peças-chave, lista de referência, T1/T2, prize maps e matchups.</p></a>
        <a class="cartao" href="#matchup" style="text-decoration:none;color:inherit"><span class="rotulo">Preparar</span><h3>Consulta de matchup</h3><p class="nota">Escolha seu deck e o do oponente: plano, quem começa e o que o outro lado tenta fazer.</p></a>
        <a class="cartao" href="#laboratorio" style="text-decoration:none;color:inherit"><span class="rotulo">Criar</span><h3>Laboratório de estratégia</h3><p class="nota">Cole uma lista (TCG Live/Limitless) e receba validação, plano, matchups estimados e techs. Ou gere um esqueleto de deck novo.</p></a>
        <a class="cartao" href="#coach" style="text-decoration:none;color:inherit"><span class="rotulo">Perguntar</span><h3>Coach com IA</h3><p class="nota">Use a base dos guias com o Claude para perguntas livres e estratégias detalhadas.</p></a>
      </div>
      <div class="bloco"><span class="rotulo">Decks do meta atual</span>
        <div class="grade">${meta.map(cardDeck).join("")}</div></div>
    </section>`;
    ligarCardsDeck();
  }

  function cardDeck(d) {
    return `<button class="cartao" data-deck="${d.id}"><div class="chips"><span class="chip ${d.status === "meta" ? "meta" : ""}">${STATUS[d.status]}</span><span class="chip">Dificuldade ${"●".repeat(d.dificuldade)}${"○".repeat(5 - d.dificuldade)}</span></div>
      <h3>${esc(d.nome)}</h3><p class="nota">${esc(d.estilo)}</p><p>${esc(d.resumo)}</p></button>`;
  }
  function ligarCardsDeck() { app.querySelectorAll("[data-deck]").forEach(b => b.addEventListener("click", () => location.hash = "deck-" + b.dataset.deck)); }

  /* ---------------- Lista de decks ---------------- */
  function vDecks() {
    const filtro = store.get("filtro-decks", "todos");
    const lista = DECKS.filter(d => filtro === "todos" || d.status === filtro);
    app.innerHTML = `<section class="vista">
      <div class="bloco"><h2>Decks</h2><p class="lead">Resumo de cada arquétipo coberto pelos guias. Decks de formato anterior continuam úteis para aprender, mas podem ter perdido cartas na rotação.</p></div>
      <div class="barra"><label for="f-status">Mostrar <select id="f-status">
        <option value="todos">Todos</option><option value="meta">Meta atual</option><option value="rogue">Rogue / nicho</option><option value="formato-anterior">Formato anterior</option></select></label></div>
      <div class="grade">${lista.map(cardDeck).join("")}</div>
      <div class="cartao"><span class="rotulo">Formato Expanded</span><h3>Guia de introdução ao Expanded</h3><p>${esc(EXPANDED.resumo)}</p><p><a href="#regras">Ver resumo do Expanded na aba Regras</a></p></div>
    </section>`;
    $("#f-status").value = filtro;
    $("#f-status").addEventListener("change", e => { store.set("filtro-decks", e.target.value); vDecks(); });
    ligarCardsDeck();
  }

  /* ---------------- Detalhe do deck ---------------- */
  function vDeck(id) {
    const d = DECKS.find(x => x.id === id);
    if (!d) return vDecks();
    const mus = Object.entries(d.matchups).sort((a, b) => b[1].r - a[1].r);
    app.innerHTML = `<section class="vista det">
      <p><a href="#decks">← Todos os decks</a></p>
      <div class="det-topo"><div class="bloco"><div class="chips"><span class="chip ${d.status === "meta" ? "meta" : ""}">${STATUS[d.status]}</span><span class="chip">${esc(d.formato)}</span></div>
        <h2>${esc(d.nome)}</h2><p class="nota">Também chamado: ${esc(d.apelidos.join(", "))}</p></div>
        <div class="barra">${d.lista ? `<button class="btn pri" id="b-analisar">Analisar a lista no Laboratório</button>` : ""}</div></div>
      <p class="lead">${esc(d.resumo)}</p>
      <div class="grade-2">
        <div class="cartao"><span class="rotulo">Como o deck funciona</span><p>${esc(d.comoFunciona)}</p></div>
        <div class="cartao"><span class="rotulo">1º ou 2º?</span><p>${esc(d.primeiroOuSegundo)}</p>
          ${d.prizeMaps.length ? `<span class="rotulo">Prize maps</span><ul class="lista">${d.prizeMaps.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}</div>
      </div>
      <div class="bloco"><h3>Plano de jogo</h3><div class="turnos">
        ${[["Turno 1", d.planoDeJogo.turno1], ["Turno 2", d.planoDeJogo.turno2], ["Meio de jogo", d.planoDeJogo.meio], ["Fechamento", d.planoDeJogo.final]].map(([t, x]) => `<div class="turno"><span class="rotulo">${t}</span><p>${esc(x)}</p></div>`).join("")}
      </div></div>
      <div class="bloco"><h3>Peças-chave</h3><div class="tabela-wrap"><table><thead><tr><th>Carta</th><th>Papel</th></tr></thead><tbody>
        ${d.pecasChave.map(([c, p]) => `<tr><td><strong>${esc(c)}</strong></td><td>${esc(p)}</td></tr>`).join("")}</tbody></table></div></div>
      <div class="grade-2">
        ${d.dicas.length ? `<div class="cartao"><span class="rotulo">Dicas dos guias</span><ul class="lista">${d.dicas.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
        ${d.erros.length ? `<div class="cartao"><span class="rotulo">Erros comuns</span><ul class="lista">${d.erros.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
        ${d.variantes ? `<div class="cartao"><span class="rotulo">Variantes</span><ul class="lista">${d.variantes.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
      </div>
      ${mus.length ? `<div class="bloco"><h3>Matchups</h3><div class="tabela-wrap"><table><thead><tr><th>Contra</th><th>Avaliação</th><th>Ir</th><th>Como jogar</th></tr></thead><tbody>
        ${mus.map(([o, m]) => `<tr><td><strong>${esc(nomeDeck(o))}</strong></td><td>${chipR(m.r)}</td><td>${esc(m.ir)}</td><td>${esc(m.p)}</td></tr>`).join("")}
      </tbody></table></div></div>` : ""}
      ${d.lista ? `<div class="bloco"><div class="barra" style="justify-content:space-between"><h3>Lista de referência</h3><button class="btn" id="b-copiar">Copiar lista</button></div><p class="nota">${esc(d.lista.titulo)}</p><pre class="decklist">${esc(d.lista.texto)}</pre></div>` : ""}
      <div class="bloco"><span class="rotulo">Guias originais</span><ul class="lista">${d.fontes.map(f => `<li><a href="${f.url}" target="_blank" rel="noopener">${esc(f.titulo)}</a></li>`).join("")}</ul></div>
    </section>`;
    if (d.lista) {
      $("#b-copiar").addEventListener("click", e => copiar(d.lista.texto, e.target));
      $("#b-analisar").addEventListener("click", () => { store.set("lab-lista", d.lista.texto); location.hash = "laboratorio"; });
    }
    window.scrollTo(0, 0);
  }

  /* ---------------- Matchup ---------------- */
  function vMatchup() {
    const ids = DECKS.map(d => d.id).concat(Object.keys(ARQUETIPOS_EXTRA));
    const opt = ids.map(id => `<option value="${id}">${esc(nomeDeck(id))}</option>`).join("");
    app.innerHTML = `<section class="vista">
      <div class="bloco"><h2>Consulta de matchup</h2><p class="lead">Veja o plano do seu deck contra um oponente e o que o guia do oponente recomenda contra você.</p></div>
      <div class="barra"><label for="mu-a">Meu deck <select id="mu-a">${opt}</select></label><label for="mu-b">Oponente <select id="mu-b">${opt}</select></label></div>
      <div id="mu-res"></div></section>`;
    const a = $("#mu-a"), b = $("#mu-b");
    a.value = store.get("mu-a", "alakazam"); b.value = store.get("mu-b", "dragapult");
    const render = () => {
      store.set("mu-a", a.value); store.set("mu-b", b.value);
      const da = DECKS.find(d => d.id === a.value), db = DECKS.find(d => d.id === b.value);
      const ma = da && da.matchups[b.value], mb = db && db.matchups[a.value];
      const extra = ARQUETIPOS_EXTRA[b.value];
      let h = `<div class="grade-2">`;
      h += `<div class="cartao"><span class="rotulo">Do guia de ${esc(nomeDeck(a.value))}</span>${ma ? `${chipR(ma.r)}<p><strong>Ir:</strong> ${esc(ma.ir)}</p><p>${esc(ma.p)}</p>` : `<p class="nota">O guia deste deck não cobre esse matchup.</p>`}</div>`;
      h += `<div class="cartao"><span class="rotulo">Do guia de ${esc(nomeDeck(b.value))} (lado do oponente)</span>${mb ? `${chipR(mb.r)} <span class="nota">(avaliação do ponto de vista dele)</span><p><strong>Ele vai:</strong> ${esc(mb.ir)}</p><p>${esc(mb.p)}</p>` : `<p class="nota">${extra ? esc(extra.nota) : "Sem dados do lado do oponente."}</p>`}</div>`;
      h += `</div>`;
      if (db) h += `<div class="cartao"><span class="rotulo">O que o oponente quer fazer</span><p>${esc(db.comoFunciona)}</p><p class="nota"><strong>Peças a vigiar:</strong> ${esc(db.pecasChave.map(p => p[0]).join(" · "))}</p></div>`;
      if (!ma && !mb && da) h += `<div class="cartao"><span class="rotulo">Sem guia direto</span><p>Use o <a href="#laboratorio">Laboratório</a> com a lista do seu deck: o motor estima o matchup pelos traços do deck, ou pergunte ao <a href="#coach">Coach IA</a>.</p></div>`;
      $("#mu-res").innerHTML = h;
    };
    a.addEventListener("change", render); b.addEventListener("change", render); render();
  }

  /* ---------------- Laboratório ---------------- */
  let ultimaAnalise = null;
  function vLab() {
    const exemplo = store.get("lab-lista", DECKS.find(d => d.id === "alakazam").lista.texto);
    app.innerHTML = `<section class="vista">
      <div class="bloco"><h2>Laboratório de estratégia</h2><p class="lead">Cole uma lista no formato do Pokémon TCG Live ou Limitless (uma carta por linha: “4 Dreepy TWM 128”). O motor valida o deck, compara com os arquétipos dos guias e monta a estratégia. Com “Buscar cartas no TCGdex” ele lê o texto oficial de cada carta e entende cartas que não aparecem nos guias.</p></div>
      <div class="grade-2">
        <div class="bloco"><label for="lab-txt">Sua lista</label><textarea id="lab-txt" spellcheck="false">${esc(exemplo)}</textarea>
          <div class="barra"><button class="btn pri" id="lab-go">Analisar</button><label style="display:flex;gap:6px;align-items:center;font-weight:400"><input type="checkbox" id="lab-dex" ${store.get("lab-dex", "1") === "1" ? "checked" : ""}> Buscar cartas no TCGdex (online)</label></div>
          <p class="nota" id="lab-status">A lista acima é um exemplo (Alakazam do guia da Project Artemis). Troque pela sua.</p></div>
        <div class="cartao"><span class="rotulo">Criar um deck do zero</span><p class="nota">Gera um esqueleto de 60 cartas com as proporções que os guias usam. Depois ajuste e analise.</p>
          <label for="esq-tipo">Estrutura <select id="esq-tipo">${Object.entries(Engine.ESQUELETOS).map(([k, v]) => `<option value="${k}">${esc(v.nome)}</option>`).join("")}</select></label>
          <label for="esq-b">Pokémon básico da linha <input type="text" id="esq-b" value="Charmander"></label>
          <label for="esq-1">Stage 1 (se houver) <input type="text" id="esq-1" value="Charmeleon"></label>
          <label for="esq-f">Atacante principal <input type="text" id="esq-f" value="Charizard ex"></label>
          <label for="esq-e">Energia básica <input type="text" id="esq-e" value="Fire Energy"></label>
          <div class="barra"><button class="btn" id="esq-go">Gerar esqueleto</button></div><p class="nota" id="esq-desc"></p></div>
      </div>
      <div id="lab-res"></div></section>`;
    $("#lab-go").addEventListener("click", rodar);
    $("#lab-dex").addEventListener("change", e => store.set("lab-dex", e.target.checked ? "1" : "0"));
    $("#esq-go").addEventListener("click", () => {
      const g = Engine.gerarEsqueleto($("#esq-tipo").value, { basico: $("#esq-b").value.trim(), stage1: $("#esq-1").value.trim(), final: $("#esq-f").value.trim(), energia: $("#esq-e").value.trim() || "Grass Energy" });
      $("#lab-txt").value = g.texto; $("#esq-desc").textContent = g.desc + " Esqueleto colocado na caixa da lista — clique em Analisar.";
    });
    if (ultimaAnalise) renderAnalise(ultimaAnalise);
  }

  async function rodar() {
    const txt = $("#lab-txt").value;
    store.set("lab-lista", txt);
    const st = $("#lab-status");
    const deck = Engine.parseList(txt);
    if ($("#lab-dex").checked && window.TCGdex) {
      st.textContent = "Consultando o TCGdex…";
      try {
        await TCGdex.enriquecerDeck(deck, (i, n, nome) => { st.textContent = `TCGdex: ${i}/${n} — ${nome}`; });
        st.textContent = "Cartas consultadas no TCGdex.";
      } catch (e) { st.textContent = "Não consegui acessar o TCGdex agora; a análise usa só a base dos guias."; }
    } else st.textContent = "Análise com a base dos guias (offline).";
    ultimaAnalise = Engine.analisarDeck(deck);
    renderAnalise(ultimaAnalise);
    $("#lab-res").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderAnalise(a) {
    const m = a.m;
    const conta = [["Pokémon", m.pokemon], ["Trainers", m.trainers], ["Energias", m.energias], ["Supporters", m.supporters], ["Busca", m.busca], ["Compra", m.compra], ["Gust", m.gust], ["Aceleração", m.acel], ["Recuperação", m.recuperacao], ["Disrupção", m.disrupcao], ["Proteção", m.protecao], ["Mobilidade", m.mobilidade]];
    let h = `<div class="det">`;
    h += a.val.erros.length ? `<div class="alerta"><strong>Deck ilegal</strong><ul class="lista">${a.val.erros.map(e => `<li>${esc(e)}</li>`).join("")}</ul></div>` : `<div class="ok"><strong>Deck válido:</strong> ${a.val.total} cartas, ${a.val.nAce} ACE SPEC.</div>`;
    if (a.val.avisos.length) h += `<div class="cartao"><span class="rotulo">Avisos</span><ul class="lista">${a.val.avisos.map(e => `<li>${esc(e)}</li>`).join("")}</ul></div>`;
    h += `<div class="cartao"><span class="rotulo">Identidade do deck</span><p>${md(a.identidade)}</p>
      <p class="nota">Arquétipos mais próximos: ${a.arqs.map(x => `${esc(x.deck.nome)} (${Math.round(x.score * 100)}%)`).join(" · ")}</p>
      ${a.arq.score >= 0.5 ? `<p><a href="#deck-${a.arq.deck.id}">Abrir o guia resumido de ${esc(a.arq.deck.nome)}</a></p>` : ""}</div>`;
    h += `<div class="tabela-wrap"><table><thead><tr>${conta.map(c => `<th>${c[0]}</th>`).join("")}</tr></thead><tbody><tr>${conta.map(c => `<td class="mono">${c[1]}</td>`).join("")}</tr></tbody></table></div>`;
    if (a.diff && (a.diff.faltam.length || a.diff.sobram.length)) h += `<div class="cartao"><span class="rotulo">Comparação com a lista de referência</span><p class="nota">${esc(a.diff.titulo)}</p><div class="grade-2"><div><strong>A referência tem a mais</strong><ul class="lista">${a.diff.faltam.map(x => `<li>${esc(x)}</li>`).join("") || "<li>—</li>"}</ul></div><div><strong>Sua lista tem a mais</strong><ul class="lista">${a.diff.sobram.map(x => `<li>${esc(x)}</li>`).join("") || "<li>—</li>"}</ul></div></div></div>`;
    if (a.conselhos.length) h += `<div class="cartao"><span class="rotulo">Ajustes de construção</span><ul class="lista">${a.conselhos.map(([t, x]) => `<li><strong>${esc(t)}:</strong> ${esc(x)}</li>`).join("")}</ul></div>`;
    h += `<div class="bloco"><h3>Plano de jogo gerado</h3><div class="turnos">${[["Turno 1", a.plano.t1], ["Turno 2", a.plano.t2], ["Meio de jogo", a.plano.meio], ["Fechamento", a.plano.final]].map(([t, l]) => `<div class="turno"><span class="rotulo">${t}</span><ul class="lista">${l.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div></div>`;
    h += `<div class="grade-2"><div class="cartao"><span class="rotulo">1º ou 2º</span><p><strong>${esc(a.ordem.escolha)}</strong></p><p class="nota">${esc(a.ordem.motivo)}</p></div>
      <div class="cartao"><span class="rotulo">Prize map</span><ul class="lista">${a.prize.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="cartao"><span class="rotulo">Checar nos prêmios</span><p class="nota">Cartas com 1–2 cópias que mudam seu plano:</p><p>${esc(a.prizeCheck.join(" · ") || "—")}</p></div></div>`;
    h += `<div class="bloco"><h3>Matchups contra o meta</h3><div class="mu-legenda">${[2, 1, 0, -1, -2].map(chipR).join("")}<span>“guia” = avaliação vinda do guia do seu arquétipo; “estimativa” = calculada pelo motor.</span></div>
      <div class="tabela-wrap"><table><thead><tr><th>Oponente</th><th>Avaliação</th><th>Por quê / como jogar</th></tr></thead><tbody>
      ${a.matchups.map(mu => `<tr><td><strong>${esc(mu.nome)}</strong><br><span class="nota">${mu.fonte}</span></td><td>${chipR(mu.r)}</td><td>${mu.plano ? esc(mu.plano) : ""}${mu.motivos.length ? `<div class="nota">${esc(mu.motivos.join("; "))}</div>` : ""}${mu.visaoOponente ? `<div class="nota"><strong>Guia do oponente:</strong> ${esc(mu.visaoOponente)}</div>` : ""}</td></tr>`).join("")}
      </tbody></table></div></div>`;
    if (a.techs.length) h += `<div class="cartao"><span class="rotulo">Techs a considerar</span><ul class="lista">${a.techs.map(t => `<li><strong>${esc(t.tech)}</strong> — ajuda contra ${esc(t.contra.join(", "))}</li>`).join("")}</ul></div>`;
    const comDex = a.deck.cartas.filter(c => c.dex);
    if (comDex.length) h += `<details class="cartao"><summary>Texto oficial das cartas (TCGdex)</summary><div class="grade-2">${comDex.map(c => `<div class="card-linha">${c.dex.imagem ? `<img class="carta-img" loading="lazy" src="${c.dex.imagem}" alt="${esc(c.nome)}">` : ""}<div><strong>${esc(c.dex.nomePT || c.nome)}</strong> <span class="nota">${esc(c.dex.id)}${c.dex.hp ? ` · ${c.dex.hp} HP` : ""}${c.dex.tipos.length ? " · " + esc(c.dex.tipos.join("/")) : ""}${c.dex.regulacao ? " · marca " + esc(c.dex.regulacao) : ""}</span><p class="nota" style="white-space:pre-wrap">${esc(c.dex.texto)}</p></div></div>`).join("")}</div></details>`;
    h += `<div class="cartao"><span class="rotulo">Aprofundar com IA</span><p>Leve esta análise para o Coach IA para receber uma estratégia escrita sob medida.</p><div class="barra"><button class="btn pri" id="lab-coach">Abrir no Coach IA</button></div></div>`;
    h += `</div>`;
    $("#lab-res").innerHTML = h;
    $("#lab-coach").addEventListener("click", () => { location.hash = "coach"; });
  }

  /* ---------------- Coach IA ---------------- */
  function vCoach() {
    const lista = store.get("lab-lista", "");
    app.innerHTML = `<section class="vista">
      <div class="bloco"><h2>Coach com IA</h2><p class="lead">Junta a base de conhecimento dos guias, a análise do Laboratório e a sua pergunta. Você pode copiar o prompt e colar no Claude, ou responder aqui mesmo com a sua chave da API da Anthropic (modelo ${Coach.MODELO}).</p></div>
      <div class="grade-2">
        <div class="bloco"><label for="co-q">Pergunta</label><textarea id="co-q" style="min-height:140px">Crie a estratégia completa para jogar com esta lista e diga quais 3 techs eu deveria testar para o meta atual.</textarea>
          <label for="co-l">Lista considerada (vem do Laboratório)</label><textarea id="co-l" style="min-height:160px">${esc(lista)}</textarea></div>
        <div class="cartao"><span class="rotulo">Como responder</span>
          <div class="barra"><button class="btn" id="co-copy">Copiar prompt completo</button></div>
          <p class="nota">Cole no claude.ai: o prompt já inclui os resumos dos guias, as regras e a análise.</p>
          <label for="co-key">Chave da API (opcional, fica só neste navegador) <input type="password" id="co-key" placeholder="sk-ant-..." value="${esc(Coach.getKey())}"></label>
          <div class="barra"><button class="btn pri" id="co-ask">Perguntar ao Claude</button><button class="btn" id="co-forget">Esquecer chave</button></div>
          <p class="nota" id="co-st"></p></div>
      </div>
      <div id="co-res"></div></section>`;
    const prompt = () => {
      const l = $("#co-l").value.trim();
      let an = null;
      if (l) { an = ultimaAnalise && store.get("lab-lista", "") === l ? ultimaAnalise : Engine.analisar(l); }
      return Coach.montarPromptAnalise(l, an, $("#co-q").value.trim());
    };
    $("#co-copy").addEventListener("click", e => copiar(Coach.SISTEMA + "\n\n" + prompt(), e.target));
    $("#co-forget").addEventListener("click", () => { Coach.setKey(""); $("#co-key").value = ""; $("#co-st").textContent = "Chave removida deste navegador."; });
    $("#co-ask").addEventListener("click", async () => {
      Coach.setKey($("#co-key").value.trim());
      $("#co-st").textContent = "Pensando… (pode levar até um minuto)";
      try {
        const r = await Coach.perguntar(prompt());
        $("#co-st").textContent = "Resposta recebida.";
        $("#co-res").innerHTML = `<div class="resposta">${md(r).replace(/^#{1,4}\s?(.*)$/gm, "<strong>$1</strong>")}</div>`;
      } catch (e) { $("#co-st").textContent = "Não foi possível responder: " + e.message + " Se a página não puder acessar a internet, use “Copiar prompt completo”."; }
    });
  }

  /* ---------------- Conceitos ---------------- */
  function vConceitos() {
    app.innerHTML = `<section class="vista"><div class="bloco"><h2>Conceitos de estratégia</h2><p class="lead">Os princípios que mais se repetem nos 30 guias. São eles que o motor usa para criar estratégias para decks novos.</p></div>
      <div class="grade-2">${CONCEITOS.map(c => `<div class="cartao"><div class="chips">${c.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div><h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p><span class="rotulo">Pergunte-se</span><ul class="lista">${c.perguntas.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}</div></section>`;
  }

  /* ---------------- Regras ---------------- */
  function vRegras() {
    const E = EXPANDED;
    app.innerHTML = `<section class="vista"><div class="bloco"><h2>Regras oficiais (resumo em português)</h2><p class="lead">Resumo do Rulebook (setembro/2026), do Tournament Handbook, da lista de erratas (agosto/2026) e do Alternative Play Handbook. Em caso de dúvida, vale o documento oficial.</p></div>
      <div class="grade-2">${REGRAS.map(r => `<div class="cartao"><h3>${esc(r.titulo)}</h3><ul class="lista">${r.itens.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}</div>
      <div class="bloco"><h2>Formato Expanded</h2><p class="lead">${esc(E.resumo)}</p></div>
      <div class="grade-2"><div class="cartao"><span class="rotulo">Staples</span><ul class="lista">${E.staples.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div class="cartao"><span class="rotulo">ACE SPEC (tier list)</span><p>${esc(E.aceSpecs)}</p><span class="rotulo">Números-chave de dano</span><p class="mono">${esc(E.numeros)}</p></div></div>
      <div class="tabela-wrap"><table><thead><tr><th>Deck do Expanded</th><th>Resumo</th></tr></thead><tbody>${E.decks.map(([n, r]) => `<tr><td><strong>${esc(n)}</strong></td><td>${esc(r)}</td></tr>`).join("")}</tbody></table></div>
      <p class="nota">Onde ver listas: ${esc(E.recursos)} · <a href="${E.fonte}" target="_blank" rel="noopener">Guia original (espanhol)</a></p></section>`;
  }

  /* ---------------- Cartas ---------------- */
  function vCartas() {
    const todas = Object.values(CARDS).sort((a, b) => a.nome.localeCompare(b.nome));
    app.innerHTML = `<section class="vista"><div class="bloco"><h2>Cartas</h2><p class="lead">Cartas citadas nos guias e o papel de cada uma. Clique em “Texto oficial” para buscar a carta no TCGdex (em português quando houver tradução).</p></div>
      <div class="barra"><label for="c-q">Buscar <input type="text" id="c-q" placeholder="nome ou papel (ex.: gust)"></label><button class="btn" id="c-dex">Buscar qualquer carta no TCGdex</button></div>
      <div id="c-dexres"></div>
      <div class="tabela-wrap"><table><thead><tr><th>Carta</th><th>Tipo</th><th>Papéis</th><th>Resumo</th><th></th></tr></thead><tbody id="c-tb"></tbody></table></div></section>`;
    const tipo = c => c.cat === "P" ? `Pokémon${c.est !== undefined ? " · " + ["Básico", "Stage 1", "Stage 2"][c.est] : ""}${c.premios > 1 ? ` · ${c.premios} prêmios` : ""}` : c.cat === "E" ? "Energia" : `Trainer · ${c.sub || ""}`;
    const render = () => {
      const q = Engine.norm($("#c-q").value);
      $("#c-tb").innerHTML = todas.filter(c => !q || Engine.norm(c.nome).includes(q) || (c.papeis || []).some(p => p.includes(q))).map(c => `<tr><td><strong>${esc(c.nome)}</strong>${c.ace ? ' <span class="chip meta">ACE SPEC</span>' : ""}</td><td class="nota">${tipo(c)}</td><td>${(c.papeis || []).map(p => `<span class="chip">${p}</span>`).join(" ")}</td><td>${esc(c.d || "")}</td><td><button class="btn" data-dex="${esc(c.nome)}">Texto oficial</button></td></tr>`).join("");
    };
    $("#c-q").addEventListener("input", render); render();
    const mostrar = async nome => {
      const box = $("#c-dexres");
      box.innerHTML = `<p class="nota">Buscando “${esc(nome)}” no TCGdex…</p>`;
      try {
        const r = await TCGdex.detalharPorNome(nome);
        if (!r) { box.innerHTML = `<p class="nota">Nenhuma carta encontrada com esse nome exato (use o nome em inglês).</p>`; return; }
        const d = r.pt && (r.pt.attacks || r.pt.abilities || r.pt.effect) ? r.pt : r.det;
        box.innerHTML = `<div class="cartao"><div class="card-linha">${r.det.image ? `<img class="carta-img" src="${r.det.image}/low.webp" alt="${esc(nome)}">` : ""}<div><h3>${esc(d.name)} <span class="nota">${esc(r.det.id)}</span></h3><p class="nota">${r.det.hp ? r.det.hp + " HP · " : ""}${esc((r.det.types || []).join("/"))} ${r.det.stage ? "· " + esc(r.det.stage) : ""} ${r.det.regulationMark ? "· marca " + esc(r.det.regulationMark) : ""} · Standard: ${r.det.legal && r.det.legal.standard ? "legal" : "não legal nesta versão"}</p><p style="white-space:pre-wrap">${esc(TCGdex.textoCarta(d))}</p></div></div></div>`;
      } catch (e) { box.innerHTML = `<p class="nota">Não consegui acessar o TCGdex daqui (${esc(e.message)}).</p>`; }
    };
    $("#c-tb").addEventListener("click", e => { const b = e.target.closest("[data-dex]"); if (b) mostrar(b.dataset.dex); });
    $("#c-dex").addEventListener("click", () => { const n = $("#c-q").value.trim(); if (n) mostrar(n); });
  }

  /* ---------------- Roteador ---------------- */
  function rota() {
    const h = (location.hash || "#inicio").slice(1);
    document.querySelectorAll("#abas a").forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + (h.startsWith("deck-") ? "decks" : h) ? "page" : "false"));
    if (h.startsWith("deck-")) return vDeck(h.slice(5));
    ({ inicio: vInicio, decks: vDecks, matchup: vMatchup, laboratorio: vLab, coach: vCoach, conceitos: vConceitos, regras: vRegras, cartas: vCartas }[h] || vInicio)();
  }
  window.addEventListener("hashchange", rota);
  rota();
})();
