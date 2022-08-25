let nombre = "Juana Zorrilla";
let edad = calcularEdad(2003);
console.log("Hola " + nombre);
console.log(nombre + " tiene "+ edad + " años");
console.log("Se le pagará: "+calcularSalario(8, 30000));

function calcularEdad(anioNac){
    return new Date().getFullYear() - anioNac;
}

function calcularSalario(horasTrabajadas, montoPorHora){
    return horasTrabajadas * montoPorHora;
}