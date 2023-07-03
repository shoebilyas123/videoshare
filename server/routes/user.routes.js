const AuthController = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/auth/register", AuthController.register);

module.exports = router;
