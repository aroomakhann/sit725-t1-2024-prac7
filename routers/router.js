let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');


  router.post("/api/paris", (req, res) => {
    controller.postParis(req,res);
  });
  
    router.get("/api/paris", (req, res) => {
  controller.getAllParis(req,res);
  });

  router.get('/',(req,res)=>{
    res.render('index.html');})

  module.exports = router;