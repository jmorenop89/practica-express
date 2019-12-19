const express = require('express')
const router = require('./app/routes')
const bodyParser = require('body-parser')
// llamando módulo
var app = express()
app.use(bodyParser.json())
app.use('/category',router)

app.listen(3000)

console.log('Server: http://localhost:3000')