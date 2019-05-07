/**
 * Created by david on 1/13/2018.
 */

'use strict';

function creaAgente(nombre) {
    var edad = '0';
    return {
        setEdad: function (nuevaEdad) {
            edad = nuevaEdad;
        },
        leeNombre: function () {
            return nombre
        },
        leeEdad: function () {
            return edad;
        },
        setNombre: function (nuevoNombre) {
            nombre = nuevoNombre;
        },
        escribe: function () {
            console.log('Soy '+nombre+' y tengo '+edad+' años');
        }
    }
}

var smith = creaAgente('Smith');
smith.setEdad(33);

var jones = creaAgente('Jones');
jones.setEdad(44);

console.log(smith.leeNombre() + ' ' + smith.leeEdad())

setTimeout(smith.escribe, 200)