let num = 8;

if(num >= 10){
    console.log("Maior")
}else{
    console.log("menor")
}
console.log(" -------------- ");

function vali(n1,n2,n3){
 const media = (n1+n2+n3)/3;   

 if(media >= 7){
    console.log("aprovado ")
 }else if(media < 7){
    console.log("media não atendida")

    if (media >= 5) {
        console.log("recuperação");
     } else if(media < 3) {
        console.log("Reprovado")
     }
        
 }
 
 console.log(media);
}
vali(3,3,2);