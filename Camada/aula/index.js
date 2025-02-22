import {validaPeso, validaAltura} from './pesoAlturaValidacao.js'; // chamando os arquivos
import {calculaIMC, retornaStatusIMC} from './calculadoraIMC.js';// chamando os arquivos

let peso = 78;
let altura = 1.72;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if(verificaPesoValido && verificaAlturaValida){
    let resultado = calculaIMC(peso, altura);
    let statusIMC = retornaStatusIMC(resultado);

    console.log("Seu IMC é "+resultado+" e você está "+statusIMC);
}
else{
    console.log("Peso e altura devem ser maiores que zero");
}