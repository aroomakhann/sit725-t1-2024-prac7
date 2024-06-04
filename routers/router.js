let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');


  router.post("/api/cat", (req, res) => {
    controller.postCat(req,res);
  });
  
router.get("/api/cat", (req, res) => {
  controller.getAllCats(req,res);
  });

  module.exports = router;