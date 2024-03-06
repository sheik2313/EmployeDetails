var empschema=require('../model/empschema')

var empdisplay=async(req,res)=>{
    const display=new empschema({
        empname:req.body. empname,
        empmail:req.body.empmail,
        empsalary:req.body.empsalary
    });
    await display.save()
    .then(data=>{
        res.json({
            msg:"employee detail saved",
           
        })
    })
    .catch(err=>{
        res.json({
            msg:"not saved",
        })
    })

   
}

var findemployedata=(req,res)=>{
    empschema.find({})
    .then(a=>{
        res.json({
            msg:"find eployee data",
            data:a
        })
    })
    .catch(err=>{
        res.json({
            msg:"not find",
            err:err
        })
    })
}
var empdelete=(req,res)=>{
    var id=req.params.id

    empschema.findByIdAndDelete(id)
        .then(data=>{
            res.json({
                status:200,
                msg:"employe detail deleted",
                data:data
                
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                msg:"not deleted"
                
            })
        })
}
var editempdetail=(req,res)=>{

    const id=req.params.id
    empschema.findById(id)
    .then(data=>{
        res.json({
            msg:"employee detail found",
            data:data
            
        })
    })
    .catch(err=>{
        res.json({
            msg:"not found",
            err:err
        })
    })
}
var empupdate=(req,res)=>{
    empschema.findByIdAndUpdate()
    empname=req.body.empname,
    empmail=req.body.empmail,
    empsalary=req.body.empsalary
    
}


module.exports={empdisplay,findemployedata,empdelete,editempdetail,empupdate }