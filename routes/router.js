const express=require('express');
const router=express.Router();
const todoController=require('../controller/todo_controller');

router.get('/',todoController.todo);
router.use('/taskinput',require('./inputrouter'));
router.use('/deletetask',require('./deleterouter'));

module.exports=router;