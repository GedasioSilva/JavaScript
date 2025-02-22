//Após inserido um elemento pode ser removido utilizando a função nativa splice. No Flow abaixo aprenderemos como ela é utilizada.

const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta"
];


for(i=0;i<diasSemana.length;i++){
    console.log(diasSemana[i]); 
}

diasSemana.splice(i,1);//primeiro parametro a casa segundo a quantidade de elementos pagados