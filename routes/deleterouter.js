const express=require('express');
const router=express.Router();
const deleteController=require('../controller/delete_controller')

router.post('/',deleteController.delete);                               //connecting to delete controller

module.exports=router;