// ⚠️ Modifique apenas as variáveis!

var textTempo2 = `Desde o dia 20/11/2021 nosso primeiro beijo... `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textTempo2\}/g, textTempo2);
  });
});
