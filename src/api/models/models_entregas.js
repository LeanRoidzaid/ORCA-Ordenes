const Sequelize = require('sequelize')
const sequelize = require('../../config/dbConnection');

const Entregas = sequelize.define('entregas', {
     id: {type: Sequelize.INTEGER, primaryKey: true},
     idOrden: Sequelize.INTEGER,  
     idProducto: Sequelize.INTEGER,
     fechaEntrega: Sequelize.DATE,
     fechaRetiro: Sequelize.DATE,
     estadoEntrega: Sequelize.STRING,
     },{timestamps: false
  });
module.exports = Entregas; 