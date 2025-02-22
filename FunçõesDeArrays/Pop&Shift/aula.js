// Shift remove o primeiro elemento e  pop remove o último

const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta"
];

diasSemana.pop();//remove a sexta feira
diasSemana.shift();//remove o primeiro Domingo

for(i=0;i<diasSemana.length;i++){
    console.log(diasSemana[i]); 
}