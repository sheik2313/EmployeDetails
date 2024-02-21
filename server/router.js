var express = require("express")
var router = express.Router()

var empcontroller=require('./controller/empcontroller')

router.post('/addemploye',empcontroller.empdisplay)
module.exports = router