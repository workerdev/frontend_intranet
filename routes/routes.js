const express = require('express');
const router = express.Router();
var passport=require('passport');
const userControl=require('../Controllers/user');
const textControl=require('../Controllers/text');

/* GET home page. */
router.get('/',function(req, res, next){
    res.render('index/index');
});

router.get('/register',function (req,res,next) {
  res.render('register')
});

router.post('/register',userControl.create,function (req,res,next) {
  res.render('verif_acount',{message:'usuario creado exitosamente'});
});

router.get('/verification',userControl.verification,function(req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  res.render('login',{message:req.flash('authmessage')});
});

router.post('/login/authenticate',passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login',
  failureFlash:true
}));

router.get('/logout',userControl.logout)

router.post('/text_save',userControl.validateUser,textControl.save)
router.post('/text_delete',userControl.validateUser,textControl.delete)
router.get('/text_edit',userControl.validateUser,textControl.getItem)
router.post('/edit_savechage',userControl.validateUser,textControl.edit)

router.get('/forget_password',function (req,res) {
  res.render('forget_password');
})

router.post('/verif_email',userControl.verifEmail);

router.get('/verif_change',userControl.verif_chage,function (req,res) {
  res.render('change_password');
})

router.post('/new_password',userControl.change_password,function (req,res) {
  res.render('login',{message:'La nueva contraseña se cambio exitosamente'})
})

router.post('/change_new_password',userControl.change_new_password,function (req,res) {
  res.render('login',{message:'La nueva contraseña se cambio exitosamente'})
})

router.get('/perfil',userControl.validateUser,userControl.getPerfil);


module.exports = router;
