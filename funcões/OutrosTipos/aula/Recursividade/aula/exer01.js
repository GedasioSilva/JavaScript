function contador(cont){
    var num = 5;
    if(cont <= num){
        cont++;
        console.log(cont)
    }
       
}
contador(3);

console.log("---------------------------")


    var timer;
	var cont=0;
			
	function cfb(){
		if(cont <= 10){
			cont++;
			console.log("Canal Fessor Bruno<br>");
			timer=setTimeout(cfb,500);
		}
	}
			
	cfb();

    console.log("---------------------------")

    var c = 0;

    function controle(){
        if(c <= 10){
            c++;
            console.log("Gedasio");
        }
    }

    controle();