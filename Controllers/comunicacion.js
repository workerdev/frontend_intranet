const menu = require('../models/menu.js');
const galeria = require('../models/galeria.js');
const noticia = require('../models/noticias.js');
// const submenu = new Menu();
module.exports={
    getNoticiasEmpresa:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                noticia.getCategoriaLastNoticia(req.app.get("backend_ws"))
                    .then(categoria_lastnoticia_result => {
                        //console.log(categoria_lastnoticia_result)
                        res.render('comunicacion/noticias_empresa', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            categorias: categoria_lastnoticia_result
                        });
                    }).catch(categoria_lastnoticia_result => {
                    res.render({result:null, message:'Error '+categoria_lastnoticia_result});
                })
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '+menu_result});
        })
    },
    getNoticiasPrensa:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                noticia.getLastPrensaCategoria(req.app.get("backend_ws"))
                    .then(noticias_prensa_result =>{
                        res.render('comunicacion/noticias_prensa', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            categorias: noticias_prensa_result
                        });
                    }).catch(noticias_prensa_result=>{
                    res.render({result:null, message:'Error '+noticias_prensa_result});
                })
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getResponsabilidadSocial:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                noticia.getResponsabilidaSocial(req.app.get("backend_ws"))
                    .then(responsabilidad =>{
                        res.render('comunicacion/responsabilidad', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            responsabilidad: responsabilidad
                        });
                    }).catch(responsabilidad =>{
                    res.render({result:null, message:'Error '+responsabilidad});
                })
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getGaleria:function (req,res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                galeria.getGalerias(req.app.get("backend_ws"))
                    .then(galeria_result =>{
                        //console.log(galeria_result)
                        res.render('comunicacion/galeria', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            galeria: galeria_result
                        });
                    }).catch(galeria_result=>{
                    res.render({result:null, message:'Error '+galeria_result});
                })
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },
    getNoticiaEmpresaContenido:function(req, res){
        var id_categoria =  req.params.id_categoria;
        var id_nombreCategoria = req.params.id_nombre;
        noticia.postNoticiasCategoria(req.app.get("backend_ws"), id_categoria,'Noticia Empresa')
            .then(noticias_result => {
                menu.getAll(req.app.get("backend_ws"))
                    .then(menu_result=>{
                        res.render('comunicacion/noticia_empresa_contenido', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            titulo: "Noticia del momento",
                            tipo: id_nombreCategoria,
                            noticias: noticias_result
                        })
                    }).catch(menu_result=>{
                    res.render({result:null, message:'Error '+menu_result});
                })
            }).catch(noticias_result =>{
            res.render({result:null, message:'Error '+menu_result});
        })

    },
    getNoticiaPrensaContenido:function(req, res){
        var id_categoria =  req.params.id_categoria;
        var id_nombreCategoria = req.params.id_nombre;

        noticia.postNoticiasCategoria(req.app.get("backend_ws"),id_categoria, 'Noticia Prensa')
            .then(noticia_result =>{
                menu.getAll(req.app.get("backend_ws"))
                    .then(menu_result=>{
                        res.render('comunicacion/noticias_prensa_contenido', {
                            menuprincipal:menu_result,
                            backend_route: req.app.get("backend_ws"),
                            titulo: "Noticia del momento",
                            tipo: id_nombreCategoria,
                            noticias: noticia_result
                        });
                    }).catch(menu_result=>{
                    res.render({result:null, message:'Error '+menu_result});
                })
            }).catch(noticia_result => {
            res.render({result:null, message:'Error '+noticia_result});
        })

    },
    getNoticia:function(req, res){
        var id_noticia =  req.params.id_noticia;

        noticia.postNoticia(req.app.get("backend_ws"),id_noticia)
            .then(noticia_result =>{
                //console.log(noticia_result)
                menu.getAll(req.app.get("backend_ws"))
                    .then(menu_result=>{
                        res.render('comunicacion/noticia', {
                            menuprincipal:menu_result,
                            noticia: noticia_result,
                            backend_route: req.app.get("backend_ws"),
                        });
                    }).catch(menu_result=>{
                    res.render({result:null, message:'Error '+menu_result});
                })
            }).catch(noticia_result => {
            res.render({result:null, message:'Error '+noticia_result});
        })

    },
    getImagenes:function(req, res){
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result=>{
                var id = req.params.id;
                //console.log('obtuvo: '+id);
                galeria.postImagenes(req.app.get("backend_ws"), id)
                    .then(galeria_result =>{
                        res.render('comunicacion/contenedor', {
                            menuprincipal:menu_result,
                            backend_route:req.app.get("backend_ws"),
                            galeria_result:galeria_result
                        });
                    }).catch(galeria_result =>{
                    res.render({result:null, message:'Error '+galeria_result});
                })
            }).catch(menu_result=>{
            res.render({result:null, message:'Error '});
        })
    },

};