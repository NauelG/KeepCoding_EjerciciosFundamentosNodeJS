'use strict'

console.log('Empiezo');

// Función que escribe un texto en la consola tras 2 segundos

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

//  Bucle asincrono en serie

function serie(n, funcionALlamar, callback) {
    funcionALlamar('texto' + n, () => {
        if (n == 0) {
            callback()
            return
        }
        n -= 1;
        serie(n, funcionALlamar, callback)
    });
}

// Ejecuta la funcion 5 veces y al finalizar llama al callback

serie(5, escribeTras2Segundos, () => {
    console.log('Fin');
});



// console.log('Fin');