
const sistemaIntegrado = require('../models/proceso.js');

module.exports={
    getVistaProcesos:function (req, res){
        // menu.getAll(req.app.get("backend_ws"))
        //     .then(menu_result=>{
        sistemaIntegrado.getProcesos(req.app.get("backend_ws"))
            .then(procesos=>{
                res.render('menu/d_procesos',{
                    // menuprincipal: menu_result,
                    // backend_route: req.app.get("backend_ws"),
                    // datos: datos_empresariales

                })
            }).catch(procesos=>{
                res.render({result:null, message:"error en getvistaprocesos()"});
            })
        //     }).catch(menu_result=>{
        //     res.render({result:null, message:menu_result});
        // })
    }
};