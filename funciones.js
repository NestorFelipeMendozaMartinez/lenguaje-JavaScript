// Parte 1: Multiplicación de elementos de dos listas
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
let c = [];

for (let contador = 0; contador < a.length; contador++) {
    c.push(a[contador] * b[contador]);
}
console.log(c); // Imprime: [6, 14, 24, 36, 50]

// Parte 2: Funciones en JavaScript

// Definición y llamada de una función
function mostrarTexto() {
    console.log('Hola');
}
mostrarTexto(); // Imprime: Hola

// Función que multiplica dos números
function multiplicar() {
    let a = 5;
    let b = 8;
    console.log(a * b); // Imprime: 40
}
multiplicar();

// Ámbito de las variables
function multiplicarGlobal() {
    console.log(aGlobal * bGlobal); // Usa las variables globales
}
let aGlobal = 5;
let bGlobal = 8;
multiplicarGlobal(); // Imprime: 40

// Función que devuelve un valor
function multiplicarReturn() {
    let a = 5;
    let b = 8;
    return a * b;
}
let Resultado = multiplicarReturn();
console.log(Resultado + 5); // Imprime: 45

// Función que devuelve un booleano
function validarDato() {
    if (aGlobal === 5) {
        return true;
    } else {
        return false;
    }
}
let dato = validarDato();
console.log(dato); // Imprime: true

// Parte 3: Diccionarios (objetos en JavaScript)

// Creación de un objeto (equivalente a un diccionario en Python)
let coche = {
    marca: 'Ford',
    color: 'rojo',
    modelo: 'sedan',
    placa: 'ROS227'
};

// Acceder al valor de una propiedad
console.log(coche['color']); // Imprime: rojo

// Cambiar el valor de una propiedad
coche['color'] = 'verde';
console.log(coche['color']); // Imprime: verde

// Acceder a otra propiedad
console.log(coche['marca']); // Imprime: Ford

// Cambiar el valor de otra propiedad
coche['marca'] = 'Renault';
console.log(coche['marca']); // Imprime: Renault

// Imprimir todo el objeto
console.log(coche); // Imprime el objeto completo

// Parte 4: Condicionales y concatenación de condiciones

let aCondicional = 2;
if (aCondicional === 2) {
    console.log('a vale 2');
} else {
    console.log('a es diferente de 2');
}

// Concatenar condiciones
let Nombre = 'Esteban';
let Edad = 28;
let Pais = 'Colombia';

if (Nombre === 'Esteban' && Edad === 28 && Pais === 'Colombia') {
    console.log('Su nombre es', Nombre, 'tiene', Edad, 'y es de', Pais);
} else if (Nombre === 'Esteban' && Edad !== 28) {
    console.log('Su nombre es Esteban y no tiene 28 años');
} else if (Nombre !== 'Esteban' && Edad === 28) {
    console.log('Su nombre no es Esteban y tiene 28 años');
} else {
    console.log('No se llama Esteban ni tiene 28 años');
}