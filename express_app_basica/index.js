/**
 * Created by david on 1/13/2018.
 */
'use strict';

var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'))

app.get('/', function (req, res) {
    console.log('peticion a /')
    res.send('Hello world')
})

var server = app.listen(3000, function () {
    console.log('el servidor esta arrancado en el puerto: ' + server.address().port)
})