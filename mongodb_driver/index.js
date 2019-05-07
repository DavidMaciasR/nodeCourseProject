/**
 * Created by david on 1/14/2018.
 */

'use-strict';

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/cursonode', function (err, db) {
    if (err) {
        return process.exit();
    }

    // console.log(db)

    db.collection('agentes').find().toArray(function (err, docs) {
        if (err) {
            return process.exit();
        }
        console.log(docs)
        db.close();
    });
})

