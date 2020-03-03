var menu = require("../models/menu.js");
var galeria = require("../models/galeria.js");
var noticia = require("../models/noticias.js");
var personal = require("../models/personal.js");

module.exports = {
    getIndex: function(req, res) {
        personal.getCumpleanero(req.app.get("backend_ws"))
            .then(cumpleaneros_result => {
                noticia.postNoticias(req.app.get("backend_ws"), "Urgente", "Destacados")
                    .then(urgentes_result => {
                        noticia.postNoticias(req.app.get("backend_ws"), "Noticia Empresa", "Noticia Prensa")
                            .then(boletin_result => {
                                menu.getAll(req.app.get("backend_ws"))
                                    .then(menu_result => {
                                        galeria.postImagenes(req.app.get("backend_ws"), 1)
                                            .then(galeria_result1 => {
                                                galeria.postImagenes(req.app.get("backend_ws"), 2)
                                                    .then(galeria_result2 => {
                                                        res.render('index/principal', {
                                                            menuprincipal: menu_result,
                                                            backend_route: req.app.get("backend_ws"),
                                                            imagenes: galeria_result1,
                                                            videos: galeria_result2,
                                                            boletin: boletin_result,
                                                            urgentes: urgentes_result,
                                                            cumpleaneros: cumpleaneros_result
                                                        })
                                                        // console.log(JSON.stringify({
                                                        //     menuprincipal: menu_result,
                                                        //     backend_route: req.app.get("backend_ws"),
                                                        //     imagenes: galeria_result1,
                                                        //     videos: galeria_result2,
                                                        //     boletin: boletin_result,
                                                        //     urgentes: urgentes_result,
                                                        //     cumpleaneros: cumpleaneros_result
                                                        // }) + " gg menu")
                                                    }).catch(galeria_result2 => {
                                                        res.render({ result: null, message: galeria_result2 });
                                                    })
                                            }).catch(galeria_result1 => {
                                                res.render({ result: null, message: galeria_result1 });
                                            })
                                    }).catch(menu_result => {
                                        res.render({ result: null, message: menu_result });
                                    })
                            }).catch(boletin_result => {
                                res.render({ result: null, message: boletin_result });
                            })
                    }).catch(boletin_result => {
                        res.render({ result: null, message: boletin_result });
                    })
            }).catch(cumpleaneros_result => {
                res.render({ result: null, message: cumpleaneros_result });
            })
    },
    getCatalogo: function(req, res) {
        menu.getAll(req.app.get("backend_ws"))
            .then(menu_result => {
                menu.getCatalogoServicio(req.app.get("backend_ws"), 1)
                    .then(catalogo_result => {

                        res.render('index/catalogo', {
                            menuprincipal: menu_result,
                            backend_route: req.app.get("backend_ws"),
                            catalogo: catalogo_result
                        })

                    }).catch(galeria_result1 => {
                        res.render({ result: null, message: galeria_result1 });
                    })
            }).catch(menu_result => {
                res.render({ result: null, message: menu_result });
            })
    },
    getClimaPrincipal: function(req, res) {

    },
    getIndex2: function(req, res) {
        personal.getCumpleanero(req.app.get("backend_ws"))
            .then(cumpleaneros_result => {
                noticia.postNoticias(req.app.get("backend_ws"), "Urgente", "Destacados")
                    .then(urgentes_result => {
                        noticia.postNoticias(req.app.get("backend_ws"), "Noticia Empresa", "Noticia Prensa")
                            .then(boletin_result => {
                                menu.getAll(req.app.get("backend_ws"))
                                    .then(menu_result => {
                                        galeria.postImagenes(req.app.get("backend_ws"), 1)
                                            .then(galeria_result1 => {
                                                galeria.postImagenes(req.app.get("backend_ws"), 2)
                                                    .then(galeria_result2 => {
                                                        res.render('index/principal2', {
                                                            menuprincipal: menu_result,
                                                            backend_route: req.app.get("backend_ws"),
                                                            imagenes: galeria_result1,
                                                            videos: galeria_result2,
                                                            boletin: boletin_result,
                                                            urgentes: urgentes_result,
                                                            cumpleaneros: cumpleaneros_result
                                                        })
                                                        // console.log(JSON.stringify({
                                                        //     menuprincipal: menu_result,
                                                        //     backend_route: req.app.get("backend_ws"),
                                                        //     imagenes: galeria_result1,
                                                        //     videos: galeria_result2,
                                                        //     boletin: boletin_result,
                                                        //     urgentes: urgentes_result,
                                                        //     cumpleaneros: cumpleaneros_result
                                                        // }) + " gg menu")
                                                    }).catch(galeria_result2 => {
                                                        res.render({ result: null, message: galeria_result2 });
                                                    })
                                            }).catch(galeria_result1 => {
                                                res.render({ result: null, message: galeria_result1 });
                                            })
                                    }).catch(menu_result => {
                                        res.render({ result: null, message: menu_result });
                                    })
                            }).catch(boletin_result => {
                                res.render({ result: null, message: boletin_result });
                            })
                    }).catch(boletin_result => {
                        res.render({ result: null, message: boletin_result });
                    })
            }).catch(cumpleaneros_result => {
                res.render({ result: null, message: cumpleaneros_result });
            })
    },
};