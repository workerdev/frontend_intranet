const express = require('express');
const router = express.Router();
const empresaController=require('../Controllers/empresa.js');

router.get('/organigrama', empresaController.getOrganigrama);
router.get('/comite_etica', empresaController.getComiteEtica);
router.post('/enviar_reclamo', empresaController.postEnviarReclamo);
router.get('/organigrama/:id', empresaController.getRouteOrganigrama);

module.exports = router;