// for of vai percorer todo o vertor já o in percorrer o objeto
let nota=[100,80,75,30,60,80,85,96,72];
let aprovados = 0;
let reprovados = 0;

    for(var n of nota){
        n > 80?aprovados++:reprovados++; // se tiver valor maior que 80 aprovados recebe +1 se valor menor que 80 reprovados +1
    }

    console.log(aprovados);
    console.log(reprovados);
