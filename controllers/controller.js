const Paris = require('../models/paris');

async function getAllParis(req, res) {
    try {
        const paris = await Paris.getAllParis();
        res.json({ statusCode: 200, data: paris, message: 'Get all paris success' });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
}

async function addParis(req, res) {
    try {
        const { name, desc, img } = req.body;
        await Paris.addParis(name, desc, img);
        res.json({ statusCode: 200, message: 'Paris added successfully' });
    } catch (error) {
        console.error("Error adding paris:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
}

module.exports = { addParis, getAllParis };
