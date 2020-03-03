const TextModel=require('../models/text.js')
var text=new TextModel();

module.exports={
    save:function (req,res) {
        text.save({text:req.body.text})
            .then(response=>{
                if(response.status==200){
                    text.getAll()
                        .then(response=>{
                            res.render('index',{result:response.result})
                        })
                        .catch(response=>{
                            res.render('index',{messae:'Error inesperado vuelva intentarlo mas tarde'})
                        })
                }
            })
            .catch(response=>{
                           res.render('index',{messae:'Error inesperado vuelva intentarlo mas tarde'})
            })
    },
    getAll:function (req,res) {
        text.getAll()
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
    },
    delete:function (req,res) {
        text.delete(req.body.id)
            .then(response=>{
                if(response.status==200){
                    text.getAll()
                        .then(response=>{
                            res.status(200).send({status:200,result:response.result})
                        })
                        .catch(response=>{
                            res.status(500).send({message:response.message})
                        })
                }
            })
            .catch(response=>{
                res.status(500).send({messae:'Error inesperado vuelva intentarlo mas tarde'})
            })
    },
    getItem:function (req,res) {
        text.getItem(req.query.id)
            .then(response=>{
                if(response.status==200){
                    res.render('edit',{id:response.result[0].id,text:response.result[0].text})
                }
            })
            .catch(response=>{
                res.status(500).send({messae:'Error inesperado vuelva intentarlo mas tarde'})
            })
    },
    edit:function (req,res) {
        //console.log(req.body);
        text.edit({id:req.body.id,text:req.body.text})
            .then(response=>{
                if(response.status==200){
                    text.getAll()
                        .then(response=>{
                            res.render('index',{status:200,result:response.result})
                        })
                        .catch(response=>{
                            res.render('index',{message:response.message})
                        })
                }
            })
            .catch(response=>{
                res.status(500).send({messae:'Error inesperado vuelva intentarlo mas tarde'})
            })
    }
}