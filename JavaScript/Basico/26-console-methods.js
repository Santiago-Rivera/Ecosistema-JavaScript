// Console

// log

console.log("Este es un mensaje de log")

// error

console.error("Este es un mensaje de error")

// warn

console.warn("Este es un mensaje de advertencia")

// info

console.info("Este es un mensaje de información")

// table

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador",
    address: {
        calle: "Calle Falsa 123",
        codigoPostal: "28080"
    }
}

console.table(persona)

// group y groupEnd

console.group("Información de la persona")
console.log("Nombre:", persona.nombre)
console.log("Edad:", persona.edad)
console.log("Ciudad:", persona.ciudad)
console.log("Profesión:", persona.profesion)
console.groupEnd()

// time y timeEnd

console.time("Tiempo de ejecución")
let suma = 0
for (let i = 0; i < 1000000; i++) {
    suma += i
}
console.timeEnd("Tiempo de ejecución")

// assert

const numero = 5
console.assert(numero > 10, "El número no es mayor que 10")

// count

for (let i = 0; i < 5; i++) {
    console.count("Contador")
}

// trace

function funcionA() {
    funcionB()
}

function funcionB() {
    funcionC()
}

function funcionC() {
    console.trace("Rastreo de la pila")
}

funcionA()

// clear

// console.clear()