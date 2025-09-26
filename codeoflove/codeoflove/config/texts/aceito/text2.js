// ⚠️ Modifique apenas as variáveis!

var textAceito2 = `Se você chegou aqui é pq apertou no SIM e como você sempre dizia "EBAAAAAAAAA". Você ainda tem o meu número então me manda um print dessa tela pra eu ver que você foi até aqui e que aceitou o pedido. Sinto saudade de poder cultuar com você. (o botão do "NÃO" ta meio esquisito né? 👀 kkk)`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textAceito2\}/g, textAceito2);
  });
});