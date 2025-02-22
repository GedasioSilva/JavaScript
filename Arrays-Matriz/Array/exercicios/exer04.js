var notas = [];
notas.push(10);
notas.push(7);

media = (notas[0] + notas[1])/2;

console.log(media);

for(i =0 ; i < notas.length;i++){
    console.log(notas[i]);
}

console.log("==============");

const colecaoNomes = ["Alberto", "Alex", "Sandro", "Roberta"];

for (let indice = 0; indice < colecaoNomes.length; indice++) {
  const nomeMaiusculo = colecaoNomes[indice].toUpperCase() ;
  colecaoNomes[indice] = nomeMaiusculo;
}

console.log(colecaoNomes);