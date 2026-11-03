/* Coach com IA (opcional).
   Monta um prompt com a base de conhecimento dos guias + a análise do motor e:
   (a) copia o prompt para você colar no Claude (claude.ai), ou
   (b) chama a API da Anthropic direto do navegador com a SUA chave (fica só no seu navegador).
   Página estática sem build: por isso a chamada é um fetch HTTP direto à Messages API. */

(function () {
  const MODELO = "claude-opus-5-5";
  const KEY = "coach-api-key";

  function resumoDeck(d) {
    const mus = Object.entries(d.matchups || {}).map(([id, m]) => `  - vs ${id} (${m.r > 0 ? "+" : ""}${m.r}, ir ${m.ir}): ${m.p}`).join("\n");
    return `### ${d.nome} [${d.status}; ${d.formato}]
Resumo: ${d.resumo}
Como funciona: ${d.comoFunciona}
Plano: T1 ${d.planoDeJogo.turno1} | T2 ${d.planoDeJogo.turno2} | Meio ${d.planoDeJogo.meio} | Final ${d.planoDeJogo.final}
1º/2º: ${d.primeiroOuSegundo}
Dicas: ${(d.dicas || []).join(" / ")}
Erros comuns: ${(d.erros || []).join(" / ")}
Matchups:\n${mus}`;
  }

  function baseConhecimento(idsFoco) {
    const conceitos = window.CONCEITOS.map(c => `- ${c.titulo}: ${c.texto}`).join("\n");
    const regras = window.REGRAS.map(r => `- ${r.titulo}: ${r.itens.join(" ")}`).join("\n");
    const decks = window.DECKS.filter(d => !idsFoco || idsFoco.includes(d.id)).map(resumoDeck).join("\n\n");
    const outros = window.DECKS.filter(d => idsFoco && !idsFoco.includes(d.id)).map(d => `- ${d.nome}: ${d.resumo}`).join("\n");
    return `## Princípios estratégicos (dos guias)\n${conceitos}\n\n## Regras oficiais (resumo)\n${regras}\n\n## Decks em foco\n${decks}\n\n## Outros decks do meta\n${outros}`;
  }

  const SISTEMA = `Você é um coach de Pokémon TCG competitivo que responde SEMPRE em português do Brasil.
Baseie-se na base de conhecimento fornecida (resumos dos 30 primeiros guias gratuitos do Metafy e das regras oficiais de 2026).
Quando inventar uma estratégia nova, explique o raciocínio com os princípios (prize map, prize trade, risk premium, gestão de banco, 1º/2º, disrupção).
Seja concreto: turno 1, turno 2, meio e final de jogo; prize map; matchups; techs. Diga claramente quando algo é uma suposição sua e não vem dos guias.
Use títulos curtos e listas. Não invente texto de cartas: se não tiver certeza do efeito, diga que o jogador deve conferir a carta.`;

  function montarPromptAnalise(textoLista, analise, pergunta) {
    const foco = new Set(Engine.META.filter(id => window.DECKS.some(d => d.id === id)));
    if (analise && analise.arq && analise.arq.score >= 0.3) foco.add(analise.arq.deck.id);
    const kb = baseConhecimento([...foco]);
    const mot = analise ? `## Análise automática do motor
${analise.identidade}
Validação: ${analise.val.erros.concat(analise.val.avisos).join(" | ") || "ok"}
Contagens: busca ${analise.m.busca}, compra ${analise.m.compra}, gust ${analise.m.gust}, aceleração ${analise.m.acel}, recuperação ${analise.m.recuperacao}, disrupção ${analise.m.disrupcao}, proteção ${analise.m.protecao}, energias ${analise.m.energias}.
1º/2º sugerido: ${analise.ordem.escolha}
Matchups estimados: ${analise.matchups.map(m => `${m.nome} ${m.r > 0 ? "+" : ""}${m.r}`).join("; ")}
Techs sugeridas: ${analise.techs.map(t => t.tech).join("; ") || "—"}` : "";
    const cartasDex = analise ? analise.deck.cartas.filter(c => c.dex && c.dex.texto).map(c => `- ${c.nome}${c.dex.hp ? ` (${c.dex.hp} HP, ${c.dex.tipos.join("/")})` : ""}: ${c.dex.texto.replace(/\n/g, " / ")}`).join("\n") : "";
    return `${kb}

${mot}

${cartasDex ? "## Texto oficial das cartas (TCGdex)\n" + cartasDex + "\n" : ""}
## Lista do jogador
${textoLista || "(sem lista)"}

## Pedido
${pergunta || "Crie a estratégia completa para jogar com este deck: identidade, setup T1/T2, como jogar meio e final de jogo, 1º ou 2º, prize maps por matchup contra o meta atual, cartas a checar nos prêmios, erros a evitar e até 5 mudanças/techs na lista (com o que tirar)."}`;
  }

  function getKey() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
  function setKey(k) { try { if (k) localStorage.setItem(KEY, k); else localStorage.removeItem(KEY); } catch (e) { /* sem armazenamento */ } }

  async function perguntar(prompt) {
    const key = getKey();
    if (!key) throw new Error("Informe sua chave da API da Anthropic (fica salva só neste navegador).");
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2026-10-21",
        "anthropic-beta": "server-side-fallback-2026-07-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: MODELO,
        max_tokens: 16000,
        output_config: { effort: "medium" },
        fallbacks: "default",
        system: SISTEMA,
        messages: [{ role: "user", content: prompt }]
      })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((j.error && j.error.message) || `Erro HTTP ${r.status}`);
    if (j.stop_reason === "refusal") throw new Error("O modelo recusou responder a este pedido.");
    const texto = (j.content || []).filter(b => b.type === "text").map(b => b.text).join("\n");
    return texto + (j.stop_reason === "max_tokens" ? "\n\n_(resposta cortada pelo limite de tamanho)_" : "");
  }

  window.Coach = { montarPromptAnalise, perguntar, getKey, setKey, SISTEMA, baseConhecimento, MODELO };
})();
