const model = require('./model')

module.exports.All = (request, response) => {
    model.list(function(err,res){
        response.send({
            'error': false,
            'body': res
        })
    })
}

module.exports.Create = (request,response) => {
    response.send('crear producto')
}