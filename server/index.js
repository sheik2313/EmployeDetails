var express = require("express")
var db=require('./dbconection')

var app = express()


var bodyparser = require("body-parser")
app.use(bodyparser.json())

var cors=require("cors")
app.use(cors())

var router = require('./router')
app.use('/', router)

app.listen(4000, function () {
    console.log("conected");
})
