
function salario(){
    var historico_salario =[
        {ano:"2010",valor:"550"},
        {ano:"2011",valor:"600"},
        {ano:"2012",valor:"650"},
        {ano:"2013",valor:"700"},
        {ano:"2014",valor:"750"},
        {ano:"2015",valor:"800"},
        {ano:"2016",valor:"850"},
        {ano:"2017",valor:"900"},
        {ano:"2018",valor:"950"},
        {ano:"2019",valor:"1000"},
        {ano:"2020",valor:"1050"},
    ];
    
    for(i=0;i<historico_salario.length;i++){
        let label_ano = "Ano:";
        let ano_salario = historico_salario[i].ano;
    
        let label_salario = "Salario Mínimo: ";
        let valor_salario = historico_salario[i].valor;
    
        console.log(label_ano.padEnd(20,".") + " : " + ano_salario);
        console.log(" ");
        console.log(label_salario.padEnd(20,".") + " : " + valor_salario);
    }
    
    
}

function inflacao(){

    var inflacao = [
        {ipca:"5,00" , ano_ipca:"2010"},
        {ipca:"5,50" , ano_ipca:"2011"},
        {ipca:"6,00" , ano_ipca:"2012"},
        {ipca:"6,50" , ano_ipca:"2013"},
        {ipca:"7,00" , ano_ipca:"2014"},
        {ipca:"7,50" , ano_ipca:"2015"},
        {ipca:"8,00" , ano_ipca:"2016"},
        {ipca:"8,50" , ano_ipca:"2017"},
        {ipca:"9,00" , ano_ipca:"2018"},
        {ipca:"9,50" , ano_ipca:"2019"},
        {ipca:"10,00" , ano_ipca:"2020"},
    ];
    
    
    for(i=0;i<inflacao.length;i++){
        let label_Ano = "Ano: ";
        let valor_ano_ipca=inflacao[i].ano_ipca;
        let  label_valor_ipca = "Inflação IPCA";
        let valor_ipca = inflacao[i].ipca;
    
    
        console.log(label_Ano.padEnd(20, ".") + " : " + valor_ano_ipca);
        console.log(" ");
        console.log(label_valor_ipca.padEnd(20, ".") + " : " + valor_ipca);
    
    }
}

function chamar(valor){
    var opcao = valor;
    if(opcao==1){
        console.log("Escolheu Mostrar Dados Inflação: ");
        console.log(" ");
        inflacao();
    }else if(opcao == 2){
        salario();
    }
}

var historico_salario =[
    {ano:"2010",valor:"550"},
    {ano:"2011",valor:"600"},
    {ano:"2012",valor:"650"},
    {ano:"2013",valor:"700"},
    {ano:"2014",valor:"750"},
    {ano:"2015",valor:"800"},
    {ano:"2016",valor:"850"},
    {ano:"2017",valor:"900"},
    {ano:"2018",valor:"950"},
    {ano:"2019",valor:"1000"},
    {ano:"2020",valor:"1050"},
];

var inflacao = [
    {ipca:"5,00" , ano_ipca:"2010"},
    {ipca:"5,50" , ano_ipca:"2011"},
    {ipca:"6,00" , ano_ipca:"2012"},
    {ipca:"6,50" , ano_ipca:"2013"},
    {ipca:"7,00" , ano_ipca:"2014"},
    {ipca:"7,50" , ano_ipca:"2015"},
    {ipca:"8,00" , ano_ipca:"2016"},
    {ipca:"8,50" , ano_ipca:"2017"},
    {ipca:"9,00" , ano_ipca:"2018"},
    {ipca:"9,50" , ano_ipca:"2019"},
    {ipca:"10,00" , ano_ipca:"2020"},
];


for(i=0;i<historico_salario.length;i++){
    let label_ano = "Ano:";
    let ano_salario = historico_salario[i].ano;
    let label_salario = "Salario Mínimo: ";
    let label_cres_sala = "Crescimento Salarial";
    let valor_salario = historico_salario[i].valor;
    let  label_valor_ipca = "Inflação IPCA";
    let valor_ipca = inflacao[i].ipca;

    
    console.log(label_ano.padEnd(20,".") + " : " + ano_salario);
    console.log(label_salario.padEnd(20,".") + " : " + valor_salario);
    console.log(label_valor_ipca.padEnd(20, ".") + " : " + valor_ipca);
    console.log(" ");

}