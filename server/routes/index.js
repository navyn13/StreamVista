const express = require("express");
const router = express.Router();
const { signup, login, watch } = require("../controllers/index.js");

router.post("/signup", signup)
.post("/login", login)
.post("/watch", watch);

module.exports = router;