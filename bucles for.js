// Definir un arreglo de nombres
let nombres = ['Esteban', 'Hans', 'Jhon', 'Juan Pablo \n\n'];

// Recorrer el arreglo de nombres e imprimirlos
for (let nombre of nombres) {
    console.log(nombre);
}

// Diccionarios (objetos en JavaScript)
let Personas = []; // Lista vacía que se llenará con objetos

let a = { nombre: 'Esteban', Edad: 28 };
let b = { nombre: 'Hans', Edad: 27 };
let c = { nombre: 'Jhon', Edad: 41 };
let d = { nombre: 'Juan Pablo', Edad: 23 };

// Agregar objetos al arreglo
Personas.push(a); // push: permite agregar elementos al arreglo
Personas.push(b);
Personas.push(c);
Personas.push(d);

// Recorrer el arreglo de personas e imprimir sus datos
for (let persona of Personas) {
    console.log(persona.nombre, persona.Edad);
}

// Operar con valores de diccionarios (objetos)