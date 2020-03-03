const nodemailer = require('nodemailer');

module.exports= {
    htmlRegister:function (token) {

    },
    htmlForgetPassword:function (token) {
        return `<a href="https://analizercomments.mybluemix.net/verif_change?security=${token}">Verificar cambio de contraseña</a>`;
    },
    sendRegister:function(email,token) {
        let data=new Promise(function (resolve,reject) {
            try{
                nodemailer.createTestAccount((err, account) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: 'mail.cloudbit.com.bo',//google:smtp.gmail.com, webmail:mail.cloudbit.com.bo
                        port: 26, //587: para smtp
                        secure: false, // use TLS
                        auth: {
                            user: 'cgutierrez@cloudbit.com.bo', //cgutierrez@cloudbit.com.bo , srlcloudbit@gmail.com
                            pass: 'Cgutierrez2017'  //Cgutierrez2017 , control*88
                        },
                        tls: {
                            // do not fail on invalid certs
                            rejectUnauthorized: false
                        }
                    });

                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: 'cgutierrez@cloudbit.com.bo', // sender address
                        to: email, // list of receivers
                        subject: 'Verifica tu cuenta', // Subject line
                        text: 'Bienvenido a la familia de CloudBit, y gracias por elegir nuestro servicio de SMA', // plain text body
                        html: "<a href='https://analizercomments.mybluemix.net/verification?security="+token+"' target='_blank'>Verificar</a>" // html body
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                            reject({status:500,message:error.message})
                        }
                        resolve({status:200,message:'correo enviado correctamente'})
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                });
            }catch(err){
                console.log(err.message);
                reject({status:500,message:error.message})
            }
        })
        return data
    },
    sendChange:function(email,token) {
        let data=new Promise(function (resolve,reject) {
            try{
                nodemailer.createTestAccount((err, account) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: 'mail.cloudbit.com.bo',//google:smtp.gmail.com, webmail:mail.cloudbit.com.bo
                        port: 26, //587: para smtp
                        secure: false, // use TLS
                        auth: {
                            user: 'cgutierrez@cloudbit.com.bo', //cgutierrez@cloudbit.com.bo , srlcloudbit@gmail.com
                            pass: 'Cgutierrez2017'  //Cgutierrez2017 , control*88
                        },
                        tls: {
                            // do not fail on invalid certs
                            rejectUnauthorized: false
                        }
                    });

                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: 'cgutierrez@cloudbit.com.bo', // sender address
                        to: email, // list of receivers
                        subject: 'Confirma el cambio de contraseña', // Subject line
                        text: 'Bienvenido a la familia de CloudBit, y gracias por elegir nuestro servicio de SMA', // plain text body
                        html: "<a href='https://analizercomments.mybluemix.net/verif_change?security="+token+"'>Confirmar cambio</a>" // html body
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                            reject({status:500,message:error.message})
                        }
                        resolve({status:200,message:'correo enviado correctamente'})
                        console.log('Message sent: %s', info.messageId);
                        // Preview only available when sending through an Ethereal account
                        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                    });
                });
            }catch(err){
                console.log(err.message);
                reject({status:500,message:error.message})
            }
        })
        return data
    }
}