module.exports.input=function(req,res){
    console.log(req.body);

    const todo=require('../models/todoschema');
    
    todo.create(req.body);                                                      //creates database document
    res.redirect('back');
    return;
}