const textFY1 = `Cada linha que escrevi aqui carrega uma parte de mim.

Talvez eu não seja a melhor pessoa do mundo pra me expressar e acho que você sabe bem disso kkk mas dentro de mim existe quase um mundo inteiro de sentimentos que eu só consigo organizar quando penso em você.

Pensei em fazer esse site a um bom tempo mas não tinha o conhecimento necessário, agora deu pra ver que progredi um pouco né kkkk, desde que comecei a me empenhar pra escrever cartas por saber o quanto você ficava feliz em receber elas eu achei que seria legal em algum momento fazer algo diferente, eu era seu nerdzinho 🤓 então achei que você ficaria feliz em receber algo assim também.

Tudo aqui foi pensado com carinho, cuidado e principalmente verdade. Não quero escrever só um texto, quero que sinta um pedaço do meu coração em cada palavra que você ler. Então, por favor, lê devagar e com atenção em cada palavra.

Você é muito especial pra mim e sabe disso e esse é meu jeito de esperar em Deus mas também te mostrar que não deixo de pensar em você em nenhum momento.
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY1
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY1}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY1\}/g, formattedText);
    }
  });
});
