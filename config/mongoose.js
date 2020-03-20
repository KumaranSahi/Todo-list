const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/majorproject',{ useUnifiedTopology: true });

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the database'));

db.once('open',function(){
    console.log("Connected to database successfully");
});