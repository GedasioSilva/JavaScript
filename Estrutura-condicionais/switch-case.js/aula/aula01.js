var pos ,msg,pontos;

pontos = 200;

if (pontos >= 1000){
    pos = 1;
} else if (pontos >= 800){
    pos = 2;
} else if (pontos >= 600){
    pos = 3;    
} else{
    pos = 0;
}

switch(pos){
    case 1 :
        msg = "Primeiro Lugar  ";
        break;
    case 2 :
        msg = " segundo lugar  ";
        break;
    case 3:
        msg = "Terceiro Lugar ";
        break;    
    default :
     msg = "Desclassificado";

}
console.log(msg);

switch(pos){
    case 1:
        case 2:
            case 3:
               console.log(msg=" Subiu ao podio ");
                break;
                    default:
                     console.log(msg = " Não foi ao podio");  
                       








}