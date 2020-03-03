const menu = require('../models/menu.js');
const datoEmpresarial = require('../models/empresa.js');
// const submenu = new Menu();
module.exports = {
    getOrganigrama: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                datoEmpresarial.getOrganigrama(req.app.get("backend_ws"))
                    .then(organigrama_result => {
                        //console.log(organigrama_result.length)
                        res.render('empresa/Organigrama', {
                            menuprincipal: menu_result,
                            backend_route: req.app.get("backend_ws"),
                            organigrama: organigrama_result,
                            cantidad: organigrama_result.length
                        });
                    })
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' });
            })
    },
    getComiteEtica: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {

                res.render('empresa/ComiteEtica', {
                    menuprincipal: menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' });
            })
    },
    postEnviarReclamo: function(req, res) {
        var asunto = req.body.asunto;
        var cuerpo = req.body.cuerpo;
        var remitente = req.body.remitente;
        var login = req.body.login;
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                datoEmpresarial.sendemail_comiteEtica(req.app.get("backend_ws"), asunto, cuerpo, remitente, login)
                    .then(email_response => {
                        datoEmpresarial.getDatosEmpresariales(req.app.get("backend_ws"))
                            .then(datos_empresariales => {
                                res.status(200).send(email_response);
                            }).catch(datos_empresariales => {
                                res.render({ result: null, message: 'Error ' + email_response });
                            })
                    }).catch(email_response => {
                        res.render({ result: null, message: 'Error ' + email_response });
                    })

            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    },
    getRouteOrganigrama:function (req, res) {
        console.log('Filter by...')
        console.log(req.params.id)
        switch (req.params.id){
            case "0":
                verTodo(req, res);
                break;
            default:
                filtrarPorCargo(req, res, req.params.id);
                break;
        }
    }
};

function verTodo(req, res){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result => {
            datoEmpresarial.getOrganigrama(req.app.get("backend_ws"))
                .then(organigrama_result => {
                    res.render('empresa/Organigrama', {
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        organigrama: organigrama_result,
                        cantidad: organigrama_result.length
                    });
                })
        }).catch(menu_result => {
            res.render({ result: null, message: 'Error ' });
        })
}
function filtrarPorCargo(req, res, id){
    menu.getAll(req.app.get("backend_ws"))
        .then(menu_result => {
            datoEmpresarial.getOrgByCargo(req.app.get("backend_ws"), id)
                .then(organigrama_result => {
                    res.render('empresa/Organigrama', {
                        menuprincipal: menu_result,
                        backend_route: req.app.get("backend_ws"),
                        organigrama: organigrama_result,
                        cantidad: organigrama_result.length
                    });
                })
        }).catch(menu_result => {
            res.render({ result: null, message: 'Error ' });
        })
}