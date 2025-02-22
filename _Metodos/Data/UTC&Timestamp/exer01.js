var datahj = new Date();
var dataPostagem = new Date('2024-02-03T00:00');

var timeAtual = datahj.getTime();
var timePostagem = dataPostagem.getTime();

var diferenca = timeAtual - timePostagem;

var segundos = diferenca / 1000;
console.log(Math.round(segundos));

var minutos = segundos / 60;
console.log(Math.round(minutos));


var horas = minutos / 60;
console.log(Math.round(horas));

if(horas > 24){
    console("Mais de um dia que foi postado");
}else{
    console.log("menos de um dia");
}

/*
console.log(data.toLocaleString()); // data e hora local
console.log(data.toTimeString());//horario de brasilia
console.log(data.toUTCString());//data em horario universal
console.log(data.valueOf());// imprimindo timeStamp
*/