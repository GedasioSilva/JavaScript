const convidados = [
    { nome: 'José', cerveja: false},
    { nome: 'Augusto', cerveja: true},
    { nome: 'Tomas', cerveja: true},
    { nome: 'Joana', cerveja: false},
    { nome: 'Aline', cerveja: false},
  ];
  
  let totalDeConvidados = convidados.length;
  let bebemRefrigerante = 0;
  let bebemCerveja = 0;
  
  for ( const convidado of convidados) {
    
  if(convidado.cerveja == true){
      bebemCerveja++;
  }else{
    bebemRefrigerante++;
    }
  }
  console.log(convidados[1].cerveja);
  console.log('Total de convidados: ' + totalDeConvidados);
  console.log('Bebem cerveja: ' + bebemCerveja);
  console.log('Bebem refrigerante: ' + bebemRefrigerante);