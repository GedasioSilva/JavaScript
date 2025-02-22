//import somaNumeros from './funcoes.js'; importando uma função
import {somaNumeros,subtracaoNumeros} from './funcoes.js';//mais de uma funcao
let numero_1 = 10;
let numero_2 = 5;

let soma  = somaNumeros(numero_1,numero_2);
console.log("a Soma dos Números é: " + soma);

console.log("=================================================================");

let subtracao = subtracaoNumeros(numero_1,numero_2);
console.log("A subtração de: " + numero_1 + " - " + numero_2 + " Da: " + subtracao);