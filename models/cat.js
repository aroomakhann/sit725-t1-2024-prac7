const { client } = require('../dbConnection');
const collection = client.db().collection('paris');;

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
  }
  
  function getAllCats(callback) {
    collection.find({}).toArray(callback);
  }

module.exports = {postCat, getAllCats};