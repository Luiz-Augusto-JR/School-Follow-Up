const { Frequencia } = require("../db/models");
const createHttpError = require("http-errors");
const express = require("express");
const app = express();
const bp = require("body-parser");
const qr = require("qrcode")

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

async function lerScanner(req, res, next) {
    const {img} = req.body;
    try {
    const [img, created] = await jimp.read(fs.readFileSync('./qr_photo.png'));
  
    const qr = new QRReader();
      const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });

    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

module.exports = {
    createFrequencia,
    lerScanner

}
