const express=require('express');
const app=express();
const router=express.Router();
const mongoose=require('mongoose');
const config=require('./config/database');
const path=require('path');
const authentication=require('./routes/authentication')(router);
const blogs=require('./routes/blogs')(router);
const bodyParser = require('body-parser');
const cors=require('cors'); 
const port=process.env.PORT || 8080;
mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Could not connect to database: ',err);
    }
    else
    {
       // console.log(config.secret);
        console.log('Connected to database: ',config.db);
    }
});

app.use(cors({
    origin:'http://localhost:4200'
}));

//change 1
//change 2
//change 3
// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
//app.use(express.static(__dirname + '/client/dist/')); 
app.use(express.static(__dirname + '/public'));// Provide static directory for frontend
app.use('/authentication', authentication);
app.use('/blogs', blogs);
app.get('*',(req,res)=>{
    //res.sendFile(path.join(__dirname+'/client/dist/client/index.html'));
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port,()=>{
    console.log('Listening on port '+ port);
});
