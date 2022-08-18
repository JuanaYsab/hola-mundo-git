let nombre = "Juana";
let edad = calcularEdad(2003);
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad + " años");

function calcularEdad(anioNac){
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const edad = anioActual - anioNac;
    return edad;
}