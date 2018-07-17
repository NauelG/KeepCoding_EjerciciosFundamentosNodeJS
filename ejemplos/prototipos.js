'use strict';

// Definimos una función constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;

    /*
    this.saluda = function() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
    */
}

// Construir un objeto
const luis = new Persona('Luis');

Persona.prototype.saluda = function() {
    console.log(`Hola, me llamo ${this.nombre}`)
}


luis.saluda();

// Herencia de persona -------

function Agente(nombre) {
    // Ejecutar el constructor de personas con el this local
    Persona.call(this, nombre);
}

// Heredar propiedades y métodos

Agente.prototype = new Persona('Soy un prototipo');

const smith = new Agente('Smith');

Agente.prototype.dispara = function() {
    // ...
}
smith.saluda();

// Heréncia múltiple

function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    }
    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva balas');
    }
}

// Los agentes van a heredar tanto de personas como de superheroes

Agente.prototype = Object.assign(Agente.prototype, new Superheroe());


smith.esquivaBalas();
smith.vuela();