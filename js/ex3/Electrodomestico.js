"use strict";
const defPrecio = 100;
const defColor = "blanco";
const defConsumo = "F";
const defPeso = 5;
class Electrodomestico {
    constructor(newConsumo) {
        this.precio = defPrecio;
        this.color = this.comprobarColor(defColor);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = defPeso;
    }
    getPrecio() {
        return this.precio;
    }
    getColor() {
        return this.color;
    }
    getConsumo() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        switch (letra) {
            case "A":
                return "A";
                break;
            case "B":
                return "B";
                break;
            case "C":
                return "C";
                break;
            case "D":
                return "D";
                break;
            case "E":
                return "E";
                break;
            case "F":
                return "F";
                break;
            default:
                return "F";
                break;
        }
    }
    comprobarColor(color) {
        switch (color.toLowerCase()) {
            case "blanco":
                return "blanco";
                break;
            case "rojo":
                return "rojo";
                break;
            case "negro":
                return "negro";
                break;
            case "azul":
                return "azul";
                break;
            case "gris":
                return "gris";
                break;
            default:
                return "blanco";
                break;
        }
    }
    precioFinal() {
        let total = 0;
        switch (this.consumoEnergetico) {
            case "A":
                total += 100;
                break;
            case "B":
                total += 80;
                break;
            case "C":
                total += 60;
                break;
            case "D":
                total += 50;
                break;
            case "E":
                total += 30;
                break;
            case "F":
                total += 10;
                break;
            default:
                break;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            total += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            total += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            total += 80;
        }
        else if (this.peso >= 80) {
            total += 100;
        }
        return total;
    }
}
