const express = require("express");
const router = express.Router();

const alunosControllers = require("../controllers/alunosControllers");

router.post("/", alunosControllers.createAluno);

module.exports = router;