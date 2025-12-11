// 1. Escibe un comentario en una linea

// Este es un comentario en una linea

// 2. Escibe un comentario en varias lineas

/*
Este es un comentario
en varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Hello, World!" // String
let myNumber = 42 // Number
let myBoolean = false // Boolean
let myUndefined // Undefined
let myNull = null // Null
let mySymbol = Symbol('uniqueSymbol') // Symbol
let myBigInt = 12345678901234567890n // BigInt

// 4 Imprime por consola el valor de todas las variables

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Impime por consola el tipo de todas las variables
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuació, modifica los valores de las variables por otros del mismo tipo
myString = "Goodbye, World!"
myNumber = 100
myBoolean = true
myUndefined = undefined
myNull = null
mySymbol = Symbol('anotherUniqueSymbol')
myBigInt = 98765432109876543210n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 12345 // Cambiado a Number
myNumber = "Now I'm a string" // Cambiado a String
myBoolean = "true" // Cambiado a String
myUndefined = null // Cambiado a Null
myNull = undefined // Cambiado a Undefined
mySymbol = 100n // Cambiado a BigInt
myBigInt = Symbol('bigIntAsSymbol') // Cambiado a Symbol

// 8. Declara constantes con valores a sociados a todos los tipos de datos primitivos

const myConstString = "Constant String" // String
const myConstNumber = 3.14 // Number
const myConstBoolean = true // Boolean
const myConstUndefined = undefined // Undefined
const myConstNull = null // Null
const myConstSymbol = Symbol('constSymbol') // Symbol
const myConstBigInt = 111222333444555666n // BigInt

// 9. A continuación, modifica los valores de las constantes

myConstString = "New Value" // Error
myConstNumber = 42 // Error
myConstBoolean = false // Error
myConstUndefined = null // Error
myConstNull = undefined // Error
myConstSymbol = Symbol('newConstSymbol') // Error
myConstBigInt = 999888777666555444n // Error

// 10. Comenta las lineas que produzcan algún tipo de error al ejecutarse

// myConstString = "New Value" // Error
// myConstNumber = 42 // Error
// myConstBoolean = false // Error
// myConstUndefined = null // Error
// myConstNull = undefined // Error
// myConstSymbol = Symbol('newConstSymbol') // Error
// myConstBigInt = 999888777666555444n // Error