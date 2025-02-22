let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let dias_atraso = 1;
let contador = 0;

do {

    dias_atraso =  contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

   
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");
    contador++;

} while( contador < total_dias );