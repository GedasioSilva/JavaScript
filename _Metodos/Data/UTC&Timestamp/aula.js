const data = new Date();

// Imprimindo uma string com a data e a hora local
console.log(data.toLocaleString());

// Imprimindo uma string com a data armazenada horario de Brasilia padrao
console.log(data.toTimeString());

// Imprimindo uma string com a data universal (UTC)
console.log(data.toUTCString());


// Imprimindo timestamp
console.log(data.valueOf());
const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

const diferenca = timeAtual - timePostagem;
console.log(diferenca);

// Convertendo em horas
const segundos = diferenca / 1000;
console.log(segundos);

const minutos = segundos / 60;
console.log(minutos);

const horas = minutos / 60;
console.log(horas);

// Exibindo a diferença
console.log(horas);