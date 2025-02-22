// função geradora vai denvolvendo os pararemotros a cada chama usando o next
// a funcao executa uma parte depois paro ela posso fazer outra coisa e depois continuar
/* 
function * cores(){
    yield 'Vermelhor';
    yield 'Azul';
    yield 'Amarelo';
    yield 'Preto';
}


for(let c of cores()){
    console.log(c);
}



const c=cores()
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
*/

function * cont(n){
    let c=0;
    while(c < n){
       yield console.log(c)
        c++;
    }
}

const ct = cont(10)
console.log(ct.next()); // cada linha de comando e uma chamada nas linhas da função
console.log(ct.next());
console.log(ct.next());

console.log("<hr>");

