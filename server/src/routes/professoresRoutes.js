const express = require("express");
const router = express.Router();

const authentication = require("../middlewares/authMiddleware");
const professoresControllers = require("../controllers/professoresControllers");

router.post("/", authentication(["escola"]), professoresControllers.createProfessor);

module.exports = router;