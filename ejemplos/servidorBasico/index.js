// Cargamos la libreria http
const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// Definimos un servidor
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.end(`wake up, ${chance.name()}`);
});

// Arrancamos el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');