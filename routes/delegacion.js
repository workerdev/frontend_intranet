const express = require('express');
const router = express.Router();
const delegacionController=require('../Controllers/delegacion.js');


router.get('/listarCorrelativo', delegacionController.listarDelegacion);



module.exports = router;