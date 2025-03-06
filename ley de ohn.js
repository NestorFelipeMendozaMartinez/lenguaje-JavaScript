// Solicitar datos al usuario
let Voltaje = parseInt(prompt('Ingrese el valor del voltaje del circuito: '));
let Resistencia = parseInt(prompt('Ingrese el valor de la resistencia del circuito: '));

// Calcular la intensidad (amperaje)
let Intensidad = Voltaje / Resistencia;

// Mostrar el resultado
console.log(`Al conectar un resistor de R ${Resistencia} ohm a una fuente de V ${Voltaje} voltios, circulará una corriente de ${Intensidad} amperios.`);