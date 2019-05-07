/**
 * Created by david on 1/13/2018.
 */


'use strict';

var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('llamar telefono', sonarTelefono)
myEmitter.on('llamar telefono', vibrarTelefono)

function sonarTelefono() {
    console.log('ring yo!')
}

function vibrarTelefono() {
    console.log('brr motherfuckah');
}

myEmitter.emit('llamar telefono', 'madre');