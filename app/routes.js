const express = require('express')
const model = require('./model')
const router = express.Router()

router.get('/',function(request,response){
    model.list(function(err,res){
        response.send({
            'error': false,
            'body': res
        })
    })
})

router.post('/create',function(request,response){
    console.log(request.body)
    model.insert(request.body,function(err,res){
        response.send({
            'error': false,
            'body':res
        })
    })
})

router.post('/update/:id',function(request,response){
    var id = request.params.id
    var obj = request.body
    model.update(id,obj,function(err,res){
        response.send({
            'error': false,
            'body':res
        })
    })
})

// :id representa el valor del parametro enviado 
router.get('/show/:id',function(request,response){
    var id = request.params.id
    model.show(id,function(err,res){
        response.send({
            'error': false,
            'body':res
        })
    })
})

router.delete('/delete/:id',function(request,response){
    var id = request.params.id
    model.remove(id,function(err,res){
        response.send({
            'error': false,
            'body':res
        })
    })
})

module.exports = router