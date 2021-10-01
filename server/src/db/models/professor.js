'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  Professor.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "E-mail inválido" }
      }
    },
    materia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(senha) {
        this.setDataValue("senha", bcrypt.hashSync(senha, 10));
      }
    }
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};