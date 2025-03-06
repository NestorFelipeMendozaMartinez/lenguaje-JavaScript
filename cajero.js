class Usuario {
    constructor(nombre, pin, saldo) {
        this.nombre = nombre;
        this.pin = pin;
        this.saldo = saldo;
    }
}

class Banco {
    constructor(usuarios = []) {
        this.usuarios = usuarios;
    }

    autenticar(nombre, pin) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.pin === pin) {
                    console.log('Estás Logeado');
                    return true;
                } else {
                    console.log('Pin o nombre incorrecto');
                    return false;
                }
            }
        }
        console.log('El usuario no existe');
        return false;
    }

    sacarDinero(nombre, saldo) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre) {
                if (usuario.saldo < saldo) {
                    console.log('Saldo insuficiente');
                    break;
                } else if (usuario.saldo >= saldo) {
                    usuario.saldo -= saldo;
                    console.log('El saldo disponible es', usuario.saldo);
                }
            }
        }
    }
}

const ana = new Usuario('Ana', 9872, 450);
const pablo = new Usuario('Pablo', 5555, 200);
const rodrigo = new Usuario('Rodrigo', 2222, 900);

const banco = new Banco([ana, pablo, rodrigo]);

while (true) {
    console.log('Bienvenido al Banco, por favor, identifíquese.');
    console.log('Introduzca el nombre.');
    const nombre = prompt();
    console.log('Introduzca el pin');
    const pin = parseInt(prompt());

    if (banco.autenticar(nombre, pin)) {
        while (true) {
            console.log('Por favor, elija una de estas opciones:\n 1. Sacar dinero\n 2. Terminar sesión.');
            const opcion = prompt();

            if (opcion === '1') {
                console.log('Introduce cantidad a sacar.');
                const saldo = parseInt(prompt());
                banco.sacarDinero(nombre, saldo);
            } else if (opcion === '2') {
                console.log('Saliendo del sistema.');
                break;
            } else {
                console.log('Opción incorrecta. Por favor, introduzca otra opción.');
            }
        }
    } else {
        console.log('Usuario no autenticado. Por favor, introduzca nombre y pin correctos.');
    }
}