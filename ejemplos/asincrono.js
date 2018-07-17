'use strict'

console.log('Empiezo');

// Función que escribe un texto en la consola tras 2 segundos

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2Segundos('texto1', () => {
    escribeTras2Segundos('texto2', () => {
        console.log('Fin');
    });
});




// console.log('Fin');