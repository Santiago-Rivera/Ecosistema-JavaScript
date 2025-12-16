// 1. Crea una función que retorne a otra función

function outerFunction() {
    return function innerFunction() {
        return "¡Hola desde la función interna!";
    }
}

const myInnerFunction = outerFunction();
console.log(myInnerFunction());

// 2. Implementa una función currificada que multiplique 3 números

function curryMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

const curriedMultiply = curryMultiply(2)(3)(4);
console.log(curriedMultiply); // 24

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getValue: function() {
            return count;
        }
    };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
console.log(counter.getValue()); // 12
counter.decrement();
console.log(counter.getValue()); // 11

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3)); // 12
console.log(sumManyTimes(3, 4, 5, 6)); // 45

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    callback(sum);
}

function printResult(result) {
    console.log(`El resultado de la suma es: ${result}`);
}

sumWithCallback(printResult, 1, 2, 3, 4); // El resultado de la suma es: 10
sumWithCallback(printResult, 5, 10, 15);   // El resultado de la suma es: 30

// 7. Desarrolla una función parcial

function partialMultiply(a) {
    return function (b, c) {
        return a * b * c;
    }
}

const multiplyBy2 = partialMultiply(2);
console.log(multiplyBy2(3, 4)); // 24
console.log(multiplyBy2(5, 6)); // 60

// 8. Implementa un ejemplo que haga uso de Spread

const nums = [1, 2, 3, 4, 5];
function sumFiveNumbers(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sumFiveNumbers(...nums)); // 15

// 9. Implementa un retorno implícito

const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

// 10. Haz uso del this léxico
function Person(name) {
    this.name = name;
    this.greet = () => {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
}

const person = new Person("Juan");
person.greet(); // Hola, mi nombre es Juan