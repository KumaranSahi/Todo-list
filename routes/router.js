//base router

const express=require('express');
const router=express.Router();
const todoController=require('../controller/todo_controller');

router.get('/',todoController.todo);
router.use('/taskinput',require('./inputrouter'));                          //connecting to input router
router.use('/deletetask',require('./deleterouter'));                        //connecting to delete router

module.exports=router;