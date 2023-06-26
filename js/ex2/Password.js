"use strict";
const defLongitud = 8;
class Password {
    constructor(newLongitud = defLongitud) {
        this.longitud = newLongitud;
        this.contrasena = randomPasswd(this.longitud);
    }
}
const randomPasswd = (longitud) => {
    let passwd = "";
    for (let i = 0; i < longitud; i++) {
        passwd = passwd + Math.floor(Math.random() * (9 - 0) + 0);
    }
    return passwd;
};
