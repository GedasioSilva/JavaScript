var mochila = new Array();
mochila.push("Caderno");
mochila.push("lapis");

for(i=0;i< mochila.length;i++){
    console.log(mochila[i]);
}

var mat = [
    [1,2],
    [3,4]
];

console.log(` ${mat[0][0]} ${mat[0][1]}`);

var nomes = [
    ["Nome","Gedasio"]
];
console.log(`${nomes[0][0]}  ${nomes[0][1]}`)
console.log("---------------------");



    function media(nt1,nt2){
        var media = [nt1 + nt2]/2;
        console.log(`${media}`);
    }

    media(4,2);


