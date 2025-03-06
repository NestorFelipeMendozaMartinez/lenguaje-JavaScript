// Solicitar datos al usuario
let A = parseInt(prompt('Ingrese valor:'));
let B = parseInt(prompt('Ingrese valor:'));

// Operaciones matemáticas
let suma = A + B;
console.log('La suma de los números es:', suma);

let res = A - B;
console.log('La resta de los números es:', res);

let multi = A * B;
console.log('La multiplicación de los números es:', multi);

let div = A / B;
console.log('La división de los números es:', div);

// Comparaciones
let igual = A === B;
console.log('¿El número es igual?', igual);

let mayor = A > B;
console.log('¿El número mayor es A?', mayor);

if (A > B) {
    console.log('El número mayor es:', A);
    console.log('El número menor es:', B);
} else if (A < B) {
    console.log('El número mayor es:', B);
    console.log('El número menor es:', A);
} else {
    console.log('Ambos números son iguales:', A);
}