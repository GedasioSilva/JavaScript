var tmp;

function mudaCor(){
    var obj = document.getElementById("icone");
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    obj.style.backgroundColor = "rgb("+r+","+g+","+b+")";            
}

function iniciar(){
    tmp =setInterval(mudaCor,1000);
}
function parar(){
   clearInterval(tmp);
}


function addEventos(){
    document.getElementById("bt1").addEventListener("click",iniciar);
    document.getElementById("bt2").addEventListener("click",parar);   
    }



window.addEventListener("load",addEventos);