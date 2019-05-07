/**
 * Created by david on 1/12/2018.
 */

'use strict';

console.log('empiezo')

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000)
}

function serie(lista, func, callback) {
    if (lista.length == 0) {
        callback();
        return
    } else {
        func(lista, function () {
            lista.shift()
            serie(lista, func, callback)
        })
    }
}

var lista= [1, 2, 3, 4, 5];

serie(lista, escribeTras2Segundos, function () {
    console.log('he terminado')
})