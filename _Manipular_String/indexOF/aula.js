//Procurar uma substring dentro de uma string é uma tarefa comum na rotina do desenvolvedor. E para isso há um recurso nativo que faz esse trabalho

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";

let posicao = frase.indexOf("sonho");
//procurar onde começa a palavra "sonho" dentro da variavel frase.
console.log(posicao); // 14

console.log("------------------");

let frase2 = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao2 = frase2.indexOf("esperança");

console.log(posicao2); // -1
// se o resultado for menos 1 pq a palavra não foi encontrada
