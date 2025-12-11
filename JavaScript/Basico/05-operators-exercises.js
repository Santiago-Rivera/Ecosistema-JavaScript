// 1. Crea una variable para cada operación aritmética
let x = 8
let y = 3

let suma = x + y
let resta = x - y
let multiplicacion = x * y
let division = x / y
let modulo = x % y
let exponente = x ** y

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Exponente:", exponente);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = 10
asignacion += suma
console.log("Asignación suma:", asignacion);
asignacion -= resta
console.log("Asignación resta:", asignacion);
asignacion *= multiplicacion
console.log("Asignación multiplicación:", asignacion);
asignacion /= division
console.log("Asignación división:", asignacion);
asignacion %= modulo
console.log("Asignación módulo:", asignacion);
asignacion **= exponente
console.log("Asignación exponente:", asignacion);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 + 3 === 8); // Igualdad estricta
console.log(10 - 2 > 5); // Mayor que
console.log(4 * 2 <= 8); // Menor o igual que
console.log(9 / 3 != 4); // Desigualdad
console.log(7 % 2 === 1); // Igualdad estricta

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 + 3 === 9); // Igualdad estricta
console.log(10 - 2 < 5); // Menor que
console.log(4 * 2 >= 9); // Mayor o igual que
console.log(9 / 3 == 4); // Igualdad
console.log(7 % 2 !== 1); // Desigualdad estricta

// 5. Utiliza el operador lógico and

let isStudent = true
let hasBook = false
console.log(isStudent && hasBook); // AND

// 6. Utiliza el operador lógico or

console.log(isStudent || hasBook); // OR

// 7. Combina ambos operadores lógicos

console.log((isStudent && hasBook) || (!isStudent && !hasBook));

// 8. Añade alguna negación

console.log(!isStudent); // NOT

// 9. Utiliza el operador ternario

let score = 85
let grade = (score >= 60) ? "Aprobado" : "Reprobado"
console.log("Calificación:", grade);

// 10. Combina operadores aritméticos, de comparáción y lógicas

let age = 22
let age2 = 17
let ageComparison = ((age + 2) > 20) && ((age2 * 2) < 40)
console.log("Comparación de edades:", ageComparison);