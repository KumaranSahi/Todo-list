const express=require('express');
const port=8000;

const app=express();

app.use('/',require('./routes/router'));

app.listen(port,function(err){
    if(err){
        console.log("Error in starting the server"+err);
        return;
    }
    console.log('Server started');
});