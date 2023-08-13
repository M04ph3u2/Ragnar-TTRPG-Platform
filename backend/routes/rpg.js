const express = require('express');
const router = express.Router();
const path = require('path');

const rpgController = require('../controllers/rpg.js');

router.get('/charaNames', rpgController.charaNames);

router.post('/charaNew', rpgController.charaNew);

router.post('/sheetPrint', rpgController.sheetPrint);

router.post('/classPrint', rpgController.classPrint);

router.get('/charaImg/:name', (req, res) => {
    const imgName = req.params.name;
    res.sendFile(path.join(__dirname, '..', 'static', 'rpg', 'chara_imgs', imgName));
});

module.exports = router;