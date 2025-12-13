// Loop o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`);
}

const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Número en la posición ${i}: ${numbers[i]}`);
}

// while

let i = 0;
while(i  < 5) {
    console.log(`Hola ${i}`);
    i++;
}

let k = 0;
while (k < numbers.length) {
    console.log(`Número en la posición ${k}: ${numbers[k]}`);
    k++;
}

// do while

let j = 0;
do {
    console.log(`Hola ${j}`);
    j++;
} while (j < 5);

let m = 0;
do {
    console.log(`Número en la posición ${m}: ${numbers[m]}`);
    m++;
} while (m < numbers.length);

// for of

myArray =["Santiago", "Lima", "Bogotá", "Caracas", "Quito"]

mySet = new Set([1, 2, 3, 4, 5, "Santiago", "Lima", "Bogotá", "Caracas", "Quito"])

myMap = new Map([
    ['nombre', 'Juan'],
    ['edad', 30],
    ['ciudad', 'Madrid']
])

for (let value of myArray) {
    console.log(`Valor del array: ${value}`);
}

for (let value of mySet) {
    console.log(`Valor del set: ${value}`);
}

for (let [key, value] of myMap) {
    console.log(`Clave del map: ${key}, Valor del map: ${value}`);
}

// for in

const person = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

for (let key in person) {
    console.log(`Clave: ${key}, Valor: ${person[key]}`);
}

// Buenas prácticas

// brake y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    } else if (i == 7) {
        break;
    }
    console.log(`Número: ${i}`);
}