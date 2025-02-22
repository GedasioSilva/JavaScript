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
    constructor(potTiro){
        super(3,2)
        this.tiros = 1000;
        this.potTiro=potTiro;
        this.blindagem=100;
    }
    info(){
        super.info(); // info do pai
        console.log("QTD de Tiros "  + this.tiros);
        console.log("Potencia dos tiros " + this.potTiro);
        console.log("Quantidade de blindagem " + this.blindagem);
        console.log("-----------------------------------------");
    }
    
}


let c1 = new CarroCombate(100);
let c2 = new CarroCombate(50);
c1.setLigado=true;
c1.info();
c2.info();