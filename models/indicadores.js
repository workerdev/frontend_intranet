const request=require('request');

module.exports = {
    getDiasSinAccidentes: function (backend_ws) {
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/accidente_vista", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        try {
                            var result =JSON.parse(body);
                            //console.log("DIAS==============================================================")
                            //console.log(result)
                            resolve(result)
                        }catch (e) {
                            resolve(0)
                        }
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
}