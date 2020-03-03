const Menu = require('../models/menu.js');
const submenu = new Menu();
module.exports={
    getAll:function (req,res) {
        submenu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                res.render('index/index', {
                    menu:menu_result
                });
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    }
};