const hoje = new Date();
console.log();
const diferencaHoras =hoje.getUTCMinutes() / 60 ;

console.log('Diferença de horário: ' + diferencaHoras + ' horas');

console.log("------------------------");

const hoje1 = new Date();
const vencimento = new Date('2020-07-02');

let mensagem = "";

if(hoje1.getTime() > vencimento.getTime()){
    mensagem = "Esta conta já venceu.";
} else {
    mensagem = "Ufa, ainda não venceu.";
}

console.log(mensagem);