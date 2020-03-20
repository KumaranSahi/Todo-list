module.exports.todo=function(req,res){

    const todo=require('../models/todoschema');
    let list=todo.find({},function(err,data){                                             //fetches all the database records
        if(err){
            console.log("Cannot retrieve data from database");
            return;
        }
        res.render('home',{                                                                //renders the page
            todoList:data
        });
        return;
    });
}