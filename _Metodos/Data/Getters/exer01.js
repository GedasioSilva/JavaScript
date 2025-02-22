const dataUltimoAcesso = new Date('2020/11/11 17:00:00');
const dataAtual= new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if(hora < 6 || hora >= 18){
    msg = 'boa noite\n';
}else if(hora>=6 && hora <12){
    msg ='Bom dia\n';
}else{
    msg='Boa Tarde\n';
}

if(diferencaTime > milissegundosDia){
    msg += "Você esta Ausente Há dias !!!";
}else if(diferencaTime > milissegundosHora){
    msg += "você esta ausente a Horas!!";
}else{
    msg += "Que bom que Ainda esta Aqui";
}
console.log(msg);

