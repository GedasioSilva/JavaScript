
var prod1 = 7.5;
var prod2 = 7.8;
var prod3 = 7.9;

var soma = (prod1+prod2+prod3);

console.log("soma dos valores:"+ Math.ceil(soma));

console.log("------------------------------");

var notas=Array(7.3,6.8,3.7,4.6);

for(i=0;i<notas.length;i++){
    console.log(Math.floor(notas[i]));
}

console.log("------------------------------");

pro1 = 10.37;
pro2 = 10.32;
pro3 = 10.25;

comprar = (pro1+pro2+pro3);


console.log(Math.round(comprar));

if(comprar > 60.00){
    console.log("O Valor vai ser aredondado pra baixo " + Math.floor(comprar));
}