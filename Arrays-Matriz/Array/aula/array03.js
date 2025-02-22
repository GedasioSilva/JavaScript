var mochila = [],pos,numeros;
var num = [3,2,4,5,6];

//mochila.push("Faca");
//mochila.push("corda");

num.sort();
num.reverse();
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

numeros = num.join();
console.log(numeros);

pos = console.log(mochila.indexOf("armar"));

if(pos < 0){
    console.log(" Não estar na mochila");
} else{
    console.log("Estar na mochila");
}
 
