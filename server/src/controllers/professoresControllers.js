const { Professor } = require("../db/models");
const createHttpError = require("http-errors");

async function createProfessor(req, res, next) {
    const { nome, email, senha, materia } = req.body;
    try {
        const [professor, created] = await Professor.findOrCreate({ 
            where: {
                email
            },
            defaults: { nome, senha, materia } 
        });

        if (!created) {
            throw new createHttpError(409, "E-mail já cadastrado!");
        }

        res.status(201).json(professor);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createProfessor
}