var mochila = [];

mochila.push("Faca");
mochila.push("Corda");
mochila.push("armar");
mochila.push("Perdeneira");
mochila.unshift("Chave");
// Unshift insere no começo do array 
// pop a pagar a ultima dado do array
// shift apagar o primeiro


mochila.pop();
mochila.shift();

mochila.splice(1,1);

console.log(mochila[0]);
console.log(mochila[1]);
console.log(mochila[2]);
console.log(mochila[3]);
console.log(mochila[4]);


