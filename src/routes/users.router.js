const express = require('express');
const router = express.Router();
const premiumUserController = require('../controllers/premiumUser.controller');

router.post('/premium/:uid', premiumUserController.togglePremium);

module.exports = router;
