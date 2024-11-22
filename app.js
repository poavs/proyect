/*function imprimirEnVertical() {
    let palabra = "xxxx";
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
    }
}

imprimirEnVertical();
*/

/*
function imprimirEnHorizontal() {
    let palabra = "xxxx";
    console.log(palabra);
}

imprimirEnHorizontal();
*/

/*
function imprimirTablasDeMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); // Salto de línea entre tablas
    }
}

imprimirTablasDeMultiplicar();
*/

const imprimirFrutasConIndice = () => {
    let frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva", "Mango", "Piña", "Melón", "Sandía", "Durazno"];
    frutas.forEach((fruta, indice) => console.log(`${indice}: ${fruta}`));
};

imprimirFrutasConIndice();

