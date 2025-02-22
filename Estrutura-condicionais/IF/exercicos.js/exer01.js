/* 
var salario = 1499;

if(salario <= 600 ){
 console.log("Estagiario");
} else if (salario > 600 && salario < 1500){
    console.log("Assistente");
} else if(salario > 1500 && salario < 5000){
    console.log("Encarregado");
}
*/  

var fortuna = 1;
var res;

if(fortuna >= 7){
    res = "Rico";
    if(fortuna >= 8){
        res += "Milionario"
    }else{
        res += "+ QUE rico"
    }   
}else if (fortuna >= 4){
    res = "Classe media alta";
}else{
    if(fortuna >= 2){
        res = " consegue  se virar "
    }else{
        res = "precisa de Ajuda";
    }
}

   console.log(res);
   

   var media = 8;
    var r;

    if(media > 6){
        r = "Aprovado";
        if(media >=9){
            r = "Parabéns Nota quase perfeita";
        }else{
            r = " Nota a Cima da media"
        }
    }else if (media >= 6){
        r = "Recuperação";
    } else{
        if( media >= 4){
        r = "Prova Final ";
    }else{
        r = "Reprovado";
         
    }
}

    console.log(r);