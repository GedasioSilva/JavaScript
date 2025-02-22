function* cores(){
    yield 'vermelhor'
    yield 'verde'
    yield 'Azul'
}
const itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

console.log("-----------------------")

function* perguntas(){
    const nome = yield 'qual seu nome?';
    const esporte = yield 'qual seu esporte favorito';
        return 'seu nome é: ' + nome + ' Seu esporte favorito é: ' + esporte;
}

const itp=perguntas()
console.log(itp.next().value);
console.log(itp.next('Gedasio').value);
console.log(itp.next('Futebol').value);