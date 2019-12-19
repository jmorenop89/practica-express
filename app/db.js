/* Trabajaremos la conexión a una base de datos MySQL
    para ello necesitamos tener instalado el modulo
    ~ npm i mysql
 */
// invocamos el modulo
const mysql = require('mysql')
// crea la conexión
var cnn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'qhatu'
})

cnn.connect(function(err){
    if (err) throw err
})

module.exports = cnn