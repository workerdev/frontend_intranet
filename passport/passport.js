var localStrategy=require('passport-local').Strategy;
const User=require('../models/user.js')
var user=new User();

module.exports=function (passport) {
   passport.serializeUser(function (user,done) {
         done(null,user);
   })

   passport.deserializeUser(function (obj,done) {
         done(null,obj);
   });

   passport.use(new localStrategy({
       passReqToCallback:true
   },function (req,username,password,done) {
       if(user.isPasswordValid(password)==false){
           return done(null,false,req.flash('authmessage','Sus datos son incorrectos'));
           return;
       }
       user.authenticate(username,password)
           .then(response=>{
               console.log(response);
               if(response.status==200){
                   if(response.result.state=='verificado'){
                       return done(null,{
                           id:response.result.id,
                           nombre:response.result.nombre,
                           username:response.result.username
                       });
                   }else{
                       return done(null,false,req.flash('authmessage','El usuario no verificado, necesita ingresar a su correo electronico para la verificación'));
                   }

               }else{
                   return done(null,false,req.flash('authmessage','Sus datos son incorrectos'));
               }

           })
           .catch(response=>{
               console.log(response);
               return done(null,false);
           })

   }))

};