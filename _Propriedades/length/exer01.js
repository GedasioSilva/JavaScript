
let cores = "verde azul branco amarelo preto";

let array_cores = cores.split(" ");

for ( const cor in array_cores ){

    if( array_cores[cor].length > 5 ){
        console.log(" A cor " + array_cores[cor] + " tem mais que 5 caracteres" );
    } else {
        console.log(" A cor " + array_cores[cor] + " não tem mais que 5 caracteres" );
    }

}
