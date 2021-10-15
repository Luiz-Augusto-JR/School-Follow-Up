const { Aluno } = require("../db/models");
const createHttpError = require("http-errors");

async function createAluno(req, res, next) {
    const { nome, email, senha } = req.body;
    try {
        const [aluno, created] = await Aluno.findOrCreate({ 
            where: {
                email
            },
            defaults: { nome, senha } 
        });

        if (!created) {
            throw new createHttpError(409, "Aluno já cadastrado!");
        }

        res.status(201).json(aluno);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getAluno(req, res, next) {
    const alunoId = res.locals.userId;
    try {
       const aluno = await Aluno.findOne({ where: { id: alunoId }});

       res.json(aluno);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createAluno,
    getAluno
}
