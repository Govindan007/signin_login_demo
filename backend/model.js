var mongoose = require("mongoose");
var signinSchema=mongoose.Schema({
    email:String,
    password:String
})
var signinmodel = mongoose.model("signin", signinSchema)
module.exports = signinmodel;