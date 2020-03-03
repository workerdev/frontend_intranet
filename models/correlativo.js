const request=require('request');

module.exports = {
    dataCorrelative: function (backend_ws, username, anio) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/data_correlative",
                    body: JSON.stringify({
                        username: username,
                        anio: anio   
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                        resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    formDatos: function (backend_ws, username, anio) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/formdt_correlative",
                    body: JSON.stringify({
                        username: username,
                        anio: anio
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                        resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    insertarCorrelativo : function (backend_ws, datos, formdt) {
        return new Promise(function (resolve,reject) {
            try {
                request.post({
                    headers: { "content-type": "multipart/form-data" },
                    url: backend_ws + "/correlative_insert",
                    body: JSON.stringify({
                        datos: datos,
                        formdt: formdt
                    })
                }, (err, res, body) => {
                    if (err) {
                        console.dir(err);
                        if (err!='') {
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    } else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            } catch(err) {
                reject({message:err});
            }
        });
    },
    editarCorrelativo : function (backend_ws, id, username, anio) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlative_edit",
                    body: JSON.stringify({
                        id: id,
                        username: username,
                        anio: anio                     
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    obtenerArchivo : function (backend_ws, id, tipo) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/get_b64file",
                    body: JSON.stringify({
                        id: id, 
                        tipo: tipo                    
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    updateCorrelativo : function (backend_ws, id, redactor, destinatario, referencia,
        fkcorrelativo, fktiponota, url, antecedente, urleditable, entrega, fkunidad, urlorigen
        ) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlative_update",
                    body: JSON.stringify({
                        id: id ,                      
                        redactor: redactor,
                        destinatario: destinatario,
                        referencia: referencia,
                        fkcorrelativo: fkcorrelativo,
                        fktiponota: fktiponota,
                        
                        url: url,
                        antecedente: antecedente,
                        urleditable: urleditable,
                        entrega: entrega,
                        fkunidad: fkunidad,
                        urlorigen: urlorigen
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    eliminarCorrelativo : function (backend_ws, id, username) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlative_delete",
                    body: JSON.stringify({
                        id: id,
                        username: username                        
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },    
    listarCorrelativo : function (backend_ws, username) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/listar_correlativo",
                    body: JSON.stringify({
                        username: username                        
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    filterCorrelativo : function (backend_ws, username, anio) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlativo_filter",
                    body: JSON.stringify({
                        username: username,
                        anio: anio                         
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                        resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    formSelectCorrelativo : function (backend_ws, username) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlativoform",
                    body: JSON.stringify({
                        username: username                        
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                        resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    gestionCorrelativo : function (backend_ws, username) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/correlativo_gestiones",
                    body: JSON.stringify({
                        username: username                        
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    },
    gestionFiltroCorrelativo : function (backend_ws, username , gestion) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/listar_correlativogestion",
                    body: JSON.stringify({
                        username: username, 
                        gestion : gestion                        
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response =JSON.parse(body);                    
                            resolve(response);
                    }
                });
            }catch(err){
                reject({message:err});
            }
        });
    }
};