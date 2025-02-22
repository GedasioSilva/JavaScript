const jogadores = [
    { time: 'Real', nome: 'Kroos'},
    { time: 'Barça', modelo: 'Pedri'},
    { time: 'Real', modelo: 'Modric'},
    { time: 'Milan', modelo: 'Leão'}
  ];

  function jogadoresReal(jogador){
    return(jogador.time == 'Real');
  }

  const jogadoresRealMadrid = jogadores.filter(jogadoresReal);
  console.log(jogadoresRealMadrid);