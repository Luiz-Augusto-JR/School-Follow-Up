const express = require("express");
const router = express.Router();

const authentication = require("../middlewares/authMiddleware");
const alunosControllers = require("../controllers/alunosControllers");

router.post("/", alunosControllers.createAluno);
router.get("/me", authentication(["aluno"]), alunosControllers.getAluno);

module.exports = router;
