// não estar pegando 
function contarPT(n){
    let cont =0;
    let p = new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            for(let i =0; i<n;i++)
                cont++
            if(cont == n)
                resolve(n)
            else
                reject('Erro')
            },2000)    
        })
       return p
    }

    async function contarPTA(n){
        const r = await contarPT(n)
        console.log(r);
    }    

    contarPTA(10)