const defLongitud:number = 8;

class Password{
    private longitud:number;
    private contrasena:string;

    constructor(newLongitud:number = defLongitud){
        this.longitud = newLongitud;
        this.contrasena = randomPasswd(this.longitud);
    }

}

const randomPasswd = (longitud:number) => {
    let passwd = "";
    
    for (let i = 0; i < longitud; i++) {
        passwd = passwd + Math.floor(Math.random() * (9 - 0) + 0);
    }

    return passwd;
}
