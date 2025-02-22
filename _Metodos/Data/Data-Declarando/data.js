// Sem parâmetro: Data atual
const hoje= new Date();
console.log(hoje);
console.log("--------------------------------");

// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
console.log(exemplo1);
console.log("--------------------------------");
// uma string que representa uma Data
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );
console.log(exemplo2);
console.log("--------------------------------");

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );
console.log(exemplo3);

