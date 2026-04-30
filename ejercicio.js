function listarNumeros() {
    for (let i = 0; i < 3; i++){
        console.log(i);
    }
}

function ejecutar(numejercicio){
    if (numejercicio === 1) {
        listarNumeros();
        }else if (numejercicio === 2) {
            ListarNumerosReverza();
            }else if (numejercicio === 3) {
                listarPares();
            }
}



function ListarNumerosReverza() {
    for (let i= 3; i > 0; i--){
        console.log(i);
    }
}

function listarPares() {
    for (let i = 0; i < 10;i+=2){
        console.log(i);
    }
}