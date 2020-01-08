const sql = require('./db')
/*
    result => (err,res){

    }
*/
function list(result){
    sql.query('select * from category',result)
}

function insert(obj, result){
    sql.query('insert into category set ?',obj,result)
}

function update(id,obj,result){
    sql.query('update category set name = ?, slug = ? where id = ?',[obj.name,obj.slug,id],result)
}

function show(id,result){
    // options = id | [id,other]
    sql.query('select * from category where id=?',id,result)
}

function remove(id,result){
    sql.query('delete from category where id = ?',id,result)
}

module.exports = {
    list,show,insert,update,remove
}