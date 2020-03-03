const express = require('express');
const router = express.Router();
const indicadoresController=require('../Controllers/indicadores.js');
router.get('/ventas', indicadoresController.getVentas);
router.get('/sin_accidentes', indicadoresController.getSinAccidentes);
router.get('/cobertura', indicadoresController.getCobertura);
router.get('/clientes', indicadoresController.getClientes);

module.exports = router;