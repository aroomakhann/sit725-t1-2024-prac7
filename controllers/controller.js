let collection = require("../models/cat");

const postCat = (req, res) => {
  let cat = req.body;
  collection.postCat(cat, (err, result) => {
    if (!err) {
      res.json({ 
        statusCode: 201, 
        data: result, 
        message: "Successfull" });
    }
  });
};
const getAllCats = (req, res) => {
  collection.getAllCats((err, result) => {
    if (!err) {
      res.json({
        statusCode: 200,
        data: result,
        message: "Get cats successfully",
      });
    }
  });
};

module.exports = {postCat, getAllCats};
