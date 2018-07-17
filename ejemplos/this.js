'use strict'

// Constructor de objetos

function Coche(ruedas) {
    this.ruedas = ruedas;

    this.cuantasRuedas = function() {
        console.log(`Tiene ${this.ruedas} ruedas`);
    }
}

const todoterreno = new Coche(4);

// todoterreno.cuantasRuedas();

// con el método bind le forzamos un this concreto a un método
setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);

/*
const numRuedas = todoterreno.cuantasRuedas;
// si no hay nada a la izquierda del punto que precede a un método, this es undefined
numRuedas();
*/