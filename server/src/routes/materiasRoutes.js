const express = require("express");
const router = express.Router();

const authentication = require("../middlewares/authMiddleware");
const materiasControllers = require("../controllers/materiasControllers");

router.get("/", authentication(["aluno"]), materiasControllers.getMateriasOfStudent);
router.post("/", authentication(["escola"]), materiasControllers.createMateria);

module.exports = router;