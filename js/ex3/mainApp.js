"use strict";
class mainApp extends Electrodomestico {
    constructor(newConsumo) {
        super(newConsumo);
        this.carga = 5;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let total = super.precioFinal();
        if (this.carga > 30) {
            total += 50;
        }
        return total;
    }
}
