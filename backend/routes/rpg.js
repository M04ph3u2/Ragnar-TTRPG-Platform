const express = require('express');
const router = express.Router();

const rpgController = require('../controllers/rpg.js');

router.get('/charaNames', rpgController.charaNames);

router.post('/charaNew', rpgController.charaNew);

router.post('/sheetPrint', rpgController.sheetPrint);

module.exports = router;