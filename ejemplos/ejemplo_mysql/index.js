'use strict';

// Cargamos el driver 
const mysql = require('mysql');

// Creamos la conexión
const conexion = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Conectamos
conexion.connect(() => {
    // Lanzamos consulta
    conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
        if (err) {
            console.log('Hubo un error', err);
            process.exit(1);
        }
        console.log(rows);
    });
});