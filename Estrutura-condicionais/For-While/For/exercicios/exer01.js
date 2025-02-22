var nota1 = 10;
var nota2 = 5;

while(nota2 < nota1){
    nota2++;
    console.log(nota2);
}

console.log("--------------------");

const produtos = [ 'Samsung x40', 'iPhone X', 'HD SSD'];

for (const index in produtos) {
    console.log(index, produtos[index]);
  }