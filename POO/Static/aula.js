// static ele vai usar uma varial como fixa
class carro{
    static alerta = true;
    constructor(marca,modelo,cor){
        this.marca=marca;
        this.modelo = modelo;
        this.cor=cor;
        this.ligado = false;
        this.km=0;
       this.comb=0;
        
    }
        info(){// metodo de chamar os atributos
            console.log("Marca........: " + this.marca);
            console.log("Modelo.......: " + this.modelo);
            console.log("Cor..........: " + this.cor);
            console.log("ligado.......: " + (this.ligado ? "SIM":"Não"));
            console.log("KM...........: " + this.km);
            console.log("Combustivel..: " + this.comb);
            console.log("Alerta.......: " + (carro.alerta ? "Sim":"Não")); // criando varia do tipo static
            console.log("---------------------------------------")
        }

    ligar(){// metodo pra ligar o carro
        this.ligado=true;
    }
    desligar(){
        this.ligado=false;
    }
    setAlerta(t){
        carro.alerta=t;
    }


    set setComb(v){ // metodo set alterando o valor do combustivel
        if(v<0 || v > 100){
            alert("valor Invalido");
        }else{
            this.comb=v;
            console.log("Combustivel alterado, Valor atual " + this.comb);
        }
        
    }
    
    get getComb(){ // metodo pra pegar o valor do combustivel
      return this.comb;  
    }

}

let c1 = new carro("Honda","HRV","PRATA");
let c2 = new carro("VW","GOLF","BRANCO");
let c3 = new carro("GM","CAMARO","AMARELO");

c1.setComb=100;// o c1 ta recebendo no atributo diretamente pelo metodo set
c1.setAlerta(false);


c1.info(); // chamando o metodo info
c2.info(); // chamando o metodo info
c3.info(); // chamando o metodo info