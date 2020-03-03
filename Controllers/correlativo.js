const menu = require('../models/menu.js');
const datoCorrelativo = require('../models/correlativo.js');
// const submenu = new Menu();
module.exports = {
    listarCorrelativo: function (req, res) {
        var username = req.body.username;
        datoCorrelativo.listarCorrelativo(req.app.get("backend_ws"), username)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    },
    formSelectCorrelativo: function (req, res) {
        var username = req.body.username;
        datoCorrelativo.formSelectCorrelativo(req.app.get("backend_ws"), username)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    dataCorrelative: function (req, res) {
        datoCorrelativo.dataCorrelative(req.app.get("backend_ws"), req.body.username, req.body.anio)
            .then(listar_result => {
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })  
    },
    formDatos: function (req, res) {
        datoCorrelativo.formDatos(req.app.get("backend_ws"), req.body.username, req.body.anio)
            .then(listar_result => {
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })  
    },
    editarCorrelativo: function (req, res) {
        var id = req.body.id;
        var username = req.body.username;
        var anio = req.body.anio;
        datoCorrelativo.editarCorrelativo(req.app.get("backend_ws"), id, username, anio)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    obtenerArchivo: function (req, res) {
        var id = req.body.id;
        var tipo = req.body.tipo;
        datoCorrelativo.obtenerArchivo(req.app.get("backend_ws"), id, tipo)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    updateCorrelativo: function (req, res) {
        var id = req.body.id;
        var redactor = req.body.redactor;
        var destinatario = req.body.destinatario;
        var referencia = req.body.referencia;
        var fkcorrelativo = req.body.fkcorrelativo;
        var fktiponota = req.body.fktiponota;
        var url = req.body.url;
        var antecedente = req.body.antecedente;
        var urleditable = req.body.urleditable;
        var entrega = req.body.entrega;
        var fkunidad = req.body.fkunidad;
        var urlorigen = req.body.urlorigen;

        datoCorrelativo.updateCorrelativo(req.app.get("backend_ws"), id,
            redactor, destinatario, referencia, fkcorrelativo, fktiponota,
            url, antecedente, urleditable, entrega, fkunidad, urlorigen)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    },
    eliminarCorrelativo: function (req, res) {
        var id = req.body.id;
        var username = req.body.username;
        datoCorrelativo.eliminarCorrelativo(req.app.get("backend_ws"), id, username)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    filterCorrelativo: function (req, res) {
        var username = req.body.username;
        var anio = req.body.anio;
        datoCorrelativo.filterCorrelativo(req.app.get("backend_ws"), username, anio)
            .then(listar_result => {
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    insertarCorrelativo: function (req, res) {
        var datos = req.body.datos;
        var formdt = req.body.formdt;

        datoCorrelativo.insertarCorrelativo(req.app.get("backend_ws"), datos, formdt)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })
    },
    gestionCorrelativo: function (req, res) {
        var username = req.body.username;
        datoCorrelativo.gestionCorrelativo(req.app.get("backend_ws"), username)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
    gestionFiltroCorrelativo: function (req, res) {
        var username = req.body.username;
        var gestion = req.body.gestion;
        datoCorrelativo.gestionFiltroCorrelativo(req.app.get("backend_ws"), username,gestion)
            .then(listar_result => {              
                //console.log(listar_result)  
                res.status(200).send(listar_result);
            }).catch(menu_result => {
                res.render({ result: null, message: 'Error ' + menu_result });
            })            
    },
};