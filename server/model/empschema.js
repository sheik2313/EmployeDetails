var mongoose=require("mongoose")
var empschema=new mongoose.Schema({
    empname:String,
    empuserid:Number,
    empsalary:Number
})
module.exports=new mongoose.model('employees',empschema)