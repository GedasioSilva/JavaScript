let numeros = [1, 2, 5, 8, 14];

const calcula_media = (numeros) =>{

let total_numeros = numeros.length;

    let soma_numeros = 0;

    for ( const numero of numeros){
        soma_numeros = soma_numeros + numero;
    }

    
let media_numeros = soma_numeros / total_numeros;


    return media_numeros ;
}

let media = calcula_media(numeros);

console.log("A média dos números é: " + media);



console.log("========================");


let frase = "Estou manipulando strings na linguagem PHP";
nova_frase=frase.replace("PHP","JavaScript");

console.log(nova_frase);



console.log("=========================");


let numeros2 = [1, 2, 5, 8, 14];

const calcula_media2 = (numeros) => {

  let total_numeros = numeros.length;
  let soma_numeros = 0;

    for ( const numero of numeros ){
        soma_numeros = soma_numeros + numero;
    }

    let media = soma_numeros / total_numeros;

    return media;
}

let media2 = calcula_media2(numeros2);

console.log("A média dos números é: " + media);