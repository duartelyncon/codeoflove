const textMoments = `
Preparei tudo isso com todo meu coração... Se clicar no botão vai poder ver alguns dos momentos que vivemos juntos. Cada foto ai carrega um pouco do amor que sinto, e mesmo assim, ainda é pouco perto do quanto ainda sinto por você. Você é a melhor parte da minha história...
E se tudo isso aqui for uma forma de te lembrar disso, então valeu cada segundo.`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textMoments
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach((el) => {
    if (el.innerHTML.includes("${textMoments}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textMoments\}/g, formattedText);
    }
  });
});
