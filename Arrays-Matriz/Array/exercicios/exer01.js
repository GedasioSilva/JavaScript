var carros = [];
var c = [];

var cont =[nome = "gedasio",idade = "25"];
carros.push("Palio");
carros.push("Gol");
carros.push("Mercedes");
carros.unshift("classic");
carros.push("Palio");

//carros.shift();
console.log(carros[0]);

carros.pop("1");
carros.slice(0,1);

console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);

console.log(cont[0]);
console.log(cont[1]);


c == carros[1];
c = console.log(carros.indexOf("Palio"));
console.log(c[0]);

if (c < 0){
    console.log("Esta na Mochila")
}else{
    console.log(" Não Estar");
}