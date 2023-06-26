
console.log("Ejercicio 3");

let el1 = new Electrodomestico("F");
console.log(el1.precioFinal());

let la1 = new Lavadora("G");
console.log(la1.precioFinal());

let tel1 = new Televisor("E");
console.log(tel1.precioFinal());

let total = 0;
let totalLavadora = 0;
let totalTelevisor = 0;

let el2 = new Electrodomestico("A"), el3 = new Electrodomestico("B"), el4 = new Electrodomestico ("C");
let la2 = new Lavadora("D"), la3 = new Lavadora("E"), la4 = new Lavadora("F");
let tel2 = new Televisor("A"), tel3 = new Televisor("C"), tel4 = new Televisor("E");

let array = [el2, la2, tel2, el3, la3, tel3, el4, la4, tel4];

class mainApp{

    private array:Electrodomestico[];

    constructor(newArray:Electrodomestico[]){
        this.array = newArray;
    }

    calcularPrecios(){
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].constructor.name == "Electrodomestico"){
                total += this.array[i].precioFinal();
            } else if (this.array[i].constructor.name == "Lavadora"){
                total += this.array[i].precioFinal();
                totalLavadora += this.array[i].precioFinal();
            } else if (this.array[i].constructor.name == "Televisor"){
                total += this.array[i].precioFinal();
                totalTelevisor += this.array[i].precioFinal();
            }
        }
        console.log("Total: " + total);
        console.log("Total Lavadoras: " + totalLavadora);
        console.log("Total Televisor: " + totalTelevisor);
    }
}

let m1 = new mainApp(array);
m1.calcularPrecios();
