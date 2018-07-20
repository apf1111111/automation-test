var express = require("express")
var app = new express()

app.get("/test",function(req,res){
    res.send({
        data:"hello node!"
    })
})

var server = app.listen(3000,function(){
    console.log("服务器已启动~~")
})

module.exports = server