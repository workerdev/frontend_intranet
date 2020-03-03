const express = require('express');
const router = express.Router();
const principalControl=require('../Controllers/principal.js');
const menuVistasListas=require('../Controllers/menuvista')

router.get('/', function(req, res, next) {
    res.render('index/index');
});
router.get('/principal', principalControl.getIndex);
router.get('/principal2', principalControl.getIndex2);
router.get('/catalogo', principalControl.getCatalogo);

router.post('/loginBack', menuVistasListas.loginBackend)
router.post('/listar_cobertura', menuVistasListas.listar_cobertura)
router.get('/lista_gerencias', menuVistasListas.lista_gerencias);
router.get('/lista_ord_procesos', menuVistasListas.lista_ord_procesos);
router.get('/lista_crocm', menuVistasListas.lista_crocm);
router.get('/lista_audhlg', menuVistasListas.lista_audhlg);
router.get('/lista_hallazgo', menuVistasListas.lista_hallazgo);
router.get('/lista_fichacargo', menuVistasListas.lista_fichacargo);
router.get('/lista_accion', menuVistasListas.lista_accion);
router.get('/lista_eficacia', menuVistasListas.lista_eficacia);
router.get('/lista_fortaleza', menuVistasListas.lista_fortaleza);
router.get('/consult_crocm', menuVistasListas.consult_crocm);
router.post('/detalle_procesos', menuVistasListas.detalle_procesos);
router.post('/detalle_frmdoc', menuVistasListas.detalle_frmdoc);
router.post('/detalle_fichacargo', menuVistasListas.detalle_fichacargo);
router.post('/detalle_docproc', menuVistasListas.detalle_docproc);
router.post('/crocm_list', menuVistasListas.crocm_list);
router.post('/detalle_docrev', menuVistasListas.detalle_docrev);
router.post('/detalle_audhlg', menuVistasListas.detalle_audhlg);
router.post('/detalle_hallazgo', menuVistasListas.detalle_hallazgo);
router.post('/detalle_hlgacn', menuVistasListas.detalle_hlgacn);
router.post('/det_audcrocm', menuVistasListas.det_audcrocm);

router.get('/lista_indicadores_gerencias', menuVistasListas.lista_indicadores_gerencias);
router.post('/detalle_indi_procesos', menuVistasListas.detalle_indi_procesos);
router.post('/detalle_crocm', menuVistasListas.detalle_crocm);
router.get('/listar_indicadorseg', menuVistasListas.listar_indicadorseg);
router.get('/listar_formdoc', menuVistasListas.listar_formdoc);
router.get('/listar_crocmseg', menuVistasListas.listar_crocmseg);
router.get('/listar_docleg', menuVistasListas.listar_docleg);
router.get('/listar_bajadoc', menuVistasListas.listar_bajadoc);
router.get('/listar_informacion_documentada', menuVistasListas.listar_informacion_documentada);
router.post('/detalle_informacion_documentada', menuVistasListas.detalle_informacion_documentada);

router.get('/get_combo_proceso', menuVistasListas.getComboProceso)
router.get('/get_combo_tipocrocm', menuVistasListas.getTipoCrocm)
router.get('/get_combo_probabilidad', menuVistasListas.getComboProbabilidad)
router.get('/get_combo_impacto', menuVistasListas.getComboImpacto)
router.get('/get_combo_responsable', menuVistasListas.getComboResponsable)
router.get('/get_combo_organigrama', menuVistasListas.getComboOrganigrama)
router.get('/get_combo_orgcargo', menuVistasListas.getComboOrgCargo)
router.post('/insertar_crocm', menuVistasListas.insertarCrocm)
//router.get('/get_combo_proceso', menuVistasListas.getComboProceso)
router.get('/principal2/:username', function (req,res){
    // var nombre = atob(req.params.username)
    res.send("el username es " +  req.params.username )
})

// router.get('/login', function(req, res, next) {
//     res.render('user/login');
// });
module.exports = router;