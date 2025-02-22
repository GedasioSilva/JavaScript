//Em algum momento pode ser necessário trocar uma substring de um texto por outra trocar uma parte da string por outra


let texto = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";

let resultado = texto.replace("JavaScript", "JS");

console.log(resultado); // Gabriel adora JS! Ele faz exercícios de JavaScript todos os dias para aprender mais.


let texto2 = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";

let resultado2 = texto2.replace("Rio de Janeiro", "RJ");

console.log(resultado2);

// O RJ é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!

console.log("----------------------");

let frase = "Aprender JavaScript é gratificante! A linguagem JavaScript é bastante requisitada no mercado de trabalho";

frase.replace("JavaScript","JS");
console.log(frase);

console.log("<hr>");

let frase3 = "A vida é bela!";

let nova_frase = frase3.replace("bela","linda");

let string = nova_frase.substring(7, 14);

console.log(string);