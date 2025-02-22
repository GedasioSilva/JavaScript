const verifica_paridade = (numero) => {

    if( numero % 2 == 0 ){
        console.log("O número " + numero + " é par")
    } else {
        console.log("O número " + numero + " é ímpar")
    }

}

verifica_paridade(7);

console.log("===============================");


const remove_espacos = (texto)=> {
    return  texto . trim ( ) ;

}

let mensagem = "  Estou aprendendo JavaScript        ";

let resultado = remove_espacos(mensagem);

console.log(resultado);

