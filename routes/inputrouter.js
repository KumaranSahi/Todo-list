const express=require('express');
const router=express.Router();
const inputController=require('../controller/input_controller');

router.post('/',inputController.input);

module.exports=router;