const request = require('request');

module.exports = {
    getDatosEmpresariales: function(backend_ws) {
        return new Promise(function(resolve, reject) {
            try {
                request(backend_ws + "/tipoempresarial_lista", function(error, response, body) {
                    if (error != null) {
                        reject({ error: error.message })
                    } else {

                        var result = JSON.parse(body);
                        //console.log(result)
                        var contenido1 = [];
                        var contenido2 = [];
                        var contenido3 = [];
                        var contenido4 = [];
                        for (let i = 1; i < 5; i++) {
                            var auxiliar = [];
                            for (let j = 0; j < result.length; j++) {
                                if (result[j].id == i) {
                                    auxiliar.push(result[j].descripcion)
                                }
                            }
                            switch (i) {
                                case 1:
                                    contenido1 = auxiliar;
                                    break;
                                case 2:
                                    contenido2 = auxiliar;
                                    break;
                                case 3:
                                    contenido3 = auxiliar;
                                    break;
                                case 4:
                                    contenido4 = auxiliar;
                                    break;
                            }
                        }

                        var completo = [
                            { id: 1, nombre: "Misión", descripcion: contenido1 },
                            { id: 2, nombre: "Visión", descripcion: contenido2 },
                            { id: 3, nombre: "Valores", descripcion: contenido3 },
                            { id: 4, nombre: "Lineamiento Estratégico", descripcion: contenido4 },
                        ];

                        var result1 = JSON.stringify(completo);
                        var result = JSON.parse(result1);
                        resolve(result)
                    }
                });
            } catch (err) {
                reject({ message: err.message });
            }
        });
    },
    getOrganigrama: function(backend_ws) {
        return new Promise(function(resolve, reject) {
            try {
                request(backend_ws + "/organigrama2", function(error, response, body) {
                    if (error != null) {
                        reject({ error: error.message })
                    } else {
                        var result = JSON.parse(body);
                        resolve(result)
                    }
                });
            } catch (err) {
                reject({ message: err.message });
            }
        });
    },
    sendemail_comiteEtica: function(backend_ws, asunto, cuerpo, remitente, login) {
        return new Promise(function(resolve, reject) {
            try {
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/enviarcorreo",
                    body: JSON.stringify({
                        asunto: asunto,
                        cuerpo: cuerpo,
                        remitente: remitente,
                        login: login
                    })
                }, (err, res, body) => {
                    if (err) {
                        console.dir(err);
                        if (err != '') {
                            reject({ status: 500, message: 'No se puede conectar con los servidores intentelo en otro momemto' })
                        }
                    } else {
                        var response = body;
                        if (response == 'OK')
                            resolve(response);
                    }
                });
            } catch (err) {
                reject({ message: err });
            }
        });
    },
    getOrgByCargo: function (backend_ws, id) {
        return new Promise(function (resolve, reject) {
            try{
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/organigrama_por_cargo",
                    body:JSON.stringify({id: id})
                }, (error, response, body) => {
                    if(error) {
                        reject({ error: error.message })
                    }else {
                        var result = JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                console.log("Failed organigrama por cargo: "+ err);
                reject({ message: err.message });
            }
        });
    },

};