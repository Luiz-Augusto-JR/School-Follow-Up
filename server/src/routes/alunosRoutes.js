const express = require("express");
const router = express.Router();

const alunosControllers = require("../controllers/alunosControllers");

router.post("/", alunosControllers.createAluno);

router.delete("/:id", alunosControllers.deleteAluno);

router.get("/", alunosControllers.getAluno)

module.exports = router;
