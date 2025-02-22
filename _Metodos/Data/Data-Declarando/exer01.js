var data = new Date();
var novaData = new Date();
novaData.setDate(data.getDate() + 2);


var dia = data.getDate();
var mes = (data.getMonth() + 1);
var ano = data.getFullYear();
var diaS = data.getDay();
var horas = data.getHours();
var minutos = data.getMinutes();

switch(diaS){
    case 0:
        console.log("Domingo")
        break; 
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sábado")
        break;   
    default:
        console.log("Data Informada Invalida");
        break;
}

if(ano === 2024){
    console.log("Ano é 2024");
}else{
    console.log("Ano é menor que 2024");
}