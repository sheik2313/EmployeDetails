var mongoose=require("mongoose")
var empschema=new mongoose.Schema({
    empname:String,
    empmail:String,
    empsalary:Number
})
module.exports=new mongoose.model('employees',empschema)