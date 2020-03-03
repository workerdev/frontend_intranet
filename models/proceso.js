const request=require('request');
module.exports = {
    getProcesos: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                console.log("llego al final proc MODEL "+backend_ws)
                request(backend_ws+"/turno_service", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        console.log(body)
                        var result = JSON.parse(body);
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    }
};