const { client } = require('../dbConnection');
const collection = client.db().collection('paris');

async function getAllParis() {
    try {
        return await collection.find({}).toArray();
    } catch (error) {
        console.error("Error retrieving data:", error);
        throw error;
    }
}

async function addParis(name, desc, img) {
    try {
        return await collection.insertOne({ name, desc, img });
    } catch (error) {
        console.error("Error adding paris:", error);
        throw error;
    }
}

module.exports = { getAllParis, addParis };
