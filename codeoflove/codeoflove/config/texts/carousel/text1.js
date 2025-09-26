// ⚠️ Modifique apenas as variáveis!

var textCarousel1 = `Eii `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textCarousel1\}/g, textCarousel1);
  });
});