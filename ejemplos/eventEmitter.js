'use strict'

const EventEmitter = require('events');

// ! Creamos un emisor de eventos
const emisor = new EventEmitter();

// ! Subscribirnos a eventos
emisor.on('llamada-telefono', () => {
    console.log('ring ring');
});

emisor.once('llamada-telefono', (data) => {
    console.log('brr brr', data);
});

// ! Emitir eventos
emisor.emit('llamada-telefono', { nombre: 'Madre' });