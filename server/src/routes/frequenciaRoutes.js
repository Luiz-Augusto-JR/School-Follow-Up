const express = require("express");
const router = express.Router();

const frequenciasControllers = require("../controllers/frequenciasControllers");

router.post("/", frequenciasControllers.createFrequencia);

module.exports = router;