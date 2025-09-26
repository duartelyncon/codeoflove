

const textFY2 = `Você me amou quando não tinha obrigação nenhuma disso. Foi com você que eu aprendi o que era amar alguém e o quanto esse amor pode mudar uma pessoa. Com você eu vivi os momentos mais felizes e sinceros da minha vida, porque você sempre foi o meu porto seguro. Eu não achava que alguém pudesse me amar de verdade… até que você chegou, com esse sorriso lindo e esse jeitinho que sempre me cativava. Todos os dias em que eu deitava do seu lado e ficava olhando você dormir, eu sabia que era você e que você é a mulher da minha vida.

Eu sei o quanto te fiz sofrer por não saber agir como o homem que você merecia, por não ter maturidade pra me expressar em diversas situações. E, mesmo que você diga que tenha me perdoado, eu sei o quanto errei com você. Sei o quanto o nosso relacionamento foi difícil e o quanto foi difícil me amar em vários momentos. Mas, apesar de tudo isso, quando penso em nós, lembro também das partes boas: de quando eu saía do trabalho animado só porque sabia que ia te ver, de quando estava estudando e abria uma página e encontrava algo seu escrito pra me dar força e coragem, de quando eu comprava um docinho já pensando no seu sorriso, do nosso primeiro beijo no dia da consiência negra (kkk) ou até mesmo dos nossos planos pro futuro. Meus olhos se enchem de lágrimas toda vez que lembro que íamos ter uma menininha chamada Helena…

A parte mais linda da minha vida foi você, Keller. E eu espero que, pelo menos um pouco, quando lembrar de nós, também venham esses momentos na sua mente.

Eu não falo tudo isso para que você volte de uma vez. Quero poder, nem que seja aos poucos, te mostrar que, por amor, me tornei a pessoa que você esperava. Por amor, aprendi com meus erros e busquei tudo aquilo que um dia você sonhou em mim.

Eu continuo orando por nós, porque eu acredito de verdade que é você. Sempre que acho que minha fé vai acabar, Deus restaura ela de alguma forma. Peço todos os dias pra que minhas orações te alcancem e toquem o seu coração, pra que eu possa te mostrar que cresci, que aprendi com tudo o que vivi lá atrás, e que hoje posso dizer que foi o amor que sinto por você que me transformou.

Eu peço a Deus que me dê mais uma oportunidade de estar com você e poder te amar da maneira certa. Não pra voltar a ser como era antes, mas pra ser melhor, com a presença de Deus e de forma leve, porque eu sei que quando estávamos bem era exatamente assim que nos sentíamos um pelo outro.

Eu te amo, Keller. E quero que você entenda que, enquanto existir uma faísca de amor por mim em você, eu vou continuar orando e pedindo pra Deus nos colocar de novo no caminho um do outro.

Só te peço uma coisa: se em algum momento sentir que algo te tocou depois de tanto tempo, pede pra Deus amolecer um pouco o seu coração de alguma forma (kkk).

Desde que essa palavra apareceu pra mim, em um momento em que eu já não sabia mais o que fazer e minha fé de que você poderia voltar estava indo embora, ela nunca mais saiu da minha cabeça:

Filemon 1:15

Eu não desisti de você, Keller e vou lutar o quanto eu puder pra que em algum momento estejamos juntos... Nem que eu precise te reconquistar um pouquinho todos os dias.

Te amo, Princesa!
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY2
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY2}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY2\}/g, formattedText);
    }
  });
});
