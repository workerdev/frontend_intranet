'use strict'
const conecction=require('./conecct')
const env=require('./env')
function Text(){

}

Text.prototype.save=function (text) {
    var sql = 'INSERT INTO text (text) VALUES ?';
    var values=[
        [text.text]
    ]
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[values], function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})//sintaxis erronea
                    return;
                }
                resolve({status:200,result:'Texto creado exitosamente'}) //creado exitosamente
            });

        }catch(err){
            reject({status:500,message:err.message})//error por el servidor de la BD
        }
    })
    return data;
}

Text.prototype.getAll=function () {
    var sql = "SELECT * FROM text where status='activo'";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql, function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})
                    return;
                }
                resolve({status:200,result:result});
            });

        }catch(err){
            reject({status:500,message:err.message})
        }
    })

    return data;
}

Text.prototype.save=function (text) {
    var sql = 'INSERT INTO text (text,status) VALUES ?';
    var values=[
        [text.text,'activo']
    ]
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[values], function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})//sintaxis erronea
                    return;
                }
                resolve({status:200,result:'Texto creado exitosamente'}) //creado exitosamente
            });

        }catch(err){
            reject({status:500,message:err.message})//error por el servidor de la BD
        }
    })
    return data;
}

Text.prototype.delete=function(id) {
    var sql = "update text set status='inactivo' where id=?";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[id], function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})
                    return;
                }
                resolve({status:200})
            });

        }catch(err){
            console.log(err.message);
            reject({status:500,message:err.message})
        }
    })

    return data;
}

Text.prototype.edit=function(text) {
    var sql = "update text set text=? where id=?";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[text.text,text.id], function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})
                    return;
                }
                resolve({status:200})
            });

        }catch(err){
            console.log(err.message);
            reject({status:500,message:err.message})
        }
    })

    return data;
}

Text.prototype.getItem=function(id) {
    var sql = "select * from text where id=?";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[id], function (err, result) {
                if (err) {
                    console.log(err.message);
                    resolve({status:400,message:err.message})
                    return;
                }
                resolve({status:200,result:result})
            });

        }catch(err){
            console.log(err.message);
            reject({status:500,message:err.message})
        }
    })

    return data;
}

module.exports=Text;