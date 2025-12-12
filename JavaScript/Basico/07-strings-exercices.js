// 1. Concatena dos cadenas de texto

let string1 = "Hola"
let string2 = "Mundo"
let concatenatedString = string1 + ", " + string2 + "!"
console.log(concatenatedString) // Hola, Mundo!

// 2. Muestra la longitud de una cadena de texto

console.log(concatenatedString.length) // 13

// 3. Muestra el primer y último carácter de un string

console.log(concatenatedString[0]) // H
console.log(concatenatedString[concatenatedString.length - 1]) // !

// 4. Convierte a mayúsculas y minúsculas un string

console.log(concatenatedString.toUpperCase()) // HOLA, MUNDO!
console.log(concatenatedString.toLowerCase()) // hola, mundo!

// 5. Crea una cadena de texto en varias líneas

let multiLineString = `Esta es la primera línea.
Esta es la segunda línea.
Esta es la tercera línea.`
console.log(multiLineString)

// 6. Interpola el valor de una variable en un string

let name = "Sofía"
let age = 30
let interpolatedString = `Hola, mi nombre es ${name} y tengo ${age} años.`
console.log(interpolatedString)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringWithSpaces = "Este es un ejemplo de cadena con espacios"
let stringWithHyphens = stringWithSpaces.replace(/ /g, "-")
console.log(stringWithHyphens) // Este-es-un-ejemplo-de-cadena-con-espacios

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let searchString = "cadena"
console.log(stringWithSpaces.includes(searchString)) // true

// 9. Comprueba si dos strings son iguales

let stringA = "JavaScript"
let stringB = "JavaScript"
console.log(stringA === stringB) // true

// 10. Comprueba si dos strings tienen la misma longitud
let stringC = "Hola"
let stringD = "Mundo"
console.log(stringC.length === stringD.length) // true