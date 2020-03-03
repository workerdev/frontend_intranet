const menu = require('../models/menu.js');
const delegacion = require('../models/delegacion.js');

// const submenu = new Menu();
module.exports={
    // getListaDelegacion:function (req,res) {
    //     menu.getAll(req.app.get("backend_ws"))
    //         .then(menu_result=>{
    //             delegacion.getListaDelegacion(req.app.get("backend_ws"))
    //                 .then(delegacion_result => {
    //                     console.log(categoria_lastnoticia_result)
    //                     res.render('comunicacion/noticias_empresa', {
    //                         menuprincipal:menu_result,
    //                         backend_route: req.app.get("backend_ws"),
    //                         categorias: categoria_lastnoticia_result
    //                     });
    //                 }).catch(categoria_lastnoticia_result => {
    //                 res.render({result:null, message:'Error '+categoria_lastnoticia_result});
    //             })
    //         }).catch(menu_result=>{
    //         res.render({result:null, message:'Error '+menu_result});
    //     })
    // },
    // getNoticiasPrensa:function (req,res) {
    //     menu.getAll(req.app.get("backend_ws"))
    //         .then(menu_result=>{
    //             noticia.getLastPrensaCategoria(req.app.get("backend_ws"))
    //                 .then(noticias_prensa_result =>{
    //                     res.render('comunicacion/noticias_prensa', {
    //                         menuprincipal:menu_result,
    //                         backend_route: req.app.get("backend_ws"),
    //                         categorias: noticias_prensa_result
    //                     });
    //                 }).catch(noticias_prensa_result=>{
    //                 res.render({result:null, message:'Error '+noticias_prensa_result});
    //             })
    //         }).catch(menu_result=>{
    //         res.render({result:null, message:'Error '});
    //     })
    // },
    // getResponsabilidadSocial:function (req,res) {
    //     menu.getAll(req.app.get("backend_ws"))
    //         .then(menu_result=>{
    //             noticia.getResponsabilidaSocial(req.app.get("backend_ws"))
    //                 .then(responsabilidad =>{
    //                     res.render('comunicacion/responsabilidad', {
    //                         menuprincipal:menu_result,
    //                         backend_route: req.app.get("backend_ws"),
    //                         responsabilidad: responsabilidad
    //                     });
    //                 }).catch(responsabilidad =>{
    //                 res.render({result:null, message:'Error '+responsabilidad});
    //             })
    //         }).catch(menu_result=>{
    //         res.render({result:null, message:'Error '});
    //     })
    // },
}