const { Frequencia } = require("../db/models");
const createHttpError = require("http-errors");

async function createFrequencia(req, res, next) {
    const { data } = req.body;
    try {
        const [frequencia, created] = await Frequencia.find({ 
            where: { data }     
        });

        if (!created) {
            throw new createHttpError(409, "já cadastrado!");
        }

        res.status(201).json(frequencia);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createFrequencia
}