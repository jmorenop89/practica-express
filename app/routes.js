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
    response.send('Categoria creada')
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
    var req = request.params
    console.log(req)
    response.send('Categoria Eliminada')
})

module.exports = router