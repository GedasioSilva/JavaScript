//server pra passar dados pelo console
// importe depois que criar os arquivos
// entradaDados o apleidio
// from a origem 
// redline-sync o nome do metodo

import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, " + nome);
