/* Registro dos guias completos (um arquivo por guia em js/data/guias/gNN.js). */
window.GUIAS = window.GUIAS || {};
window.GUIA = function (id, g) { g.id = id; window.GUIAS[id] = g; };
