//O objeto Date possui métodos que retornam uma string com a data completa diferente dos métodos getters que vimos anteriormente. Eles são chamados de getters de conversão//


//retornando os valores em Strings
const dataAtual = new Date();
console.log(dataAtual.toDateString());
// vai imprimir "dia da semana em ingles "
// mes com 3 letras em inglÊs
//dia do mês em ingles 
//ano com 4 numeros
console.log("--------------------------------------");

console.log(dataAtual.toTimeString());
// vai imprimir apenas as horas
console.log("--------------------------------------");

console.log(dataAtual.toString());
//vai imprimir dia do mes -mes-dia-ano-ninutos- em string
console.log("--------------------------------------");

console.log(dataAtual.toISOString());
//retorna uma string com formato Universal (ISO8601)
console.log("--------------------------------------");

const dataAtual2 = new Date("2024-11-09 18:43:57");
console.log(dataAtual2.toISOString());
//2024-11-09T(21):43:57.000Z
//o valor informado vai ser sempre o o fusuhorario 0 
console.log("--------------------------------------");

console.log(dataAtual.toLocaleString());
//retorna uma string com apenas a data e o tempo
console.log("--------------------------------------");

console.log(dataAtual.toLocaleDateString());
// retorna uma string com a data Apenas
console.log("--------------------------------------");

console.log(dataAtual.toLocaleTimeString());
//retorna uma String com o tempo apenas
