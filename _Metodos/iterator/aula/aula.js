let num = [5,4,3,2,1];
for(n of num){ // posso mostrar os valores do array
    console.log(n);
}
console.log("");

let it=num[Symbol.iterator]();
let v=it.next().value;
let tam = num.length;
console.log(tam); // o tamanho da variavel
//console.log(v); // a variavel v recebe o valor da primeira casa no caso o 5
//console.log(it.next().value); //mostrando o conteudo da variavel num
//console.log(it.next().value);
//console.log(it.next().value);
//console.log(it.next().value);
//console.log(it.next().value);

