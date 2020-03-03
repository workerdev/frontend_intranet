const express = require('express');
const router = express.Router();
const correlativoController=require('../Controllers/correlativo.js');


router.post('/listarCorrelativo', correlativoController.listarCorrelativo);
router.post('/formSelectCorrelativo', correlativoController.formSelectCorrelativo);
router.post('/eliminarCorrelativo', correlativoController.eliminarCorrelativo);
router.post('/gestionCorrelativo', correlativoController.gestionCorrelativo);
router.post('/correlativo_gestionfiltro', correlativoController.gestionFiltroCorrelativo);
router.post('/filterCorrelativo', correlativoController.filterCorrelativo);

router.post('/datos_correlativo', correlativoController.dataCorrelative);
router.post('/form_datos', correlativoController.formDatos);
router.post('/insertarCorrelativo', correlativoController.insertarCorrelativo);
router.post('/editarCorrelativo', correlativoController.editarCorrelativo);
router.post('/updateCorrelativo', correlativoController.updateCorrelativo);
router.post('/eliminarCorrelativo', correlativoController.eliminarCorrelativo);
router.post('/obtenerArchivo', correlativoController.obtenerArchivo);


module.exports = router;