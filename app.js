// Lista de productos disponibles
var listaProductos = [
    { nombre: 'Camisa', precio: 400 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Sombrero', precio: 200 },
    { nombre: 'Zapatos', precio: 800 }
];

// Arreglo que contendrá los productos seleccionados por el usuario
var carritoCompras = [];

// Función para mostrar el menú de opciones
function desplegarMenu() {
    var opciones = "Selecciona un producto para agregar al carrito:\n";
    listaProductos.forEach((producto, index) => {
        opciones += (index + 1) + ". " + producto.nombre + " - $" + producto.precio + "\n";
    });
    opciones += (listaProductos.length + 1) + ". Ver Carrito y Total\n";
    opciones += (listaProductos.length + 2) + ". Añadir nuevo producto\n";
    opciones += (listaProductos.length + 3) + ". Salir\n";
    return opciones;
}

// Función para agregar un producto al carrito
function añadirAlCarrito(indice) {
    let producto = listaProductos[indice];
    carritoCompras.push(producto);
    console.log(`"${producto.nombre}" ha sido añadido al carrito.`);
}

// Función para mostrar el carrito y calcular el total
function verCarritoYTotal() {
    if (carritoCompras.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        let detalleCarrito = "Carrito de compras:\n";
        let sumaTotal = 0;
        carritoCompras.forEach((item, indice) => {
            detalleCarrito += `${indice + 1}. ${item.nombre} - $${item.precio}\n`;
            sumaTotal += item.precio;
        });
        detalleCarrito += `\nTotal a pagar: $${sumaTotal}`;
        console.log(detalleCarrito);
    }
}

// Función para agregar un nuevo producto al catálogo
function añadirNuevoProducto() {
    let claveAdmin = prompt("Acceso de administrador\nPor favor, ingrese la contraseña:");
    if (claveAdmin) {
        let nuevoNombre = prompt("Ingrese el nombre del producto:");
        let nuevoPrecio = parseFloat(prompt("Ingrese el precio del producto:"));
        if (!isNaN(nuevoPrecio)) {
            listaProductos.push({ nombre: nuevoNombre, precio: nuevoPrecio });
            console.log(`Producto "${nuevoNombre}" añadido con éxito.`);
        } else {
            console.log("Precio inválido. No se ha añadido el producto.");
        }
    } else {
        console.log("Contraseña incorrecta. No tiene permisos para añadir productos.");
    }
}

// Bucle principal del programa
let seleccion;
do {
    seleccion = parseInt(prompt(desplegarMenu()), 10);

    if (isNaN(seleccion) || seleccion < 1 || seleccion > listaProductos.length + 3) {
        console.log("Opción no válida. Intente de nuevo.");
    } else if (seleccion >= 1 && seleccion <= listaProductos.length) {
        añadirAlCarrito(seleccion - 1);
    } else if (seleccion === listaProductos.length + 1) {
        verCarritoYTotal();
    } else if (seleccion === listaProductos.length + 2) {
        añadirNuevoProducto();
    }
} while (seleccion !== listaProductos.length + 3);

console.log("Gracias por utilizar nuestro servicio.");
