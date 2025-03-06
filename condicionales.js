// Solicitar al usuario que seleccione una figura
console.log('Seleccione la figura para calcular su área:\n\n1 para rombo\n\n2 para rectángulo\n\n3 para cuadrado\n\n4 para trapecio\n\n:');
let Figura = prompt();

const Pi = 3.1416;
const constante = 2;

switch (Figura) {
    case '1': // Rombo
        let Dmayor = parseInt(prompt('Ingresa el valor de la diagonal mayor: '));
        let Dmenor = parseInt(prompt('Ingresa el valor de la diagonal menor: '));
        let AreaRombo = (Dmayor * Dmenor) / constante;
        console.log('El área del rombo es:', AreaRombo);
        break;

    case '2': // Rectángulo
        let Largo = parseInt(prompt('Ingresa el valor del largo del rectángulo: '));
        let Ancho = parseInt(prompt('Ingresa el valor del ancho del rectángulo: '));
        let AreaRectangulo = Largo * Ancho;
        console.log('El área del rectángulo es:', AreaRectangulo);
        break;

    case '3': // Cuadrado
        let Lado = parseInt(prompt('Ingresa el valor del lado del cuadrado: '));
        let AreaCuadrado = Lado * Lado;
        console.log('El área del cuadrado es:', AreaCuadrado);
        break;

    case '4': // Trapecio
        let Bmayor = parseInt(prompt('Ingresa el valor de la base mayor: '));
        let Bmenor = parseInt(prompt('Ingresa el valor de la base menor: '));
        let H = parseInt(prompt('Ingresa la altura del trapecio: '));
        let AreaTrapecio = ((Bmayor + Bmenor) * H) / 2;
        console.log('El área del trapecio es:', AreaTrapecio);
        break;

    default:
        console.log('Opción no válida.');
        break;
}