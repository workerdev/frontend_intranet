const email=require('../services/email');

module.exports={
    send:function (req,res) {
          email.send2(req.body.email)
              .then(resposne=>{
                  //console.log(resposne);
                  res.status(200).send(resposne);
              })
              .catch(response=>{
                  //console.log(resposne);
                  res.status(200).send(resposne);
              })
    }
};