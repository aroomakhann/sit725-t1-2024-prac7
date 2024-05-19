let collection = require("../models/paris");

const postParis = (req, res) => {
  let paris = req.body;
  collection.postParis(paris, (err, result) => {
    if (!err) {
      res.json({ 
        statusCode: 201, 
        data: result, 
        message: "Successfull" });
    }
  });
};
const getAllParis = (req, res) => {
  collection.getAllParis((err, result) => {
    if (!err) {
      res.json({
        statusCode: 200,
        data: result,
        message: "Get Paris successfully",
      });
    }
  });
};

module.exports = {postParis, getAllParis};
