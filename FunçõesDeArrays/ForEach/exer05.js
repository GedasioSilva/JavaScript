//Percorra o array 'carros' e imprima respectivamente a marca e o modelo:
const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
  ];
  
  carros.forEach( carro => {
    console.log(carro.marca + ' - ' + carro.modelo);
  });
  
  console.log("=============================================");

  carros.forEach(carro => { console.log(carro.anoFabricacao)});