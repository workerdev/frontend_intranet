const request=require('request');

module.exports = {
    getResponsabilidaSocial:function (backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/getResponsabilidadService", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result);
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },getCategoriaLastNoticia:function (backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/getLastNoticiaCategoria", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(result);
                        resolve(result);
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },getLastPrensaCategoria:function (backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/getLastPrensaCategoria", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(result);
                        resolve(result);
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },postNoticias: function (backend_ws,tipo, tipo3) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/noticia_tipo",
                    body: JSON.stringify({
                        tipo:tipo,
                        tipo3:tipo3
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        // console.log(body)
                        var result =JSON.parse(body);

                        var norepetidos = new Array();
                        //console.log("1 gg "+ result);
                        for (let i = 0; i < result.length; i++) {
                            //console.log(result[i])
                            if(norepetidos != null){
                                let repetido = false;
                                //console.log("2 gg "+ result);
                                for (let j = 0; j < norepetidos.length; j++) {
                                    //console.log(norepetidos[j])
                                    if(norepetidos[j].id == result[i].id_noticia){
                                        repetido = true;
                                    }
                                }

                                if(!repetido){
                                    var noticia = {
                                        id :result[i].id_noticia,
                                        titulo : result[i].titulo_noticia,
                                        subtitulo : result[i].subtitulo_noticia,
                                        fecha : result[i].fecha_noticia,
                                        tipo : result[i].tipo_noticia
                                    }
                                    // console.log(noticia.id)
                                    norepetidos.push(noticia);
                                }
                            }else{
                                norepetidos.push(result[i].id_noticia);
                            }
                        }
                        var noticias =  new Array();
                        var categorias;
                        //console.log("3 gg "+ result);
                        for (let i = 0; i < norepetidos.length; i++) {
                            //console.log(norepetidos[i])
                            categorias = new Array()
                            //console.log("4 gg "+ result);
                            for (let j = 0; j < result.length; j++) {
                                //console.log(result[j])
                                if(norepetidos[i].id == result[j].id_noticia){
                                    var vategoria = {
                                        id : result[j].id_categoria,
                                        nombre : result[j].nombre_categoria
                                    }
                                    categorias.push(vategoria);
                                }
                            }
                            var noticia = {
                                noticia: norepetidos[i],
                                categorias: categorias
                            }

                            noticias.push(noticia)
                        }
                        var complete = (noticias);
                        resolve(complete);
                    }
                });
            }catch(err){
                console.log(err);
                reject({message:err.message});
            }
        });
    },postNoticiasCategoria: function (backend_ws,id, tipo) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/getnoticias_categoria",
                    body: JSON.stringify({
                        id:id,
                        tipo: tipo
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var result =JSON.parse(body);
                        resolve(result);
                    }
                });
            }catch(err){
                console.log(err);
                reject({message:err.message});
            }
        });
    },postNoticia: function (backend_ws,id) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/getNoticia",
                    body: JSON.stringify({
                        id:id
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var result =JSON.parse(body);
                        resolve(result);
                    }
                });
            }catch(err){
                console.log(err);
                reject({message:err.message});
            }
        });
    }
}