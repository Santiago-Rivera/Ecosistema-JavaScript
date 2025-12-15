// 1. Captura una excepción utilizando try-catch

try {
    // Código que puede producir un error
    console.log(nonExistentVariable);
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    // Código que puede producir un error
    console.log(anotherNonExistentVariable);
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error:", error.message);
} finally {
    console.log("El bloque finally siempre se ejecuta");
}

// 3. Lanza una excepción genérica

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Se ha producido un error:", error.message);
}

// 4. Crea una excepción personalizada

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function checkPositiveNumber(num) {
    if (num < 0) {
        throw new CustomError("El número no es positivo");
    }
    return num;
}

try {
    console.log(checkPositiveNumber(-5));
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Se ha producido un CustomError:", error.message);
    } else {
        console.log("Se ha producido un error:", error.message);
    }
}

// 5. Lanza una excepción personalizada

function validateString(str) {
    if (typeof str !== "string" || str.length === 0) {
        throw new CustomError("La cadena no es válida");
    }
    return str;
}

try {
    console.log(validateString(123));
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Se ha producido un CustomError:", error.message);
    } else {
        console.log("Se ha producido un error:", error.message);
    }
}

// 6. Lanza varias excepciones según una lógica definida

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Ambos argumentos deben ser números");
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Ambos argumentos deben ser números enteros");
    }
    return a + b;
}

try {
    console.log(sumIntegers(5, 10));
    console.log(sumIntegers(5.5, 10));
} catch (error) {
    console.log("Se ha producido un error:", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log(sumIntegers(5.5, 10));
    console.log(sumIntegers("5", 10));
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message);
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["10.5", "20.3", "invalid", "30.1", "NaN"];

for (const value of values) {
    try {
        const floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            throw new Error(`El valor "${value}" no es un número válido`);
        }
        console.log(`El valor convertido es: ${floatValue}`);
    } catch (error) {
        console.log("Se ha producido un error:", error.message);
    }
}
    console.log("Se ha producido un error:", error.message);

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError(`La propiedad "${prop}" no existe en el objeto`);
    }
    return obj[prop];
}

try {
    const myObj = { name: "John", age: 30 };
    console.log(checkProperty(myObj, "name"));
    console.log(checkProperty(myObj, "address"));
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Se ha producido un CustomError:", error.message);
    } else {
        console.log("Se ha producido un error:", error.message);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function unreliableFunction() {
    if (Math.random() < 0.7) {
        throw new Error("Error aleatorio");
    }
    return "Éxito";
}

function retryFunction(func, maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return func();
        } catch (error) {
            attempts++;
            console.log(`Intento ${attempts} fallido:`, error.message);
        }
    }
    throw new Error("Se alcanzó el número máximo de reintentos");
}

try {
    const result = retryFunction(unreliableFunction, 10);
    console.log("Resultado:", result);
} catch (error) {
    console.log("Se ha producido un error final:", error.message);
}