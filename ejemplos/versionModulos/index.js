'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Función que averigua la versión de un módulo instalado localmente.
 * @param {string} nombreModulo 
 * @param {function} callback 
 */

function versionModulo(nombreModulo, callback) {
    // Calcular ruta al package.json
    const fichero = path.join(__dirname, 'node_modules', nombreModulo, 'package.json');

    // Leer contenido de package.json
    fs.readFile(fichero, (err, datos) => {
        if (err) {
            callback(err);
            return;
        }

        // Parsear contenido

        let packageJson
        try {
            packageJson = JSON.parse(datos);
        } catch (err) {
            callback(err);
            // El return corta la ejecución del proceso
            return;
        }

        // Obtener la versión y devolverla
        // Devolvemos null al principio para decirle que el error es null (el callback espera ese error)
        callback(null, packageJson.version);
    });

};

versionModulo('chance', (err, version) => {
    if (err) {
        console.error('Hubo un error:', err);
        process.exit(1);
    }
    console.log('LA versión del módulo es:', version);

})