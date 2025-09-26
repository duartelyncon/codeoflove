// ⚠️ Modifique apenas as variáveis!

var textHome2 = `Eu nunca imaginei que encontraria alguém que me fizesse sentir tudo o que sinto por você, Keller. Sei que é amor porque, nos momentos bons, é em você que penso, e nos difíceis, também é você quem vem à minha mente. Os melhores momentos da minha vida foram ao seu lado, e espero em algum momento poder sentir tudo isso mais uma vez.`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textHome2\}/g, textHome2);
  });
});
