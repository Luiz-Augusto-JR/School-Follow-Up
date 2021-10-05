const { Materia } = require("../db/models");
const createHttpError = require("http-errors");

async function createMateria(req, res, next) {
    const { nome, professorId } = req.body;
    try {
        const [materia, created] = await Materia.findOrCreate({ 
            where: {
                nome
            },
            defaults: {
                professor_id: professorId
            }
        });

        if (!created) {
            throw new createHttpError(409, "Matéria já cadastrada");
        }

        res.status(201).json(materia);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getMateriasOfStudent(req, res, next) {
    const alunoId = res.locals.userId;

    try {
        const materias = Materia.findAll({ where:  { aluno_id: alunoId } })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createMateria,
    getMateriasOfStudent
}