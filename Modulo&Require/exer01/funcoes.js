const verificaParidade = (numeros) => {

    for (let numero of numeros){

        if( numero % 2 == 0 ){
            console.log("O número " + numero + " é par");
        } else {
            console.log("O número " + numero + " é ímpar");
        }

    }

}

console.log(" ");

const valida_senha = (senha) => {
    
    if (senha.length >= 10 ){
        return true;
    } else {
        return false;
    }

}

export  {verificaParidade,valida_senha};