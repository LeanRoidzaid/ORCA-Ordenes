const Sequelize = require('sequelize')
const sequelize = require('../../config/dbConnection');

const Ordenes = sequelize.define('ordenes', {
     id: {type: Sequelize.INTEGER, primaryKey: true},
     idUsuarioMedico: Sequelize.INTEGER,  
     idCentro: Sequelize.INTEGER,
     idBeneficiario: Sequelize.INTEGER,
     idUsuarioAlta: Sequelize.INTEGER,
     idProducto: Sequelize.INTEGER,
     fechaInicio: Sequelize.DATE,
     fechaFin: Sequelize.DATE,
     descTratamiento: Sequelize.STRING,
     observaciones: Sequelize.STRING,
     estado: Sequelize.STRING,
     tipo: Sequelize.STRING,
     },{timestamps: false
  });
module.exports = Ordenes; 