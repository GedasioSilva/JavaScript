
       var dt = new Date();
       var ndt =new Date();
       ndt.setDate(dt.getDate() + 2);
       console.log(ndt);
       console.log("------------");

        var dia = dt.getDate();  
        var mes = dt.getMonth();
        var ano = dt.getFullYear();
        var ds = dt.getDay();
        var horas = dt.getHours();
        var minutos = dt.getMinutes();

        var meses = new Array("J","F","M","A","M",
        "J","J","A","S","O","Novembro","D");

        var semanas = new Array("Segunda",
        "terça-feira","Quarta-feira","Quinta-feira"
        ,"Sexta-feira","Sábado","Domingo")


        console.log(`${semanas[ds]} Dia ${dia} do mês ${meses[mes]} do Ano ${ano} `);
        console.log(`${horas}  ${minutos}`);
