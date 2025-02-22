var mochila = [],mochila1 = [],mochila2 = [],pos;

mochila1.push("faca");
mochila1.push("corda");
mochila1.push("perderneira");
mochila1.push("chave");
mochila1.push("Lanterna");

mochila2.push("luvas");
mochila2.push("meias");
mochila2.push("pedra");
mochila2.push("moeda");
mochila2.push("camisa");
mochila2.push("mouse");
mochila1.pop();

mochila = mochila1.concat(mochila2);
console.log("Tamanho da mochila1 é "+ mochila1.length);
console.log(mochila.length);//conta o tamanho do array
console.log(mochila1.length);


console.log(mochila[0]);
console.log(mochila[1]);
console.log(mochila[2]);
console.log(mochila[3]);
console.log(mochila[4]);
console.log(mochila[5]);
console.log(mochila[6]);
console.log(mochila[7]);
console.log(mochila[8]);
console.log(mochila[9]);
console.log(mochila[10]);

