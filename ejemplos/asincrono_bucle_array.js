'use strict'

const async = require('async');

console.log('Empiezo');

// Función que escribe un texto en la consola tras 2 segundos

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

//  Bucle asincrono en serie

function serie(arr, funcionALlamar, callback) {
    funcionALlamar('texto' + arr.shift(), () => {
        if (arr.length == 0) {
            callback()
            return
        }
        serie(arr, funcionALlamar, callback)
    });
}

// Ejecuta la funcion 5 veces y al finalizar llama al callback

serie([1, 2, 'tres', 4, 5], escribeTras2Segundos, () => {
    console.log('Fin');
});



// console.log('Fin');

async.concatSeries([1, 2, 'tres', 4, 5], escribeTras2Segundos, () => {
    console.log('Fin');
})