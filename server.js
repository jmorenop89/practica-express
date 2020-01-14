const express = require('express')
const router = require('./app/routes')
const bodyParser = require('body-parser')
// llamando módulo
var app = express()
app.use(bodyParser.json()) // => tipo de dato json
app.use(bodyParser.urlencoded({extended:true})) // => tipo de datos urlencoded

app.use('/category',router)

app.listen(3000)

console.log('Server: http://localhost:3000')

/*
app.get('/user/:name',function(request,response){
    console.log(request.params)
    response.send('user '+request.params.name)
})

app.post('/user/create',function(request,response){
    console.log(request.body)
    response.send('user '+request.body.name)
})

app.post('/user/show',function(request,response){
    console.log(request.query) // valores de request.query
    response.send('order '+request.query.order)
})

app.post('/role',function(request,response){
    response.status(404).json({
        'error': false,
        'data': {
            'user':'root',
            'role':'super'
        }
    })
})

app.post('/product',function(request,response){
    response.send('<h1>Hola Mundo</h1>')
})
*/