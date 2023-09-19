const express = require('express');
const router = express.Router();
const path = require('path');

const rpgController = require('../controllers/rpg.js');

router.get('/list', rpgController.list);

router.post('/print', rpgController.print);

router.post('/charaNew', rpgController.charaNew);

router.get('/charaImg/:name', (req, res) => {
    const imgName = req.params.name;
    res.sendFile(path.join(__dirname, '..', 'static', 'rpg', 'chara_imgs', imgName));
});

module.exports = router;