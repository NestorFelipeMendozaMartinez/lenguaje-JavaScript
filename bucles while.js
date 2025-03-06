// Contador con while
let Contador = 0;
while (Contador < 30) {
    Contador += 1;
    console.log('Iteración', Contador);
}

// Combinado con if-else
while (true) {
    console.log('Introduzca un valor mayor a 10');
    let a = parseInt(prompt('Ingrese un valor:')); // Leer entrada del usuario

    if (a > 10) {
        console.log('Es correcto');
        break; // Salir del bucle si el valor es correcto
    } else {
        console.log('Es incorrecto, pruebe de nuevo');
    }
}