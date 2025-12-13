// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`La suma de los números del 1 al 100 es: ${sum}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const names = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const text = "Hola, ¿cómo estás?";
let vowelCount = 0;
const vowels = "aeiouáéíóúAEIOUÁÉÍÓÚ";

for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
        vowelCount++;
    }
}
console.log(`Número de vocales en la cadena: ${vowelCount}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numbers = [1, 2, 3, 4, 5];
let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log(`El producto de los números es: ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

const originalString = "JavaScript";
let reversedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}
console.log(`Cadena invertida: ${reversedString}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`Los primeros 10 números de Fibonacci son: ${fib}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numArray = [4, 11, 15, 3, 22, 7, 9, 13];
const filteredArray = [];

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 10) {
        filteredArray.push(numArray[i]);
    }
}
console.log(`Números mayores a 10: ${filteredArray}`);