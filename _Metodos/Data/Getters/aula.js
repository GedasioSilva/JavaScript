// 2020-11-09T18:43:57.961Z
const dataAtual = new Date();

//os meses começa do 0 ate o 11
// Vai imprimir o mês atual
console.log( 'getMonth', dataAtual.getMonth());

// Vai imprimir o mês atual mais 1
console.log( 'getMonth', dataAtual.getMonth() + 1);
console.log("-------------------------");

console.log("Ano Completo: " + dataAtual.getFullYear() );
console.log("MÊs: " + dataAtual.getMonth() );
console.log( "Dia Mês" + dataAtual.getDate() );
console.log("Hora: " +  dataAtual.getHours() );
console.log("Minutos: " + dataAtual.getMinutes() );
console.log("Segundos: " + dataAtual.getSeconds() );
console.log("Milisegundos: " + dataAtual.getMilliseconds() );
console.log("Dia da Semana: " + dataAtual.getDay() );

console.log("-------------------------");
//Para cada método acima existe um similar para retornar os valores em UTC "Pegando os dados de forma universal: ". Veja esses métodos//

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );

console.log("-------------------------");
console.log(dataAtual.getTime() );
//representa quantos milissegundos se passaram de de 1970 ate hoje;
console.log( dataAtual.getTimezoneOffset() );
//representa a diferença de horario do computado com o global 
console.log( dataAtual.valueOf() );
//o valor primitivo do objeto Date é um timestamp