// a função soma ta dentro de uma variavel ou seja pode ser adicionada em outra variavel
    let soma=function(...num){
        let res =0;
        for(n of num){
            res += n;
        }
        return res
    }

    let s=soma; // a função soma ta anonima pq pode ir pra qualquer lugar até mesmo dentro de uma variavel


        console.log(s(1,2,2,8)); // aqui ta falando que a variavel s recebe 4 valores 
        

        