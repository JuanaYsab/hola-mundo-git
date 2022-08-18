let nombre = "Juana";
let edad = calcularEdad(2003);
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad + " años");

function calcularEdad(anioNac){
    return new Date().getFullYear() - anioNac;
}
