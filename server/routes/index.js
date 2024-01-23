const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/index.js");

router.post("/signup", signup)
.post("/login", login);

module.exports = router;