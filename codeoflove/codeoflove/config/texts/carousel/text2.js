// ⚠️ Modifique apenas as variáveis!

var textCarousel2 = `Preparei tudo isso com todo meu coração... Se clicar no botão vai poder ver alguns dos momentos que vivemos juntos. Cada foto ai carrega um pouco do amor que sinto, e mesmo assim, ainda é pouco perto do quanto ainda sinto por você. Você é a melhor parte da minha história... E se tudo isso aqui for uma forma de te lembrar disso, então valeu cada segundo. 💘`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textCarousel2\}/g, textCarousel2);
  });
});
