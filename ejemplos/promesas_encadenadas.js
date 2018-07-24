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

conArroz(paella)
    .then(conAjo)
    .then(conMasAjo)
    .then(plato => { return con(plato, 'marisco'); })
    .then(plato => { console.log(plato); });