const express=require('express');
const port= process.env.PORT ||8000;

const app=express();
const db=require('./config/mongoose');                      //connecting to db

app.set('view engine','ejs');                               //Setting up view engine
app.set('views','./views');                                 //Setting view papth

app.use(express.urlencoded());
app.use(express.static('./assets'));                         
app.use('/',require('./routes/router'));                     //Setting up the router

app.listen(port,function(err){
    if(err){
        console.log("Error in starting the server"+err);
        return;
    }
    console.log('Server started');
});