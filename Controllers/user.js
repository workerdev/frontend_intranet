const User=require('../models/user.js');
const VerifToken=require('../models/jwt');
const Email=require('../services/email');
const cookie = require('cookie');
const moment=require('moment');
var user=new User();

function create(req,res,next) {
    var user=new User();
    user.setRole(8);
    user.setName(req.body.first_name);
    user.setLastname(req.body.last_name);
    user.setCompany(req.body.company);
    user.setUsername(req.body.email);
    user.setPassword(req.body.password);
    user.setState('sin verificar');

    user.existUsername(req.body.email)
        .then(response=>{
               if(response){
                   res.render('register',{message:'La dirección de correo electronico ya existe!'})
               }else{
                   user.existCompany(req.body.company)
                       .then(response=>{
                           if(response){
                               res.render('register',{message:'El nombre de la empresa ya existe!'});
                           }else{
                               if(user.isPasswordValid(req.body.password)){
                                   user.save(user)
                                       .then(response=>{
                                           if(response.status==200){
                                               var token=VerifToken.createToken(req.body.email);
                                               Email.sendRegister(req.body.email,token)
                                                   .then(response=>{
                                                       //console.log(response);
                                                       next()
                                                   })
                                                   .catch(response=>{
                                                       //console.log(response);
                                                       res.status(400).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
                                                   })
                                           }else{
                                               res.status(200).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
                                           }
                                       })
                                       .catch(response=>{
                                           res.status(500).send({status:500,message:response.message})
                                       })
                               }else{
                                   res.render('register',{message:'La contraseña debe tener un mínimo de 8 caracteres alfanuméricos al menos una mayúscula, minúscula, un numero y no debe tener espacios'})
                               }

                           }
                       })
                       .catch(response=>{
                           res.status(500).send({status:500,message:response.message})
                       })
               }
        })
        .catch(response=>{
            res.status(500).send({status:500,message:response.message})
        })
    }

 function getAll(req,res) {
     user.getAll()
         .then(response=>{
             if(response.status==200){
                 res.render('index',{result:response.result});
             }else{
                 res.status(400).send({status:400,message:'Error inesperado vuelva a intentarlo mas tarde'})
             }
         })
         .catch(response=>{
             res.status(500).send({status:500,message:response.message});
         })
 }

function verification(req,res,next){
    try {
        var payload= VerifToken.getToken(req.query.security);
        if(payload.exp < moment().unix()
        ){
        }else{
              user.updateState(payload.sub)
                  .then(resposne=>{
                      if(resposne.status==200){
                          next()
                      }
                  })
                  .catch(response=>{
                      res.status(500).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
                  })
        }
    }catch (err){
        console.log('error de token :'+err.message);
        res.render('login',{message:'tiempo de verificación de correo expirado'});
    }
}

function verif_chage(req,res,next){
    try {
        var payload= VerifToken.getToken(req.query.security);
        if(payload.exp < moment().unix()){
        }else{
            res.setHeader('Set-Cookie', cookie.serialize('key', String(req.query.security), {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 1 // 1 days
            }));
            res.statusCode = 200;
            res.setHeader('Location', req.headers.referer || '/')
            next();
        }
    }catch (err){
        console.log('error de token :'+err.message);
        res.render('login',{message:'tiempo de verificación de correo expirado'});
    }
}
function change_password(req,res,next) {
    if(user.isPasswordValid(req.body.password && req.body.newpassword)){
        if(req.body.password==req.body.newpassword){
            var payload= VerifToken.getToken(req.cookies.key);
            user.updatePassword(payload.sub,req.body.newpassword)
                .then(response=>{
                     if(response.status==200){
                         next();
                     }
                })
                .catch(response=>{
                    res.status(500).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
                })

        }else{
            res.render('change_password',{message:'Las contraseñas deben ser iguales'});
        }
    }else{
        res.render('change_password',{message:'La contraseña debe tener un mínimo de 8 caracteres alfanuméricos al menos una mayúscula, minúscula, un numero y no debe tener espacios'})
    }
}

function change_new_password(req,res,next) {
    if(user.isPasswordValid(req.body.password && req.body.newpassword)){
        //console.log(req.body.password);
        //console.log(req.body.newpassword);
        if(req.body.password==req.body.newpassword){
            user.updatePassword(req.user.username,req.body.newpassword)
                .then(response=>{
                    if(response.status==200){
                        next();
                    }
                })
                .catch(response=>{
                    res.status(500).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
                })

        }else{
            res.render('change_password',{message:'Las contraseñas deben ser iguales'});
        }
    }else{
        res.render('change_password',{message:'La contraseña debe tener un mínimo de 8 caracteres alfanuméricos al menos una mayúscula, minúscula, un numero y no debe tener espacios'})
    }
}

function verifEmail(req,res,next) {
    user.existUsername(req.body.email)
        .then(response=>{
              if(response){
                  var token=VerifToken.createToken(req.body.email);
                  Email.sendChange(req.body.email,token)
                      .then(response=>{
                          res.render('forget_password',{message:'Ingresa a tu correo para poder acceder al cambio de tu contraseña'});
                      })
                      .catch(response=>{
                          res.render('forget_password',{message:'A ocurrido un error inesperado intentelo en otro momento'})
                     })
              }else{
                  res.render('forget_password',{message:'El correo no se encuentra registrado'})
              }
        })
        .catch(response=>{
                 res.status(500).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
        })
}

function getPerfil(req,res) {
  user.getPerfil(req.user.id)
      .then(response=>{
          var datos=response.result[0];
            res.render('perfil',{name:datos.name,
                                           last_name:datos.last_name,
                                           company:datos.company,
                                           username:datos.username});
       })
      .catch(response=>{
          res.status(500).send({status:400,message:'A ocurrido un error inesperado intentelo en otro momento'})
      })

}

function validateUser(req,res,next) {
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect('/login')
    }

}

function logout(req,res,next) {
    req.logout();
    res.redirect('/login');
}

module.exports={
    create,
    getAll,
    verification,
    validateUser,
    verif_chage,
    change_password,
    change_new_password,
    verifEmail,
    getPerfil,
    logout
}