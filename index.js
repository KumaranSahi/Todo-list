const express=require('express');
const port=8000;

const app=express();
const db=require('./config/mongoose');
const todo=require('./models/todoschema');

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/',require('./routes/router'));

app.listen(port,function(err){
    if(err){
        console.log("Error in starting the server"+err);
        return;
    }
    console.log('Server started');
});