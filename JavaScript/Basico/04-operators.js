// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log( a + b); // Suma
console.log( a - b); // Resta
console.log( a * b); // Multiplicación
console.log( a / b); // División
console.log( a % b); // Módulo
console.log( a ** 2); // Exponente

a++ // Incremento
b-- // Decremento

console.log(a);
console.log(b);

// Operadores de Asignación

let c = 15
c += 5 // c = c + 5
console.log(c);
c -= 3 // c = c - 3
console.log(c);
c *= 2 // c = c * 2
console.log(c);
c /= 4 // c = c / 4
console.log(c);
c %= 6 // c = c % 6
console.log(c);
c **= 3 // c = c ** 3
console.log(c);

// Operadores de Comparación

console.log( a == b); // Igualdad
console.log( a != b); // Desigualdad
console.log( a === b); // Igualdad estricta
console.log( a !== b); // Desigualdad estricta
console.log( a > b); // Mayor que
console.log( a < b); // Menor que
console.log( a >= b); // Mayor o igual que
console.log( a <= b); // Menor o igual que

// Operadores Lógicos

let isAdult = true
let hasID = false

console.log( isAdult && hasID); // AND
console.log( isAdult || hasID); // OR
console.log( !isAdult); // NOT

// Operador Ternario

let age = 20
let canVote = (age >= 18) ? "Puede votar" : "No puede votar"
console.log(canVote);