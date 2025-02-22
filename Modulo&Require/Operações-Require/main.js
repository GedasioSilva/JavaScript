//import somaNumeros from './funcoes.js'; importando uma função

const dados = require ('./funcoes.js');//mais de uma funcao
let numero_1 = 10;
let numero_2 = 5;

let soma  = somaNumeros(numero_1,numero_2);
console.log("a Soma dos Números é: " + soma);

module.exports = {
    somaNumeros
}

console.log("=================================================================");

let subtracao = subtracaoNumeros(numero_1,numero_2);
console.log("A subtração de: " + numero_1 + " - " + numero_2 + " Da: " + subtracao);

module.exports = {
    somaNumeros
}