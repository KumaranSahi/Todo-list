const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    date:{
        type:Date
    }
});

const todo=mongoose.model('todo',todoSchema);
module.exports=todo;