//filler faz um validação dos elementos do outro array


let num=[5,2,8,15,30,4,25,18,9]
let novo=num.filter((el)=>{// o nome da função
    return el >= 10; // vai passar por array novo os elementos de num que forem maior que 10; 
})

//console.log(num);
//console.log(novo);


let dados=[
{id:15},
{id:0},
{id:-10},
{id:null},
{id:NaN},
{id:'underfined'},
{id:8},
{},
{id:2},
]   

let validos = dados.filter((el)=>{
if(typeof(el.id) =='number' && !isNaN(el.id) && (el.id >= 0) ){
    return true;
}else{
    return false;
}
})

console.log(dados);
console.log(validos);