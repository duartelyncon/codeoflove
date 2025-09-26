// ⚠️ Modifique apenas as variáveis!

var textDeclaration1 = `Para a mulher da minha vida...💖 `;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration1\}/g, textDeclaration1);
  });
});