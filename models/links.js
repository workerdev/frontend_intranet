const request=require('request');

module.exports = {
    getLinks: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/link_vista", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        for (let i = 0; i < result.length; i++) {
                            var auxiliar = result[i].ruta;
                            var nombre = auxiliar.split("public");
                            result[i].ruta = nombre[(nombre.length)-1];
                        }
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
}