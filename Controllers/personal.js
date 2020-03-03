const menu = require('../models/menu.js');
const personal = require('../models/personal.js');

module.exports = {
    getDirectorioPersonal: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                personal.getPersonal(req.app.get("backend_ws"))
                    .then(personal_result => {
                        res.render('personal/directorio', {
                            menuprincipal: menu_result,
                            backend_route: req.app.get("backend_ws"),
                            directorio: personal_result
                        });
                    }).catch(personal_result => {
                        res.render({ result: null, message: 'Error ' });
                    })

            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' });
            })
    },
    getBuzonSugerencia: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                res.render('personal/buzon', {
                    menuprincipal: menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' });
            })
    },
    postEnviarSugerencia: function(req, res) {
        var asunto = req.body.asunto;
        var cuerpo = req.body.cuerpo;
        var remitente = req.body.cuerpo;
        var login = req.body.login;
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                personal.sendemail_buzonSugerencia(req.app.get("backend_ws"), asunto, cuerpo, remitente, login)
                    .then(email_response => {
                        //console.log(email_response);
                        res.status(200).send(email_response);
                    }).catch(email_response => {
                        res.render({ result: null, message: 'Error ' + email_response });
                    })

            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    },
    getTurnoPersonal: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                personal.getTurnoPersonal(req.app.get("backend_ws"))
                    .then(turno_result => {
                        //console.log(turno_result)
                        res.render('personal/turno', {
                            menuprincipal: menu_result,
                            backend_route: req.app.get("backend_ws"),
                            turnos: turno_result
                        });
                    }).catch(turno_result => {
                        res.render({ result: null, message: 'Error ' + turno_result });
                    })

            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    }
};