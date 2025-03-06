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