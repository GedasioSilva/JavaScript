//podemos personalizar o retorno dos métodos toLocaleString,toLocaleDateString, toLocaleTimeString através de dois Parâmetros

const dateAtual = new Date();
const options = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
};
console.log(dateAtual.toLocaleDateString('pt-br',options));
//en-us é o idioma de saida pode ser "es" em espanhol "pt-br" Brasil
console.log("--------------------------------");

const options2 = {
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
};
console.log(dateAtual.toLocaleTimeString('en-us',options2));
console.log("--------------------------------");

const options3 = {
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    weekday:'long',
    month:'numeric',
    year:'numeric',
    day:'numeric'
};
console.log(dateAtual.toLocaleString('pt-br',options3));