// ⚠️ Modifique apenas as variáveis!

var textTempo1 = `Cada segundo desde o dia que eu soube que era você! `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textTempo1\}/g, textTempo1);
  });
});