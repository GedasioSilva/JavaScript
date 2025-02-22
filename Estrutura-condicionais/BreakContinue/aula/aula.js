let n = 0;
let max = 100;

while(n<max){
    console.log("Cfb cursos: " + n)
   if(n>10){
        break/* pausando o loop */
   }
   n++;
}

console.log("fim do programa");
console.log(" ");

let n1 = 0;
let max1 = 10;
let pares = 0;

for(let i=n1;i <max1;i++){
    if(i%2 != 0){
       continue; /* ele não contou os numeros só colocou os pares */
    }
    pares++;
}

console.log("quantidade de pares: " + pares);
console.log("fim do programa");