const meses = [// função principal
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  function abreviar(mes){
    return mes.substr(0,3);//corta String deixando só 3 caracteres
  }

  const mesesAbreviados = meses.map(abreviar);
  ///cria uma variavel que recebe os dados de meses e colocar na função abreviar 

  console.log(mesesAbreviados);