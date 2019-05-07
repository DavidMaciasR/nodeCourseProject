/**
 * Created by david on 1/12/2018.
 */
'use strict';

var fs = require('fs');
var path = require('path');

var versionModulo = function (moduleName, callback) {
    var fichero = path.join('./node_modules', moduleName, 'package.json')

    fs.readFile(fichero, 'utf8', function (err, data) {
        if (err) {
            callback(err);
        }
        var packageJson;
        try {
            packageJson = JSON.parse(data);

        } catch (err) {
            callback('error al parsear ' + fichero + ' - ' + err)
            return;
        }
        if (packageJson && !packageJson.version) {
            callback('no se encuentra la etiqueta "version" en ' + fichero);
            return;
        }

        callback(null, packageJson.version);
    })
}

var modulo = 'chance';

versionModulo(modulo, function (err, version) {
    if (err) {
        console.log('Hubo un error: ', err);
        return
    }

    console.log('La version del modulo ' + modulo + ' es: ' + version);
})