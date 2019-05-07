/**
 * Created by david on 1/13/2018.
 */
'use strict';

function creaClosure(valor) {
    return function (valor2) {
        return valor+ valor2;
    }
}

var suma5= creaClosure(5);

console.log(suma5(10))