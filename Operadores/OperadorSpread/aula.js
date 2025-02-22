/* ele é usado pra quebrar elementos exemplo Arreys */
let n1=[10,20,30];
let n2=[10,20,30,40];
let n3 = [...n1,...n2];

console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);

console.log(" ");
/**/

const jogador1={nome:"Gedasio",enegiar:"100",vidas:3,margia:150};
const jogador2={nome:"Bruno",enegiar:"90",vidas:2,velocidade:80};

const jogador3={...jogador1,...jogador2}

console.log(jogador3);

/**/
console.log(" ");

const soma = (v1,v2,v3)=>{
    return v1+v2+v3;
}

let valores = [1,5,4];

console.log(soma(...valores));

console.log(" ");

const notas = [7,8,9];

const resultado =(n1,n2,n3)=>{
    media = n1+n2+n3/3;
    if(media >= 7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado");
    }
}
resultado(...notas);