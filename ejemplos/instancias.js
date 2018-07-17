'use strict';

// Crear una función como constructor de objetos
function Fruta(nombre) {
    // Usamos this para poner cosas al objeto que estamos creando
    this.nombre = nombre;

    this.setNombre = function(valor) {
        this.nombre = valor;
    }
}

// utilizamos el constructor para crear un objeto
const limon = new Fruta('Limon');

console.log(limon);