// Strings

// Concatenación de cadenas

let myName = "Santiago"
let greeting = 'Hola' + ', ' + myName + '!'
console.log(greeting) // Hola, Santiago!
console.log(typeof greeting) // string

// Longitud de una cadena|

console.log(greeting.length) // 13

// Acceso a caracteres individuales

console.log(greeting[0]) // H
console.log(greeting.charAt(1)) // o

// Métodos comunes de cadenas

console.log(greeting.toUpperCase()) // HOLA, SANTIAGO!
console.log(greeting.toLowerCase()) // hola, santiago!
console.log(greeting.indexOf('Santiago')) // 6
console.log(greeting.includes('Hola')) // true
console.log(greeting.slice(6, 14)) // Santiago
console.log(greeting.replace('Santiago', 'Mundo')) // Hola, Mundo!

// Plantillas literales (Template literals)

let age = 25
let templateGreeting = `Hola, ${myName}.
Tienes ${age} años.`
console.log(templateGreeting) // Hola, Santiago. Tienes 25 años.

console.log(`Hola, ${myName}.`)