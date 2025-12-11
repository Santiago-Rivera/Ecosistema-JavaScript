//Tipos de datos primitivos en JavaScript

// String (Cadenas de texto)
let name = "Santiago";
let alias = 'Sinsinati'
let email = 'santiago@informativo.com'

// Number (Números)
let age = 21 //enteros
let height = 1.70 //decimales

// Boolean (Booleanos)
let isStudent = true
let isTeacher = false

// Undefined (Indefinido)
let UndefinedValue
console.log(UndefinedValue); // Output: undefined

// Null (Nulo)
let nullValue = null

// Symbol (Símbolo)

let mySymbol = Symbol('mySymbol')

// BigInt (Enteros grandes)

let myBigInt = BigInt(9007199254741991)
let myBigInt2 = 9007199254741991n

// Mostrar los tipos de datos en la consola
console.log(typeof name); // Output: string
console.log(typeof alias); // Output: string
console.log(typeof email); // Output: string

console.log(typeof age); // Output: number
console.log(typeof height); // Output: number

console.log(typeof isStudent); // Output: boolean
console.log(typeof isTeacher); // Output: boolean

console.log(typeof UndefinedValue); // Output: undefined
console.log(typeof nullValue); // Output: object (esto es un comportamiento especial en JavaScript)

console.log(typeof mySymbol); // Output: symbol

console.log(typeof myBigInt); // Output: bigint
console.log(typeof myBigInt2); // Output: bigint