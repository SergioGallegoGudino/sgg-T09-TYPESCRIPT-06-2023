"use strict";
const defSexo = "H";
class Persona {
    constructor(newDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
}
