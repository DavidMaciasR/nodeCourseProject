/**
 * Created by david on 1/15/2018.
 */
'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Agente = mongoose.model('Agente')

router.get('/', function (req, res, next) {

    var name = req.query.name;
    var age = req.query.age;

    var limit = parseInt(req.query.limit) || null;
    // var skip = parseInt(req.query.skip) || null;
    var filter = {};
    if (name) {
        filter.name = name;
    }
    if (typeof age !== undefined) {
        filter.age = age;
    }

    console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}} filter: }}}}}}}}}}}}' + filter);
    Agente.list({}, limit, function (err, list) {
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, list: list})
    })
})

router.post('/', function (req, res, next) {
    var agente = new Agente(req.body);
    agente.save(function (err, agenteGuardado) {
        if (err) {
            next(err);
        }
        res.json({ok: true, agente: agenteGuardado})
    })
})

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    Agente.update({_id: id}, req.body, function (err, agente) {
        if (err) {
            next(err);
        }

        res.json({ok: true, agente: agente})
    })
})

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Agente.remove({_id: id}, function (err, result) {
        if (err) {
            return next(err);
        }
        res.json({ok: true, result: result});
    })
})


module.exports = router;