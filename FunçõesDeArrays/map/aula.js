let produtos = new Map([
    ["01","Mouse"],
    ["02","Teclado"],
    ["03","Monitor"],
    ["04","Gabinete"]
]);

produtos.set("05","Memoria"); // adicionando o novo valor 

console.log(produtos.has("02")? "produto Encontrado":"Não encontrado");// verifica se tem a chave 02 

//produtos.clear(); // apagar todo  o map
//produtos.delete("03"); // apagou o elemento da chave 03


function info(chave,valor){ // uma função pra concatenar quando mostra os valores
    console.log("chave " + chave + " valor " + valor)
}

//produtos.forEach(info);
let itk=produtos.keys(); // aqui vai mostra a chave do prduto
let itv=produtos.values(); // aqui mostra o produto

console.log(itk.next().value)
console.log(itv.next().value)

//console.log("tamanho:" + produtos.size); pegando o tamanho do map

//for(P of produtos)
  //  console.log(P);

//console.log(produtos.size);  o tamanho do map no caso 4 elementos
//console.log(produtos.get("04")); // pegando o valor dentro do mep no caso o 04
//console.log(produtos.get("03"));
//console.log(produtos.get("02"));
//console.log(produtos.get("01"));


