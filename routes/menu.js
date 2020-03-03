const express = require('express');
const router = express.Router();
const menuControl2=require('../Controllers/menuvista.js');
router.get('/:id', menuControl2.getRouteMenu);
// router.get('/lista_gerencias', menuControl2.lista_gerencias);

module.exports = router;