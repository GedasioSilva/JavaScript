let tecnologia = "JavaScript";
let anoAtual = 2021;
console.log(tecnologia);

//let uma variavel local

console.log("------");

//Para descobrir o tipo de uma variável sem ser pelo seu valor, basta utilizar 'typeof' antes do nome da variável para imprimir no terminal.

var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'


console.log("------");

//variaveis com tipos de dados diferentes
var titulo = "Programador";
var quantidadeDeVagas = 5;
var vagaAtiva = true;

console.log("------");

var nome;
console.log(nome); //vai imprimir undefined variavel sem valor 

console.log("------");

var idade;
console.log( idade + 1 );
//NaN é o resultado de uma operação matemática que falhou

console.log("------");

//É possível iniciar uma variável com null, o que significa que queremos adiar intencionalmente ou não atribuir um valor a ela
var nome2 = null;
console.log(nome2);
console.log("------");

const url = "https://www.devmedia.com.br/";
//const pro valor da variavel nunca mudar

console.log(true + true);// true tem o valor de 1 a saida vai ser 2
console.log(null + null);// não definida intao o valor é nada. nada + nada = 0
