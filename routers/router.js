const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/paris', controller.getAllParis);
router.post('/paris', controller.addParis);

module.exports = router;
