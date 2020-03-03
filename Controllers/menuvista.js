var menu = require("../models/menu.js");
var links = require("../models/links.js");
const datoEmpresarial = require('../models/empresa.js');
const galeria = require('../models/galeria.js');
const indicadores = require('../models/indicadores.js');
const personal = require('../models/personal.js');
const delegacion = require('../models/delegacion.js');


module.exports={
    loginBackend: function (req, res) {
        menu.loginBackend(req.app.get("backend_ws"), req.body.user,req.body.password)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    detalle_indi_procesos: function (req, res) {
        menu.detalle_indi_procesos(req.app.get("backend_ws"),req.body.codigo)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    detalle_crocm: function (req, res) {
        menu.detalle_crocm(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    detalle_fichacargo: function (req, res) {
        menu.detalle_fichacargo(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    detalle_docproc: function (req, res) {
        menu.detalle_docproc(req.app.get("backend_ws"))
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    detalle_docrev: function (req, res) {
        menu.detalle_docrev(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    listar_indicadorseg: function (req, res) {
        menu.listar_indicadorseg(req.app.get("backend_ws"),req.body.id_proce,req.body.gas_id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    listar_formdoc: function (req, res) {
        menu.listar_formdoc(req.app.get("backend_ws"), req.body.id_proce, req.body.gas_id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    listar_crocmseg: function (req, res) {
        menu.listar_crocmseg(req.app.get("backend_ws"),req.body.id_proce,req.body.gas_id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    listar_bajadoc: function (req, res) {
        menu.listar_bajadoc(req.app.get("backend_ws"), req.body.id_proce, req.body.gas_id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    lista_indicadores_gerencias: function (req, res) {
        menu.lista_indicadores_gerencias(req.app.get("backend_ws"),req.body.id_proce,req.body.gas_id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    detalle_procesos: function (req, res) {
        menu.detalle_procesos(req.app.get("backend_ws"), req.body.id_proce)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    detalle_frmdoc: function (req, res) {
        menu.detalle_frmdoc(req.app.get("backend_ws"), req.body.cod_frm, req.body.cod_doc)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    detalle_audhlg: function (req, res) {
        menu.detalle_audhlg(req.app.get("backend_ws"), req.body.idaud)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    listar_docleg: function (req, res) {
        menu.listar_docleg(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    lista_ord_procesos: function (req, res) {
        menu.lista_ord_procesos(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })

    },
    lista_crocm: function (req, res) {
        menu.lista_crocm(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    lista_fichacargo: function (req, res) {
        menu.lista_fichacargo(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    listar_informacion_documentada: function (req, res) {
        menu.listar_informacion_documentada(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    detalle_informacion_documentada: function (req, res) {
        menu.detalle_informacion_documentada(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    lista_gerencias: function (req, res) {
        menu.lista_gerencias(req.app.get("backend_ws"))
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    lista_audhlg: function (req, res) {
        menu.lista_audhlg(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    detalle_hallazgo: function (req, res) {
        menu.detalle_hallazgo(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    lista_hallazgo: function (req, res) {
        menu.lista_hallazgo(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    lista_accion: function (req, res) {
        menu.lista_accion(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    detalle_hlgacn: function (req, res) {
        menu.detalle_hlgacn(req.app.get("backend_ws"), req.body.id)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    crocm_list: function (req, res) {
        menu.crocm_list(req.app.get("backend_ws"))
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    consult_crocm: function (req, res) {
        menu.consult_crocm(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    det_audcrocm: function (req, res) {
        menu.det_audcrocm(req.app.get("backend_ws"), req.body.idcro)
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    lista_eficacia: function (req, res) {
        menu.lista_eficacia(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    lista_fortaleza: function (req, res) {
        menu.lista_fortaleza(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getComboProceso: function (req, res) {
        menu.getComboProceso(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getTipoCrocm: function (req, res) {
        menu.getComboTipoCrocm(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getComboProbabilidad: function (req, res) {
        menu.getComboProbabilidad(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getComboImpacto: function (req, res) {
        menu.getComboImpacto(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getComboResponsable: function (req, res) {
        menu.getComboResponsable(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    insertarCrocm: function (req, res) {
        menu.insertarCrocm(req.app.get("backend_ws"), req.body.descripcion, req.body.origen, req.body.accion ,
                            req.body.fecha, req.body.estadocro, req.body.analisiscausaraiz , req.body.fichaprocesos,
                            req.body.tipocro ,req.body.probabilidad, req.body.impacto , req.body.fkresponsable)
            .then(response => {
                // console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                // console.log(response);
                res.status(200).send(response);
            })
    },
    getComboOrganigrama: function (req, res) {
        menu.getComboOrganigrama(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    getComboOrgCargo: function (req, res) {
        menu.getComboOrgCargo(req.app.get("backend_ws"))
            .then(response => {
                res.status(200).send(response);
            })
            .catch(resposne => {
                //console.log(resposne);
                res.status(200).send(resposne);
            })
    },
    listar_cobertura: function (req, res) {
        menu.listar_cobertura(req.app.get("backend_ws"))
            .then(response => {
                //console.log(response);
                res.status(200).send(response);
            })
            .catch(response => {
                //console.log(response);
                res.status(200).send(response);
            })
    },
    getRouteMenu:function (req, res) {
        switch (req.params.id){
            case "1":
                vista1(req,res);
                break;
            case "2":
                vista2(req,res);
                break;
            case "3":
                vista3(req,res);
                break;
            case "4":
                vista4(req,res);
                break;
            case "5":
                vista5(req,res);
                break;
            case "6":
                vista6(req,res);
                break;
            case "7":
                vista7(req,res);
                break;
            case "8":
                vista8(req,res);
                break;
            case "9":
                vista9(req,res);
                break;
            default:
                console.log("ingreso a vista por defecto");
                pordefecto(req,res);
                break;
        }
    }
};

function vista1(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            datoEmpresarial.getDatosEmpresariales(req.app.get("backend_ws"))
                .then(datos_empresariales=>{
                    //console.log(datos_empresariales)
                    res.render('menu/Empresa',{
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        datos: datos_empresariales

                    })
                }).catch(datos_empresariales=>{
                res.render({result:null, message:menu_result});
            })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista2(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            personal.getCumpleanero(req.app.get("backend_ws"))
                .then(cumpleaneros_result => {
                    res.render('menu/Personal',{
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        cumpleaneros: cumpleaneros_result
                    })
                }).catch(cumpleaneros_result => {
                res.render({result:null, message:cumpleaneros_result});
            })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista3(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            indicadores.getDiasSinAccidentes(req.app.get("backend_ws"))
                .then(dias_result =>{
                    //console.log("Dias "+dias_result);
                    res.render('menu/Indicadores',{
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        dias:dias_result
                    })
                }).catch(dias_result=>{
                res.render({result:null, message:dias_result});
            })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}function vista4(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            menu.getDatosSig(req.app.get("backend_ws"))
                .then(datos_sig => {
                    res.render('menu/SIG',{
                        datos_sig : datos_sig,
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws")
                    })   
                }).catch(menu_result=>{
                res.render({result:null, message:menu_result})
                })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista5(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            res.render('menu/Documentacion',{
                menuprincipal: menu_result,
                backend_route: req.app.get("backend_ws")
            })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}function vista6(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            galeria.getLastFile(req.app.get("backend_ws"))
                .then(last_file_result =>{
                res.render('menu/Comunicaciones',{
                    menuprincipal: menu_result,
                    backend_route: req.app.get("backend_ws"),
                    lastFile: last_file_result[0]
                })
            }).catch(menu_result=>{
                res.render({result:null, message:menu_result});
            })

        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista7(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            links.getLinks(req.app.get("backend_ws"))
                .then(links_result =>{
                    res.render('menu/Links',{
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        links: links_result
                    })
                }).catch(links_result => {
                res.render({result:null, message:links_result});
            })

        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista8(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            res.render('menu/Correlativo',{
                menuprincipal: menu_result,
                backend_route: req.app.get("backend_ws")                
            })

        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
function vista9(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            delegacion.getListaDelegacion(req.app.get("backend_ws"))
                .then(delegacion_result => {
                    res.render('menu/Delegacion',{
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        delegacion : delegacion_result
                    })
                }).catch(delegacion_result=>{
                res.render({result:null, message:delegacion_result});
                })

        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
        })
}

function pordefecto(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result=>{
            res.render('index/index',{
                menuprincipal: menu_result,
                backend_route: req.app.get("backend_ws")
            })
        }).catch(menu_result=>{
        res.render({result:null, message:menu_result});
    })
}
