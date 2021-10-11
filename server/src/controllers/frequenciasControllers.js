const { Op } = require("sequelize");
const { Frequencia, Aluno, FrequenciaAluno } = require("../db/models");
const createHttpError = require("http-errors");

async function createFrequencia(req, res, next) {
    const { data } = req.body;
    try {        
        const [ frequencia ] = await Frequencia.findOrCreate({ where: { data }});

        res.status(201).json(frequencia);
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

async function registrarFrequencia(req, res, next) {
    const alunoId = res.locals.userId;
    const frequenciaId  = req.params.id;

    console.log(alunoId, frequenciaId)

    try {                
        const frequencia = await Frequencia.findOne({ where: { id: frequenciaId } });

        if (!frequencia) {
            throw new createHttpError(404, "Frequência não encontrada!");
        }

        await FrequenciaAluno.findOrCreate({
            where: {
                [Op.and]: [{ alunoId }, { frequenciaId }]
            }                    
        });

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

module.exports = {
    createFrequencia,
    registrarFrequencia
}
