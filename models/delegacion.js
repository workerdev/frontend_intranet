const request=require('request');

module.exports = {
    getListaDelegacion:function (backend_ws){
        return new Promise(function (resolve,reject) {
            try{
                request(backend_ws+"/data_delautoridad", function (error, response, body) {
                    if(error!=null){
                        reject({error:error.message})
                    }else{
                        var result =JSON.parse(body);
                        //console.log(result)
                        resolve(result)
                    }
                });
            }catch(err){
                reject({message:err.message});
            }
        });
    },
    // getGalerias:function (backend_ws){
    //     return new Promise(function (resolve,reject) {
    //         try{
    //             request(backend_ws+"/galeriaList", function (error, response, body) {
    //                 if(error!=null){
    //                     reject({error:error.message})
    //                 }else{
    //                     var result =JSON.parse(body);
    //                     console.log(result)
    //                     resolve(result)
    //                 }
    //             });
    //         }catch(err){
    //             reject({message:err.message});
    //         }
    //     });
    // },
    // postImagenes:function (backend_ws, id_galeria){
    //     return new Promise(function (resolve,reject) {
    //         try{
    //             // console.log("ingreso a obtener Galeria M");
    //             request.post({
    //                 headers: { "content-type": "application/json" },
    //                 url: backend_ws + "/galeriaIndividualService",
    //                 body: JSON.stringify({
    //                     galeria_id:id_galeria
    //                 })
    //             }, (err, res, body) => {
    //                 if(err) {
    //                     console.dir(err);
    //                     if(err!=''){
    //                         reject({status:500,message:'No se puede conectar con los servidores intentelo en otro momemto'})
    //                     }
    //                 }else {
    //                     var result =JSON.parse(body);
    //                     // console.log(result)
    //                     resolve(result)
    //                 }
    //             });
    //         }catch(err){
    //             console.log(err);
    //             reject({message:err.message});
    //         }
    //     });
    // }
}