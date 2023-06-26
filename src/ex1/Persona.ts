type tipSexo = "H" | "M";
const defSexo : tipSexo = "H"; 

class Persona{
    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: string; 
    private peso: number;
    private altura: number;

    constructor(newDNI:string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
}
