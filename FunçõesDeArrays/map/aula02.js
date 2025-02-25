//A função nativa (método) map é muito utilizada quando queremos criar um array a partir de outro. Esse novo array possui a mesma quantidade de elementos, porém o valor do elemento será diferente do original.
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  
  function retornaCarro(carros) {
    return carros.marca + ' ' + carros.modelo + ' ano: ' + carros.anoFabricacao;
  }
  
  const novosCarros = carros.map(retornaCarro);
  
  console.log(novosCarros);
  
  /*
  * vai imprimir:
  [
    'Fiat Uno ano: 2015'
    'GM Onix ano: 2018'
    'Ford KA+ ano: 2018'
    'Fiat Cronos ano: 2020'
  ]
  */