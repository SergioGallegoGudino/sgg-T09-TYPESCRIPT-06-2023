
class Televisor extends Electrodomestico{
    private resolucion: number;
    private cuatroK: boolean;
    
    constructor(newConsumo:string){
        super(newConsumo);
        this.resolucion = 20;
        this.cuatroK = false;
    }

    getResolucion():number{
        return this.resolucion;
    }

    getCuatroK():boolean{
        return this.cuatroK;
    }

    precioFinal(): number{
        let total = super.precioFinal();
        if(this.resolucion > 40){
            total += (total*0.3);
        }
        if(this.cuatroK == true){
            total += 50;
        }
        return total;
    }
}