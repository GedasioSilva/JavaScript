var dv;

window.addEventListener("load",inicia);

function inicia(){
    dv = document.getElementById("dv1");
   
    dv.addEventListener("mousemove",troca);
    dv.addEventListener("mouseout",trocaOriginal);
}

function troca(){
    dv.style.backgroundImage="url('c2.png')";
}

function trocaOriginal(){  
    dv.style.backgroundImage="url('img.jpg')";
}