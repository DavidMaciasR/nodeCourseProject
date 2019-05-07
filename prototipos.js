/**
 * Created by david on 1/13/2018.
 */

'use strict';

function Persona(nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');


Persona.prototype.saluda = function () {
    console.log('Hola, soy ' + this.name);
}

console.log(persona.name)

persona.saluda()


function Agente(nombre) {
    Persona.call(this, nombre);
}

Agente.prototype= new Persona('soy un prototicpo');

var agente= new Agente('Smith');

agente.saluda()

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona
)

function Superheroe() {
    this.vuela= function () {
        console.log(this.name+' vuela');
    }

    this.esquivaBalas= function () {
        console.log(this.name+' esquiva balas');
    }
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela()
agente.esquivaBalas();
