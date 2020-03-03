const express = require('express');
const router = express.Router();
const procesosC=require('../Controllers/procesos.js');
router.get('/',procesosC.getVistaProcesos);

module.exports = router;