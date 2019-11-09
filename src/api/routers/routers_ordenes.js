const express = require("express");
const app = express();
const ordenes = require('../controllers/controllers_ordenes');
const  verificaRol  = require("../middlewares/verificaRolMiddleware");
const  verificaToken  = require("../middlewares/verificaTokenMiddleware");


/**
 * @swagger
 * /api/ordenes/all:
 *   get:
 *     tags:
 *       - Listar ordenes
 *     description: Busca en Mysql a todas las ordenes con entregas pendientes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: devuelve json con la busqueda
 *       400:
 *         description: devuelve json avisando del error
 *
 */

app.get("/all", function(req, res) {
    
});

/**
 * @swagger
 * /api/ordenes/orden:
 *   get:
 *     tags:
 *       - Buscar por numero de orden
 *     description: Busca en Mysql una orden en particular
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: devuelve json con la busqueda
 *       400:
 *         description: devuelve json avisando del error
 *
 */

app.get("/orden", function(req, res) {
    
});


/**
 * @swagger
 * /api/ordenes/alta:
 *   post:
 *     tags:
 *       - Alta de orden
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         schema:
 *           properties:
 *             idUsuarioMedico:
 *               type: integer
 *             idCentro:
 *               type: integer
 *             idBeneficiario:
 *               type: integer
 *             idUsuarioAlta:
 *               type: integer
 *             idProducto:
 *               type: integer
 *             fechaInicio:
 *               type: date
 *             fechaFin:
 *               type: date
 *             descTratamiento:
 *               type: string
 *             observaciones:
 *               type: string
 *             estado:
 *               type: string
 *             tipo:
 *               type: string
 *             entregas:
 *               type: object
 *         required:
 *           - idUsuarioMedico
 *           - idCentro
 *           - idBeneficiario
 *           - idUsuarioAlta
 *           - idProducto
 *           - fechaInicio
 *           - fechaFin
 *     responses:
 *       200:
 *         description: Orden creada con su respectivas entregas
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta accion
 *       400:
 *         description: Ocurrio un error al guardar el producto en Mysql
 */

app.post('/alta', verificaToken.verificaTokenMiddleware, verificaRol.esAdministradorMiddleware,
    function (req, res) {
    let result = ordenes.insertarOrden(req.body)
    result.then(orden => {
        
        for (let index = 0; index < req.body.entregas.length; index++) {
            const entregas = { idOrden: req.body.id, 
                               idProducto: req.body.idProducto,
                               fechaEntrega: req.body.entregas[index],
                               estadoEntrega: "Pendiente"}
            
            let entre = ordenes.insertarEntregas(entregas)
            /*if (entre == null){
                console.log(err);
                res.status(400).send('Error en el insert de Entregas' + err.message);*/
            }
            res.status(200).send("Se creo la orden con sus entregas correspondientes");
        
    }).catch(err => {
        console.log(err);
        res.status(400).send('Error en el insert de orden' + err.message);
    })
})

/**
 * @swagger
 * /api/ordenes/actualizar:
 *   post:
 *     tags:
 *       - Actualizar orden
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *              type: string
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             idUsuarioMedico:
 *               type: integer
 *             idCentro:
 *               type: integer
 *             idBeneficiario:
 *               type: integer
 *             idUsuarioAlta:
 *               type: integer
 *             idProducto:
 *               type: integer
 *             fechaInicio:
 *               type: date
 *             fechaFin:
 *               type: date
 *             descTratamiento:
 *               type: string
 *             observaciones:
 *               type: string
 *             estado:
 *               type: string
 *             tipo:
 *               type: string
  *         required:
 *           - idUsuarioMedico
 *           - idCentro
 *           - idBeneficiario
 *           - idUsuarioAlta
 *           - idProducto
 *           - fechaInicio
 *           - fechaFin
 *     responses:
 *       200:
 *         description: Orden actualizada en tabla Mysql con exito
 *       401:
 *         description: Token invalido, no tiene permisos para ejecutar esta accion
 *       400:
 *         description: Ocurrio un error al guardar el producto en Mysql
 */

app.post('/actualizar', function (req, res) {

});


module.exports = app;

