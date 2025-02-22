var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
console.log("----------------");

var st = "Para maiores informações, veja o Capítulo 3.4.5.1";
var re = /(Capítulo \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);

console.log("----------");

var texto = "cfb" + "Cursos";
var res = texto.trim();
console.log(res);

console.log("----------------------");

let s = "price : $5-$10";
let result = s.match(/\$\d+/g);
console.log(result);

console.log("----------------------");

let strr = "I Like yellow Color Palette!";
let ree = /(?<Color>yellow) Color/;
let resul = strr.match(ree);

console.log(resul);