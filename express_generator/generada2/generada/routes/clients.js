/**
 * Created by david on 1/13/2018.
 */

'use-strict';

var express = require('express');

var router = express.Router();

router.use(function (req, res, next) {
    console.log('middleware de router clientes');
    res.send('respuesta');

    next();
})

router.get('/', function (req, res, next) {

    res.send('la respuesta a clients');
});

router.get('/:id', function (req, res, next) {
    res.send('he recibido el parametro: ' + req.params.id)
})

router.post('/', function (req, res, next) {
    console.log(req.body)
    res.json({recibido: req.body.num})
})


module.exports = router;