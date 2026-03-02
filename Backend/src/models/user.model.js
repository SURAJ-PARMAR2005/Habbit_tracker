const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required:true,
    },
    email : {
        type : String,
        required: true,
        unique : true,
    },
    password : {
        type:String,
        require:true,
    },
    level : {
        type : Number,
        default : 1,
    },
    xp:{
        type: Number, 
        default:0,
    },
    stats: {
        strength: {type: Number , default : 0, },
        wisdom : {type: Number , default : 0, },
        intelligence : {type: Number , default : 10, },
    }, 
    longestStreak :  {
        type : Number,
        default : 1,
    },
    currStreak : {
        type : Number,
        default : 1,
    }
},{timestamps:true});

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;