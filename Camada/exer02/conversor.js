function converteCentimetroParaMetro(centimetro){
    let metro = centimetro / 100;

    return metro;
}

function converteMetroParaCentimetro(metro){
    let centimetro = metro * 100;

    return centimetro;
}

function converteMetroParaQuilometro(metro){
    let quilometro = metro / 1000;

    return quilometro;
}

export {converteCentimetroParaMetro, converteMetroParaCentimetro, converteMetroParaQuilometro};