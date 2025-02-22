import calcular from 'readline-sync';

let dias ;
let jurosMax = 0.10;
let jurosMin = 0.05;
let juros;
let valorDivida;
let totalDivida;

valorDivida = calcular.question("Informe o valor Devido: " );
dias = calcular.question("Informe quantos dias se passaram do vencimento: ");

console.log("valor Original da Divida: " + valorDivida);
console.log("Dias em atraso: " + dias);

if(dias > 15){
    juros = Number(valorDivida) * Number(jurosMax);
    
}else if(dias < 15){
    console.log(jurosMin);
}





