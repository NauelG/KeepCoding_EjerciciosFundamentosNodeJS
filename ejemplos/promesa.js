'use strict';

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const promesa = sleep(2000);

console.log(promesa);

promesa.then(() => {
    console.log('Promesa completada');
}).catch((err) => { //Función que se ejecuta si la promesa devuelve el reject
    console.log('Promesa rechazada', err)
});