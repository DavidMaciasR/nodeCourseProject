/**
 * Created by david on 1/12/2018.
 */
/**
 * Created by david on 1/12/2018.
 */

'use strict';

var async= require('async');

console.log('empiezo')

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000)
}


var lista= [1, 2, 3, 4, 5];


async.eachSeries(lista, escribeTras2Segundos, function () {
    console.log('he terminado')
})