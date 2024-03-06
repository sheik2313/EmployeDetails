var express = require("express")
var router = express.Router()

var empcontroller=require('./controller/empcontroller')

router.post('/addemploye',empcontroller.empdisplay)
router.get('/findempdata',empcontroller.findemployedata)

router.post('/empdelete/:id',empcontroller.empdelete)
router.get('/editemp/:id',empcontroller.editempdetail)
router.post('/edit',empcontroller.empupdate)

module.exports = router