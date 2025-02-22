var nota = 20;
var res ;

if (nota >= 60){
    res ="aprovado";
     if(nota >= 90){
        res += " com louvor"
    }else{
        res += " com nota normal"
    }
}else if (nota >= 40){
    res = "recuperação"
}else{
    res = "reprovado"
    if(nota >= 20){
        res += " por nota baixa"
    }else{
        res += "  com Louvor"
    }
}

console.log(res);