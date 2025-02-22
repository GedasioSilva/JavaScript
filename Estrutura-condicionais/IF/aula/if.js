var nota = 95;
var res;


if (nota > 90){
    res = "Aprovado com louvor"

} else if (nota >= 60){
   res = "Aprovado";
} else if (nota >= 50 && nota < 60){
    res = "recuperação";

}else{
   res = "Reprovado";
}
console.log(res);

