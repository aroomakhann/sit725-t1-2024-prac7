let client = require('../dbConnection');
let collection = client.db().collection('paris');

function postParis(paris, callback) {
    collection.insertOne(paris,callback).then(function(res, err){
        if(!err)
            callback(err,res);
    });
}

function getAllParis(callback) {
    collection.find().toArray().then(function(res, err){
        console.log(res);
        callback(err,res);
    });
}


module.exports = {postParis,getAllParis}