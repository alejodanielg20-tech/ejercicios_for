function listarNumeros() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function ListarNumerosReverza() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

function listarPares() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

function Listarimpares() {
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }
}

function ejecutar(numejercicio) {
    switch (numejercicio) {
        case 1: listarNumeros();      break;
        case 2: ListarNumerosReverza(); break;
        case 3: listarPares();        break;
        case 4: Listarimpares();      break;
    }
}