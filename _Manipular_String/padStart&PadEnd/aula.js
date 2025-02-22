/*
Em alguns casos pode ser necessário fazer o preenchimento de uma string com um determinado caractere até que essa string atinja um certo tamanho. Isso pode ser feito com métodos nativos da linguagem JavaScript
*/

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, ".") + ": " + valor_aluno);

console.log(label_grau.padStart(20, ".") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo
//Código 1. Código com método padStart()

let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, '.') + email );

// Email:              contato@email.com