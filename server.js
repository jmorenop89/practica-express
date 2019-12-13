const express = require('express')
const bodyParser = require('body-parser')
// llamando módulo
var app = express()
app.use(bodyParser.json())

/* app.use('/',function(request,response){
    response.send('Hola Express')
}) */

app.get('/',function(request,response){
    response.send('Hola GET')
})

app.post('/',function(request,response){
    response.send('enviado desde POST')
})

app.get('/product',function(request,response){
    response.send('Listar Productos')
})

app.post('/product/create',function(request,response){
    console.log(request.body)
    response.send('Producto creado')
})

app.listen(3000)

console.log('Server: http://localhost:3000')