// Definir los equipos
let Equipos = [
    '1. Países Bajos vs. Estados Unidos.',
    '2. Argentina vs. Australia.',
    '3. Francia vs. Polonia.',
    '4. Inglaterra vs. Senegal.',
    '5. Japón vs. Croacia.',
    '6. Brasil vs. Corea del Sur.',
    '7. Marruecos vs. España.',
    '8. Portugal vs. Suiza.'
];

// Objeto para almacenar los resultados
let Resultados = {};

console.log('Mundial Qatar 2022\n\nOctavos de final\n');

// Función para determinar el ganador
function GanadoresOctavos(Marcador, Equipo1, Equipo2) {
    let Goles = Marcador.split(' - ');
    let Goles_1 = parseInt(Goles[0]);
    let Goles_2 = parseInt(Goles[1]);
    return Goles_1 > Goles_2 ? Equipo1 : Equipo2;
}

// Solicitar los marcadores y almacenar los resultados
for (let Partidos of Equipos) {
    console.log(Partidos);
    let Marcador = prompt('Ingrese el marcador final (Formato: 2-1):');
    Resultados[Partidos] = Marcador;
}

console.log('Ganadores de la fase de grupos');

// Mostrar los resultados
for (let [Partidos, Marcador] of Object.entries(Resultados)) {
    console.log(Partidos, Marcador);
}