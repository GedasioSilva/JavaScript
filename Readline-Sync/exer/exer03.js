import input from 'readline-sync';

let base = input.question('informe a base: ');
let altura = input.question('informe a altura: ');

let area = (Number(base) * Number(altura))/2;

console.log(area);