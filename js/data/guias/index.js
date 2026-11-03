/* Registro dos guias completos. Cada arquivo gNN.js chama GUIA("gNN", {...}).
   - "lista" ({titulo, fonte, texto} no formato TCG Live) vira automaticamente o
     capítulo "Lista de exemplo" do guia.
   - Se o guia trouxer "novoDeck" e o deck ainda não existir em window.DECKS,
     a página do deck é criada a partir dos dados do guia. */
window.GUIAS = {};
window.GUIA = function (id, g) {
  g.id = id;
  window.GUIAS[id] = g;
  if (g.lista && g.lista.texto) {
    const secs = [], nomes = [];
    let atual = null;
    for (const l of g.lista.texto.split("\n")) {
      const h = l.match(/^(Pokémon|Trainer|Energy):\s*(\d+)/);
      if (h) { atual = { t: { "Pokémon": "Pokémon", Trainer: "Treinadores", Energy: "Energias" }[h[1]], n: h[2], c: [] }; secs.push(atual); continue; }
      const m = l.match(/^(\d+)\s+(.+)$/);
      if (m && atual) { atual.c.push(m[1] + " " + m[2]); nomes.push(m[2]); }
    }
    const pars = [g.lista.fonte || "Lista do guia. Contagens do momento do vídeo/guia, não necessariamente de um deck premiado."]
      .concat(secs.map(s => `**${s.t} (${s.n}):** ${s.c.join(", ")}.`));
    const pok = (secs[0] ? secs[0].c : []).slice(0, 10).map(x => x.replace(/^\d+\s+/, ""));
    if (pok.length) pars.push("@cartas Os Pokémon da lista | " + pok.join(", "));
    g.caps.push([g.lista.titulo || "Lista de exemplo", pars, nomes.filter(n => !/Energy$/.test(n) || /Energy\b.*\w/.test(n)).slice(0, 14)]);
  }
  // deck já existente sem lista: usa a lista do guia na aba "Mesa"
  const existente = window.DECKS && window.DECKS.find(d => d.id === g.deck);
  if (existente && !existente.lista && g.lista && g.lista.texto) existente.lista = { titulo: g.lista.titulo || "Lista do guia", texto: g.lista.texto };
  const n = g.novoDeck;
  if (n && window.DECKS && !window.DECKS.some(d => d.id === g.deck)) {
    if (window.ARQUETIPOS_EXTRA) delete window.ARQUETIPOS_EXTRA[g.deck];
    const lista = n.lista || (g.lista && g.lista.texto ? { titulo: g.lista.titulo || "Lista do guia", texto: g.lista.texto } : null);
    window.DECKS.push({
      id: g.deck, nome: n.nome, apelidos: n.apelidos || [], estilo: n.estilo || "", formato: "Standard (meta japonês, " + (g.fonte || "Pokemite") + ")",
      status: n.status || "rogue", dificuldade: n.dificuldade || 3, resumo: n.resumo, comoFunciona: n.comoFunciona || n.resumo,
      pecasChave: n.pecasChave || [], lista,
      variantes: n.variantes || [], planoDeJogo: Object.assign({ turno1: "—", turno2: "—", meio: "—", final: "—" }, n.plano || {}),
      primeiroOuSegundo: n.ir || "Veja o guia.", dicas: n.dicas || [], erros: n.erros || [], prizeMaps: n.prizeMaps || [],
      matchups: n.matchups || {}, fontes: [{ titulo: (g.fonte || "Pokemite") + " — guia do deck (japonês)", url: g.url }], assinatura: n.assinatura || []
    });
  }
};
