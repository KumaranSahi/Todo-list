module.exports.input=function(req,res){

    const todo=require('../models/todoschema');
    
    todo.create(req.body);                                                      //creates database document
    res.redirect('back');
    return;
}