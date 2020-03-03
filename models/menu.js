const request=require('request');

module.exports = {
    loginBackend: function (backend_ws, user , password) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/loginbackend",
                    body:JSON.stringify({ user: user , password : password})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        console.log(body)
                        var response = JSON.parse(body);
                         resolve(response)
                    }
                });
            }catch(err){
                console.log("msj "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_indi_procesos: function (backend_ws, codigo) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detalleindicador",
                    body:JSON.stringify({codigo: codigo})
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle indicadores: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_crocm: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/crocmdetalle",
                    body:JSON.stringify({id: id})
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle crocm: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_fichacargo: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detallefcargo",
                    body:JSON.stringify({id: id})
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle ficha cargo: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_docproc: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/documentosenproceso",
                    body:JSON.stringify({id: 0})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle documentos en proceso: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_docrev: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/documentosrev",
                    body:JSON.stringify({id: id})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle documentos en proceso: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_indicadorseg: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/indicadorseg", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_formdoc: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/getdocformulario", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista formdoc: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_crocmseg: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/seguimientocrocm", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista crocmseg: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_bajadoc: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/documentobaja", function (error, response, body) {
                    if(error != null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista bajadoc: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_indicadores_gerencias: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/indicadores", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_procesos: function (backend_ws, idpro) {
        return new Promise(function (resolve,reject) {
            try{
                //console.log(backend_ws, idpro, ' gg')
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/sigprocfcgerenciadetalle",
                    body:JSON.stringify({id:idpro})
                    
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle procesos: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_frmdoc: function (backend_ws, id, documento) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/getdocformulariodetalle",
                    body:JSON.stringify({id:id, documento:documento})
                    
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle formdoc: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_audhlg: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detalleaud",
                    body:JSON.stringify({id:id})
                    
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle audhlg: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_docleg: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/documentoexternolegales", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista doc. externos: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_ord_procesos: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/sigprocfcprocesos", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_crocm: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/sigprocriesgogerencia", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista crocm: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_fichacargo: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/fichascargo", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista ficha cargo: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_informacion_documentada: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/documentos", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_informacion_documentada: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detalledoc",
                    body:JSON.stringify({id: id})
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :decepcionado: inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle ficha cargo: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_gerencias: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/sigprocfcgerencia", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_audhlg: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/listar_audhlg", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista audhlg: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_hallazgo: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detallehlg",
                    body:JSON.stringify({id: id})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle hallazgo: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_hallazgo: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/listar_hallazgo", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista hallazgo: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_accion: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/listar_accion", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista acción: "+ err);
                reject({message:err.message});
            }
        });
    },
    detalle_hlgacn: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/dethlg_idac",
                    body:JSON.stringify({id: id})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle hallazgo-acción: "+ err);
                reject({message:err.message});
            }
        });
    },
    crocm_list: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/crocm_list",
                    body:JSON.stringify({id: 0})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("CROCM registros: "+ err);
                reject({message:err.message});
            }
        });
    },
    consult_crocm: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/crocm_consulta", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("Consulta CROCM: "+ err);
                reject({message:err.message});
            }
        });
    },
    det_audcrocm: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/detaud_crocm",
                    body:JSON.stringify({id: id})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500, message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("Detalle crocm-seguimiento: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_eficacia: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/listar_verificaref", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista verificación eficacia: "+ err);
                reject({message:err.message});
            }
        });
    },
    lista_fortaleza: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request(backend_ws+"/listar_fortaleza", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista fortaleza: "+ err);
                reject({message:err.message});
            }
        });
    },
    listar_cobertura: function (backend_ws) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/listar_cobertura",
                    body:JSON.stringify()
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("cobertura: "+ err);
                reject({message:err.message});
            }
        });
    },
    getAll: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/menu_lista", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
    getCatalogoServicio: function(backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/catalogo_vista", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
    getDatosSig: function(backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/datasig", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
    getDatosClimas: function(ciudad){
        return new Promise(function (resolve,reject) {
            try{
                request("http://api.apixu.com/v1/current.json?key=4f938fda37ad4322a59194801180511&q="+ciudad, function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
    getComboProceso: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_proceso", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboTipoCrocm: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_tipocrocm", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboProbabilidad: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_probabilidad", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboImpacto: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_impacto", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboResponsable: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_responsable", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista gerencia: "+ err);
                reject({message:err.message});
            }
        });
    },
    insertarCrocm: function (backend_ws, descripcion , origen , accion , fecha , estadocro ,
                            analisiscausaraiz, fichaprocesos, tipocro, probabilidad, impacto, fkresponsable ) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/insertar_crocm",
                    body:JSON.stringify({   descripcion: descripcion,
                        origen:origen , accion:accion , fecha:fecha, estadocro:estadocro,
                        analisiscausaraiz: analisiscausaraiz ,  fichaprocesos:fichaprocesos,
                        tipocro:tipocro , probabilidad:probabilidad , impacto:impacto,
                        fkresponsable:fkresponsable 
                                            })
                    // body:JSON.stringify({fkareagerenciasector: 2,id:2})
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores :( inténtelo en otro momento'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        resolve(response)
                    }
                });
            }catch(err){
                console.log("detalle indicadores: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboOrganigrama: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_organigrama", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista organigrama: "+ err);
                reject({message:err.message});
            }
        });
    },
    getComboOrgCargo: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/combo_org_cargo", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        // console.log(body)
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("lista organigrama por cargo: "+ err);
                reject({message:err.message});
            }
        });
    },
    
};