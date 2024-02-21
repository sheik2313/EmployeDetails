var express = require("express")
var router = require('./router')
var app = express()


var bodyparser = require("body-parser")
app.use(bodyparser.json())

var db=require('./dbconection')


app.use('/', router)
app.listen(4009, function () {
    console.log("conected");
})
