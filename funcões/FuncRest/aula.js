// Rest como a função não tem valor definidio

     function soma(...num){// pode colocar quantos parametros quiser
            let res = 0;
            let qtde = num.length; // agora tem que contar a quantidade pra somar
            for( let i = 0 ; i < qtde ; i++){ // aqui vai contar quantos numeros vai entrar na função
                res += num[i]; // a let res ta recebendo a quantidade
            }
            return res; // res na tela 
        }  
        console.log(soma(1,2,3)); // chamando a função e colocando parametros

