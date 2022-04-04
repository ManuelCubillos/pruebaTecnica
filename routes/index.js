const express = require('express');

const router = express.Router();

const clientesController = require('../controllers/clientesController');
const vehiculosController = require('../controllers/vehiculosController');
const vendedoresController = require('../controllers/vendedoresController');
const ventasController = require('../controllers/ventasController');

module.exports= function(){
    // post: /clientes
    router.post('/clientes', clientesController.add );
    //get: / clientes
    router.get('/clientes', clientesController.list );
    //get: /clientes/:id
    router.get('/clientes/:id', clientesController.show );
    //put:/clientes/:id
    router.put('/clientes/:id', clientesController.update );
    //delete:/clientes/:id
    router.delete('/clientes/:id', clientesController.delete );

    //Vehiculos
    router.post('/vehiculos', vehiculosController.add);
    router.get('/vehiculos', vehiculosController.list);
    router.get('/vehiculos/:id', vehiculosController.show);
    router.put('/vehiculos/:id', vehiculosController.update);
    router.delete('/vehiculos/:id', vehiculosController.delete);

    //Vendedores
    router.post('/vendedores', vendedoresController.add);
    router.get('/vendedores', vendedoresController.list);
    router.get('/vendedores/:id', vendedoresController.show);
    router.put('/vendedores/:id', vendedoresController.update);
    router.delete('/vendedores/:id', vendedoresController.delete);

    //Ventas
    router.post('/ventas', ventasController.add);
    router.get('/ventas', ventasController.list);
    router.get('/ventas/cliente/:id', ventasController.byCliente )
    router.get('/ventas/vendedor/:id', ventasController.byVendedor )
    router.get('/ventas/:id', ventasController.show);
    router.put('/ventas/:id', ventasController.update);
    router.delete('/ventas/:id', ventasController.delete);

    return router;
};



