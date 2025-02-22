function aprovado(){
    console.log("aprovado");
}

function reprovado(){
    console.log("reprovado")
}

function resultado(nota){
    if(nota > 7){
        aprovado();
    }else{
        reprovado();
    }
}

resultado(8);

console.log("-------------------");

