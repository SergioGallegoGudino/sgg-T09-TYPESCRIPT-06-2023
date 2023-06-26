
class Lavadora extends Electrodomestico{
    private carga:number;

    constructor(newConsumo:string){
        super(newConsumo);
        this.carga = 5;
    }

    getCarga(){
        return this.carga;
    }

    precioFinal(): number{
        let total = super.precioFinal();
        if(this.carga > 30){
            total += 50;
        }
        return total;
    }

}