//prototype pode criar novos metodos os sobrescrever outros
Object.prototype;

class Carro{
    constructor(tpCarro,tpcomb){
        this.tipo=tpCarro; //1passeio 2 transporte 3 combate
        this.qtdeComb=100;
        this.ligado=false;
        this.tipoComb=tpcomb; // 1 gasolina 2disel 3 etanol  
    }
        
    info(){
        console.log("Qtde combus " + this.qtdeComb);
        console.log("Ligado .... " + (this.ligado ? "Sim": "Não"));
        console.log("tipo Combus." + this.tipoComb);
        if(this.tipo == 1){
            console.log("Carro Passeio");
        }else if(this.tipo == 2){
            console.log("Carro de Transporte");
        }else{
            console.log("Carro de Combate");
        }
        
    }

    set setLigado(t){
        this.ligado=t;
    }

    get getLigado(){
        return this.ligado;
    }

    set setComb(v){
        if(v<0 || v> 100){
            alert("valor invalido");
        }else{
            this.qtdeComb = v;
        }
    }

    get getComb(){
        return this.qtdeComb;
    }
}

class CarroCombate extends Carro{
    constructor(){
       super(2,2);
    }
   
}
Carro.prototype.portencia=500; // criando atributos sem precisar colocar na classe pai 
Carro.prototype.velocidade=150;
Carro.prototype.velMax=300;

// Carro.prototype.info ta alterando os atributos de info que passaria a chamar os novos potencia , velocidade e velmax
Carro.prototype.info2=function(){ // criando uma nova função // info2 ta chamando o info()
    
    console.log("Potencia " + this.portencia);
    console.log("Velocidade " + this.velocidade);
    console.log("Velocidade Maxima " + this.velMax);
    
}

let c1 = new CarroCombate(100);
c1.setLigado=true;
c1.info2();
c1.info();

