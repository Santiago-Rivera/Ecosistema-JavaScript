// Excepción

// Poduce una excepción
// let myObject
// console.log(myObject.email)

// Tratamiento de  errores

// try-catch

try {
    // Código que puede producir un error
    console.log(myObject.email);
    console.log('finaliza la ejecución sin errores');
} catch (error) {
    // Bloque de error
    console.log('Se ha producido un error');
}

// Captura del error

try {
  // Código que puede producir un error
  console.log(myObject.email);
} catch (error) {
  // Bloque de error
  console.log("Se ha producido un error:", error.message);
}

// finally

try {
    // Código que puede producir un error
    console.log(myObject);
} catch (error) {
    // Bloque de error
    console.log('Se ha producido un error', error.message);
} finally {
    console.log('El bloque finally siempre se ejecuta');
}

// Lanzar errores

function sum(a , b) {
    if (typeof a === "number") {
        console.log("Es instancia de numero")
    }
    if (Number.isInteger(a)) {
        console.log("Es un número entero")
    }
    if (!(a instanceof Number) && !(b instanceof Number)) {
    console.log("No se pueden sumar estas propiedades");
    }
    return a + b;
}


try {
  console.log(sumIntegers(5, 10));
  // console.log(sumIntegers(5.5, 10))
  console.log(sumIntegers("5", 10));
  // console.log(sumIntegers(5, "10"))
  // console.log(sumIntegers("5", "10"))
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

// Capturar varios tipos de errores

try {
  // console.log(sumIntegers(5.5, 10))
  console.log(sumIntegers("5", 10));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    console.log(this.a, " + ", this.b);
  }
}

try {
  console.log(sumIntegers(0, 10));
} catch (error) {
  console.log("Se ha producido un error personalizado:", error.message);
  error.printNumbers();
}