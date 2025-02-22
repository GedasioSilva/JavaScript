//Os métodos setters são usados para alterar uma informação do objeto. Ela pode ser referente a data ou a hora.

const dataAtual = new Date();
dataAtual.setFullYear(1995);
//vai alterar a saida que era 2024 pra 1995
console.log(dataAtual);
console.log("---------------");

dataAtual.setMonth(1);
//alerar o mes do segundo pq o mes começa no 0 até o 11
console.log(dataAtual);
console.log("---------------");

dataAtual.setDate(20);
//altera a data pra 20;
console.log(dataAtual);
console.log("---------------");

dataAtual.setHours(11);
console.log( dataAtual );
console.log("---------------");

dataAtual.setMinutes(0);
console.log( dataAtual );
console.log("---------------");

dataAtual.setSeconds(59);
console.log( dataAtual );
console.log("---------------");

dataAtual.setMilliseconds(15);
console.log( dataAtual );
console.log("---------------");

// alterando as os dados do padrão Mundial 
dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);
console.log("---------------");


//O método .setTime() altera uma data através de um timestamp
//alterando os metodos 

const dataAtual2 = new Date("2020-11-09 01:05:09");
console.log(dataAtual2.toDateString());
// Impressão: Mon Nov 09 2020

const dataAtual3 = new Date();
 dataAtual3.setTime(886302309000);
console.log(dataAtual3.toDateString());
// Impressão: Sun Feb 01 1998