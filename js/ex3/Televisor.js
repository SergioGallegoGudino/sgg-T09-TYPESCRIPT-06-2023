"use strict";
class Televisor extends Electrodomestico {
    constructor(newConsumo) {
        super(newConsumo);
        this.resolucion = 20;
        this.cuatroK = false;
    }
    getResolucion() {
        return this.resolucion;
    }
    getCuatroK() {
        return this.cuatroK;
    }
    precioFinal() {
        let total = super.precioFinal();
        if (this.resolucion > 40) {
            total += (total * 0.3);
        }
        if (this.cuatroK == true) {
            total += 50;
        }
        return total;
    }
}
