import {verificaParidade,valida_senha} from './funcoes.js';

const numeros = [1, 3, 5, 6, 8, 10, 17];

verificaParidade(numeros);

console.log(" ");

let senha = "minhasenha";

if(valida_senha(senha) == true){
    console.log("A senha possui no mínimo 10 caracteres");
} else {
    console.log("A senha não possui o mínimo 10 caracteres");
}