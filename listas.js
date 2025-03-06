// Parte 1: Acceso a elementos de una lista (array en JavaScript)
let Lista = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes', 'sabado'];
console.log(Lista[4]); // Imprime: viernes

// Parte 2: Imprimir la lista completa
console.log(Lista); // Imprime la lista completa

// Parte 3: Acceso a un rango de elementos
console.log(Lista.slice(0, 3)); // Imprime: ['Lunes', 'Martes', 'Miercoles']

// Parte 4: Lista con elementos mixtos y sublista
Lista = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes', 'sabado', 1, 2, 3, ['Esteban', 0.2, 2.25, true]];
console.log(Lista.slice(0, 4), Lista[9].slice(0, 3)); // Imprime: ['Lunes', 'Martes', 'Miercoles', 'Jueves'] y ['Esteban', 0.2, 2.25]