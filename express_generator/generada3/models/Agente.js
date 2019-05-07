/**
 * Created by david on 1/15/2018.
 */
'use strict'

var mongoose = require('mongoose');

var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
})


agenteSchema.statics.list= function (filter, limit, skip , cb) {
    var query= Agente.find(filter);
query.limit(limit);
// query.skip(skip);
    query.exec(cb)
}

var Agente= mongoose.model('Agente', agenteSchema);
