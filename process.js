/**
 * Created by david on 1/13/2018.
 */
'use strict';

var info= {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
}

console.log('entro en '+JSON.stringify(info))

process.on('exit', function () {
    console.log('Adios')
})

process.exit(0)