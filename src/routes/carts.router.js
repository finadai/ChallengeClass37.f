const express = require('express');
const router = express.Router();
const authorize = require('../middleware/auth');
const CartController = require('../controllers/cart.controller');

router.post('/:cid/purchase', authorize('user'), CartController.purchase);

module.exports = router;
