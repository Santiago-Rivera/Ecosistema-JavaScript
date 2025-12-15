// 1. Crea un función que utilice error correctamente

function mostrarError() {
    console.error("Este es un mensaje de error desde la función")
}
mostrarError()

// 2. Crea una función que utilice warn correctamente

function mostrarAdvertencia() {
    console.warn("Este es un mensaje de advertencia desde la función")
}
mostrarAdvertencia()

// 3. Crea una función que utilice info correctamente}

function mostrarInfo() {
    console.info("Este es un mensaje de información desde la función")
}
mostrarInfo()

// 4. Utiliza table

const producto = {
    id: 1,
    nombre: "Portátil",
    precio: 1200,
    especificaciones: {
        procesador: "Intel i7",
        ram: "16GB",
        almacenamiento: "512GB SSD"
    }
}
console.table(producto)

// 5. Utiliza group

console.group("Detalles del producto")
console.log("ID:", producto.id)
console.log("Nombre:", producto.nombre)
console.log("Precio:", producto.precio)
console.groupEnd()

// 6. Utiliza time

console.time("Bucle de ejemplo")
let total = 0
for (let i = 0; i < 500000; i++) {
    total += i
}
console.timeEnd("Bucle de ejemplo")

// 7. Valida con assert si un número es positivo

const numero = -3
console.assert(numero >= 0, "El número no es positivo")

// 8. Utiliza count

for (let i = 0; i < 3; i++) {
    console.count("Iteración")
}

// 9. Utiliza trace
function funcionA() {
    funcionB()
}

function funcionB() {
    funcionC()
}

function funcionC() {
    console.trace("Rastreo de la pila de llamadas")
}

funcionA()

// 10. Utiliza clear
console.clear()