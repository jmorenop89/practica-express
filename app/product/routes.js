const express = require('express')
const router = express.Router()

router.get('/',function(request,response){
    response.send('Lista de productos')
})

router.post('/create',function(request,response){
    response.send('crear un nuevo producto')
})

module.exports = router