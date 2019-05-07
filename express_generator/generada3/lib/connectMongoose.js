/**
 * Created by david on 1/15/2018.
 */

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
})

db.once('open', function () {
    console.info('Conectado a mongodb')
})

mongoose.connect('mongodb://localhost/cursonode')