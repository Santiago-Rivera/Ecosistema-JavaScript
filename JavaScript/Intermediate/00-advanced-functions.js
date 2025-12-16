// funciones avanzadas

// Ciudadanos de primera claase

 const greet = function (nombre) {
  console.log(`Hola, ${nombre}`);
}

greet("Santiago")

function processGreeting(greetFunction, nombre) {
    greetFunction(nombre);
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "María");

const greet2 = returnGreeting();

greet2("Carlos")

// arrow functions avanzadas

// - Return implícito
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// - this lexico
const handler = {
    name: "Santiago",
    greeting: function() {
        console.log(`Hola, ${this.name}`);
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`);
    }
};

handler.greeting();
handler.arrowGreeting();

// IIFE (Immediately Invoked Function Expression)

// -IIFE clasico

(function() {
    console.log("IIFE clásico");
})();

// - IIFE con arrow function

(() => {
    console.log("IIFE con arrow function");
})();

// Parametros rest

function sum(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result
}

console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5))

// Spread operator

const numbers = [1, 2, 3];
function sumWithSSpread(a, b, c) {
    return a + b + c;
}

console.log(sumWithSSpread(1, 2, 3));
console.log(sumWithSSpread(...numbers));

// Clousures

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(`Contador: ${count}`);
    }
}

const counter = createCounter();
counter();
counter();
counter();

// Recursivilidad

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c);
    }
}

const sumWith = partialSum(5)
console.log(sumWith(2, 3));
console.log(sumWith(10, 15));

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return sum(a, b, c);
        }
    }
}

const curried = currySum(5)(2)(3);
console.log(curried);

// Callbacks

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Santiago", age: 30 };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Datos recibidos:", data);
});