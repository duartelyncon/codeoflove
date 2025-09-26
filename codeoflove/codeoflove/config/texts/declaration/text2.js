// ⚠️ Modifique apenas as variáveis!

var textDeclaration2 = `Nunca fui o namorado perfeito, mas sempre quis ser alguém melhor por você. Até hoje me esforço a cada dia, mesmo sem ter você por perto, porque acredito que, se for da vontade de Deus, vou ter a chance de mostrar o quanto o amor pode mudar uma pessoa. Tudo o que mais quero é poder estar ao seu lado mais uma vez...`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(
      /\$\{textDeclaration2\}/g,
      textDeclaration2
    );
  });
});
