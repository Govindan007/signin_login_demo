var express=require("express");
var dotenv=require('dotenv')
dotenv.config()

require("./db");
var signin = require("./model")
var cors=require("cors");
var app = express();
//middleware
app.use(express.json());
var port=3004;
app.use(cors());

app.post('/',(req,res)=>{
    try {
        signin(req.body).save();
        res.send("signin sucessfull")
    } catch (err) {
        res.send(err)
    }
})

app.get('/',async(req,res)=>{
    try {
        var data = await signin.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port,()=>{
    console.log(`server is running in ${port}`);
});
