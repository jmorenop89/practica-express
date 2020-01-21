const sql = require('../db')

module.exports.list = (result) => {
    sql.query('select * from product',result)
}