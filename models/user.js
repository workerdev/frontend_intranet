'use strict'
const conecction=require('./conecct')
const env=require('./env')
const encryptor = require('simple-encryptor')(env.KEY_ENCRYPT);
var   passwordValidator = require('password-validator');
// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']);


User.prototype.isPasswordValid=function(password){
    return schema.validate(password)
}

function User(){

}

User.prototype.setRole=function(id_role) {
	this.id_role=id_role;
}

User.prototype.setName=function(name) {
    this.name=name;
}

User.prototype.setLastname=function(last_name) {
    this.last_name=last_name;
}

User.prototype.setCompany=function(company) {
    this.company=company;
}

User.prototype.setUsername=function(username) {
    this.username=username;
}
User.prototype.setPassword=function(password){
    this.password=password;
}
User.prototype.setState=function(state){
    this.state=state;
}

User.prototype.save=function(user){
    var sql = 'INSERT INTO user (id_role,name,last_name,company,username,password,state) VALUES ?';
    var values=[
        [user.id_role,user.name,user.last_name,user.company,user.username,encryptor.encrypt(user.password),user.state]
    ]
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[values], function (err, result) {
		     if (err) {
                 console.log(err.message);
		      	resolve({status:400,message:err.message})//sintaxis erronea
		      	return;
		     }
		     resolve({status:200,result:'Usuario creado exitosamente'}) //creado exitosamente
         });

        }catch(err){
              reject({status:500,message:err.message})//error por el servidor de la BD
        }
    })
  return data;
}

function getUserByusername(username){
    var sql = 'SELECT * FROM user where username=?';
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[username], function (err, result) {
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

User.prototype.getPerfil=function (id) {
    var sql = 'SELECT * FROM user where id=?';
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[id], function (err, result) {
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

User.prototype.getAll=function () {
    var sql = 'SELECT * FROM user';
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

User.prototype.existCompany=function(company) {
    var sql = 'SELECT * FROM user where company=?';
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[company], function (err, result) {
                if (err) {
                    resolve({status:400,message:err.message})
                    return;
                }
                if(result!=""){
                    resolve(true)
                }else{
                    resolve(false)
                }
            });

        }catch(err){
            reject({status:500,message:err.message})
        }
    })

    return data;
}

User.prototype.updateState=function(username) {
    var sql = "update user set state='verificado' where username=?";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[username], function (err, result) {
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

User.prototype.updatePassword=function(username,password) {
    var sql = "update user set password=? where username=?";
    let data=new Promise(function(resolve,reject){
        try{
            conecction.query(sql,[encryptor.encrypt(password),username], function (err, result) {
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

User.prototype.existUsername=function(username) {
    let data=new Promise(function(resolve,reject){
        try{
            getUserByusername(username)
                .then(response=>{
                    if(response.result!=""){
                        resolve(true);
                    }else{
                        resolve(false);
                    }
                    resolve(result)
                })
                .catch(response=>{
                    resolve(response);
                })

        }catch(err){
            reject({status:500,message:err.message})
        }
    })

    return data;
}



User.prototype.authenticate=function(username,password){
    let data=new Promise(function(resolve,reject){
        let result={status:401,result:null};
        try{
            getUserByusername(username)
                .then(response=>{
                    console.log(response);
                    for(var i=0; i<response.result.length;i++){
                        if(encryptor.decrypt(response.result[i].password)==password){
                            result={status:200,result:response.result[i]};
                        }
                    }
                    resolve(result)
                })
                .catch(response=>{
                    resolve(response);
                })

        }catch(err){
            reject({status:500,message:err.message})
        }
    })

    return data;
}




module.exports=User;