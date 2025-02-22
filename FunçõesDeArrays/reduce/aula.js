// metodo da class Array (map , fillter e reduce)
// seria o resumo do array 
let num =[0,1,2,3,4,5];
let soma=num.reduce((n1,n2)=>{
   console.log(n1 + '+' + n2) 
   return n1 + n2;
   console.log('---------');
})
console.log(soma);
let pessoas =[ // array objeto literal onde vamos pegar só os nomes 
    {nome:'bruno',idade:40},
    {nome:'Gedasio',idade:26},
    {nome:'Camila',idade:30},
    {nome:'Diana',idade:0.8}
]
let nomes = pessoas.reduce((p1,p2)=>{ // pegandos os nomes do array pessoas
    p1.push(p2.nome);
    return p1;
},[])
console.log(nomes);
console.log("-----------------------------");

let valores = [
    {valor:800,moto:'motor'},
    {valor:600,celular:'Novo'},
    {valor:300,casa:'aluguel'},
]

let divida = valores.reduce((v1,v2)=>{
    v1.push(v2.valor);
    return v1;
},[])
console.log(divida);