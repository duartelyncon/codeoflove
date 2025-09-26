// ⚠️ Modifique apenas as variáveis!

var textCarouselButton = ` Nossos momentos `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textCarouselButton\}/g, textCarouselButton);
  });
});
