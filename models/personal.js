const request = require('request');

module.exports = {
    getPersonal: function(backend_ws) {
        return new Promise(function(resolve, reject) {
            try {
                request(backend_ws + "/directoriovista", function(error, response, body) {
                    if (error != null) {
                        reject({ error: error.message })
                    } else {
                        var result = JSON.parse(body);
                        console.log(result)
                        resolve(result)
                    }
                });
            } catch (err) {
                reject({ message: err.message });
            }
        });
    },
    sendemail_buzonSugerencia: function(backend_ws, asunto, cuerpo, remitente, login) {
        return new Promise(function(resolve, reject) {
            try {
                request.post({
                    headers: { "content-type": "application/json" },
                    url: backend_ws + "/enviarcorreo_buzon",
                    body: JSON.stringify({
                        asunto: asunto,
                        cuerpo: cuerpo,
                        remitente: remitente,
                        login: login
                    }),

                }, (err, res, body) => {
                    console.log(body)
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
                console.log(err);
                console.log(body)
                reject({ message: err.message });
            }
        });
    },
    getTurnoPersonal: function(backend_ws) {
        return new Promise(function(resolve, reject) {
            try {
                request(backend_ws + "/turno_service", function(error, response, body) {
                    if (error != null) {
                        reject({ error: error.message })
                    } else {
                        console.log(body)
                        var result = JSON.parse(body);
                        resolve(result)
                    }
                });
            } catch (err) {
                reject({ message: err.message });
            }
        });
    },
    getCumpleanero: function(backend_ws) {
        return new Promise(function(resolve, reject) {
            try {
                request(backend_ws + "/getCumpleaneros", function(error, response, body) {
                    if (error != null) {
                        reject({ error: error.message })
                    } else {
                        var result = JSON.parse(body);
                        // console.log(result);
                        resolve(result)
                    }
                });
            } catch (err) {
                reject({ message: err.message });
            }
        });
    }
};