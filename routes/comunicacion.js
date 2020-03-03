const express = require('express');
const router = express.Router();
const comunicacionController=require('../Controllers/comunicacion.js');

/* TODO: Obtener ultimo tipo y ultimo id de noticia */
router.get('/NoticiasEmpresa', comunicacionController.getNoticiasEmpresa);

router.get('/NoticiasPrensa', comunicacionController.getNoticiasPrensa);
router.get('/ResponsabilidadSocial', comunicacionController.getResponsabilidadSocial);
router.get('/Galeria', comunicacionController.getGaleria);
router.get('/galeria/:id', comunicacionController.getImagenes);

/* TODO: obtener el titulo, tipo y contenido (todos para ocultar, mostrar)*/
router.get('/NoticiaEmpresa/:id_categoria/:id_nombre', comunicacionController.getNoticiaEmpresaContenido);
/* TODO: enviar le ultimo ID de noticia*/
router.get('/NoticiaPrensa/:id_categoria/:id_nombre', comunicacionController.getNoticiaPrensaContenido);

/* TODO: visita a noticia*/
router.get('/Noticia/:id_noticia',comunicacionController.getNoticia)

module.exports = router;