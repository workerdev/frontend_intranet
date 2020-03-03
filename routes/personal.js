const express = require('express');
const router = express.Router();
const personalController=require('../Controllers/personal.js');
router.get('/directorio', personalController.getDirectorioPersonal);
router.get('/buzon', personalController.getBuzonSugerencia);
router.post('/enviar_sugerencia', personalController.postEnviarSugerencia);
router.get('/turnos', personalController.getTurnoPersonal);

module.exports = router;