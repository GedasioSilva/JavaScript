let frase = "Ana é especialista em Python";
frase.replace("Python","JavaScript");
frase.replace("Ana", "Gedasio");

let resultado = frase.substring(4,18);

console.log(resultado);//é especialista
//começa na posição 4 ate a casa 18 

console.log("");

let frase2 = "JavaScript é uma linguagem muito boa";
let nova_frase = frase2.replace("boa","poderosa");
console.log(nova_frase);