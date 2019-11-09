const ORDENES = require('../models/models_ordenes');
const ENTREGAS = require('../models/models_entregas');

exports.insertarOrden = function(orden){
    return ORDENES.create({
        id: orden.id,
        idUsuarioMedico: orden.idUsuarioMedico,  
        idCentro: orden.idCentro,
        idBeneficiario: orden.idBeneficiario,
        idUsuarioAlta: orden.idUsuarioAlta,
        idProducto: orden.idProducto,
        fechaInicio: orden.fechaInicio,
        fechaFin: orden.fechaFin,
        descTratamiento: orden.descTratamiento,
        observaciones: orden.observaciones,
        estado: orden.estado,
        tipo: orden.tipo,
       })
}

exports.insertarEntregas = function(entregas){
    return ENTREGAS.create({
        id: entregas.id,
        idOrden: entregas.idOrden,  
        idProducto: entregas.idProducto,
        fechaEntrega: entregas.fechaEntrega,
        fechaRetiro: entregas.fechaRetiro,
        estadoEntrega: entregas.estadoEntrega,
       })
}