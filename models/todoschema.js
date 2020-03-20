const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({                              //creating schema
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

const todo=mongoose.model('todo',todoSchema);                         //passing the schema
module.exports=todo;                                                    