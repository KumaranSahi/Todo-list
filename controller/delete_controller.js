module.exports.delete=function(req,res){
       
    const todo=require('../models/todoschema');

    if(!Array.isArray(req.body.taskdelete)){
        todo.findByIdAndDelete(req.body.taskdelete,function(err){
            if(err){
                console.log('We have an error');
            }
        });
        res.redirect('back');
        return;
    }

    for(let i=0;i<req.body.taskdelete.length;i++){
        todo.findByIdAndDelete(req.body.taskdelete[i],function(err){
            if(err){
                console.log('We have an error');
            }
        });
    }
    res.redirect('back');
    return;
}