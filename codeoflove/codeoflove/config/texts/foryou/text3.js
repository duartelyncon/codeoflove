

const textFY3 = `Então, dito tudo isso, gostaria de te fazer um pedido especial:
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY3
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY3}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY3\}/g, formattedText);
    }
  });
});
