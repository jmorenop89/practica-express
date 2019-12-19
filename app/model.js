const sql = require('./db')
/*
    result => (err,res){

    }
*/
function list(result){
    sql.query('select * from category',function(error,response){
        if(error){
            result(error,null)
        }else{
            result(null,response)
        }
    })
}

function show(id,result){
    // options = id | [id,other]
    sql.query('select * from category where id=?',id,result)
}

module.exports = {
    list,show
}