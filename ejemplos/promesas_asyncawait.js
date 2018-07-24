'use strict';

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ajo');
        // reject(new Error('Fatal'))
    });
}

async function conMasAjo(plato) {
    return plato + ' ajo';
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}



// Encadenar la ejecucion de las funciones

const paella = 'paella con';

// Para usar await tiene que ser dentro de una función con async
// IIFE
(async() => {
    let plato = await conArroz(paella);
    plato = await conAjo(plato);
    for (let i = 0; i < 100; i++) {
        plato = await conMasAjo(plato);
    }
    plato = await con(plato, 'pollo');
    console.log(plato);
})().catch(err => console.error('Hubo un error', err));