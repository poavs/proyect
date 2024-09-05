let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Calcula la suma
function suma(numero1 , numero2){
    return numero1+numero2;
}

// Muestra el resultado en la consola
console.log("La suma de "+ numero1 + " y "+ numero2 + " es igual a:  " +suma(numero1,numero2));
