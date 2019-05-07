/**
 * Created by david on 1/12/2018.
 */
'use strict';

console.log('empiezo')

 function escribeTras2Segundos(texto, callback) {
     setTimeout(function(){
         console.log(texto);
         callback();
     }, 2000)
 }

escribeTras2Segundos('texto 1', function () {
    console.log('fin1')
    escribeTras2Segundos('texto 2', function () {
        console.log('fin2')
    })
})



