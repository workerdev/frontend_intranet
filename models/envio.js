module.exports = {
    postEnvioReclamo: function (backend_ws, titulo, contenido) {
        return new Promise(function (resolve,reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/envio_reclamo",
                    body: JSON.stringify({
                        titulo:titulo,
                        contenido:contenido
                    })
                }, (err, res, body) => {
                    if(err) {
                        console.dir(err);
                        if(err!=''){
                            reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
                        }
                    }else {
                        var response = JSON.parse(body);
                        response.success ? resolve(response.response) : reject({status: 404, message: response.message})
                    }
                });
            }catch(err){
                console.log(err);
                reject({message:err.message});
            }
        });
    }
};