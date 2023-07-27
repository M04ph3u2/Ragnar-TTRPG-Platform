const express = require('express');
const router = express.Router();

const rpgRouter = require('../routers/rpg.js');

router.post('/rpg', rpgRouter);

module.exports = router;