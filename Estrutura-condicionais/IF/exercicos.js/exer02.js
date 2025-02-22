colaborador = 1;
encarregado = 2;
gerente = 3;
cargo = 4;

if(cargo == 1){
    console.log("Operador");
}else if( cargo == 2){
    console.log("encarregado");
}else if(cargo == 3){
    console.log("Gerente");
}else{
    console.log("Não Trabalha na Empresa!!...");
}

console.log("");

var fatura = 300;
var salario = 500;
sobra = 0;

if(fatura < salario){
    sobra = (salario - fatura);
    console.log(sobra);
}else{
    console.log("Sua Fatura é maior");
}