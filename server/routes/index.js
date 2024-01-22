const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/index.js')

router.post('/signup', signup);

module.exports = router;