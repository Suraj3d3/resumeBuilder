var express = require("express");
var router = express.Router();
const { home, generateResume } = require("../controllers/resume");
const { signUp } = require("../controllers/auth");

router.get("/", home);

router.post("/resume", generateResume);

router.post("/signup", signUp);

module.exports = router;
