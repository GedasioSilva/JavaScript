
let atividades = [
    ['Trabalho',9],
    ['Como',1],
    ['commute',2],
    ['play Game',1],
    ['sleep',7]
];
atividades.push(['Estudo','6']);

console.table(atividades); // clausula table Cliar uma tabela com os elemtnetos
console.log(atividades[4][1]); // adiciona elementos no finla

atividades.forEach(atividade =>{
    let Porcentagem = ((atividade[1]/24) * 100).toFixed();
    atividade[2] = Porcentagem + '%';
});
console.table(atividades);

for(let i =0 ; i <atividades.length;i++){
    var innerArraylength = atividades[i].length;
    for(let j = 0 ; j < innerArraylength;j++){
        console.log('['+ i +','+ j + '] = ' + atividades[i][j]);
    }
}