// for of só pode chamar atributo por vez 
let categorias = [
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for(let categoria of categorias){

    console.log(categoria.id);
    console.log(categoria.nome);
    console.log("\n");
    console.log(categoria);//mostar tudo com of
}

