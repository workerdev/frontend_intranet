const menu = require('../models/menu.js');
const indicadores = require('../models/indicadores.js');
// const submenu = new Menu();
module.exports={
    getVentas:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                res.render('indicadores/ventas', {
                    menuprincipal:menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getSinAccidentes:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                res.render('indicadores/accidentes', {
                    menuprincipal:menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getCobertura:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                res.render('indicadores/cobertura', {
                    menuprincipal:menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getClientes:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                res.render('indicadores/clientes', {
                    menuprincipal:menu_result,
                    backend_route: req.app.get("backend_ws")
                });
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
};