const c1 = document.querySelector('#c1');

c1.addEventListener('click',msg=()=>{
        alert("chama");
});

/* ------------- */


const c2 = document.getElementById('c2');

c2.addEventListener('click',msg=()=>{
        alert("denovo");
});

/* saber quem chamou o evento  o elemento que foi chamado vai ficar destacado*/

const cursos=[...document.querySelectorAll(".curso")];

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el = evt.target;
        el.classList.add("destaque")
    })
})

