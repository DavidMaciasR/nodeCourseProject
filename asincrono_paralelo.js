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
var acabados =0;

for( var i=0; i<5;i++){
    escribeTras2Segundos('texto'+i, function () {
        acabados++;
        if(acabados>=5){
            console.log('fin')
        }
    })
}