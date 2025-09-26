const textFYTitle = `Antes de tudo deixe seu coração aberto kkk... Vamos lá!`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFYTitle
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach((el) => {
    if (el.innerHTML.includes("${textFYTitle}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFYTitle\}/g, formattedText);
    }
  });
});
