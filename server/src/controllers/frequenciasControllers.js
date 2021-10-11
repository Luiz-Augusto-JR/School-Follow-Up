const { Op } = require("sequelize");
const { Frequencia, sequelize } = require("../db/models");
const createHttpError = require("http-errors");
const QRCode = require("qrcode");

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

async function obterQR(req, res, next) {
    const {img} = req.body;
    try {
    const [img, created] = await img.read(fs.readFileSync('./qr_photo.png'));
    
    const qr = new QRReader();
      const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });

    res.json(obterQR);
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

module.exports = {
    createFrequencia,
    obterQR
}
