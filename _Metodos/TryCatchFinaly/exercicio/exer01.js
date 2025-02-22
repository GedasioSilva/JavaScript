
       var num;
       try{
           num = prompt(5);
           if(num >10){
               throw new Error("");
           }
           
           console.log("valor " + num);
       }catch(e){
           console.log("Erro " + "valor invalido , valor dever ser igual ou menor a 10 <br>");
           //console.log("Mensagem de erro " + e.mensagem);    
       }finally{
           console.log("<BR>Fim do tratamento <BR>")
       }
  