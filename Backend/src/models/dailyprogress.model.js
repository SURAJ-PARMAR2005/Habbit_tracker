const mongoose  = require("mongoose");

const dailySchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        required : true,
        index: true
    },
    date : {
        type : String ,
        required : true,
        index : true
    },
    quest : {
        study : {type : Boolean,default:false},
        gym : {type : Boolean,default:false},
        meditation : {type : Boolean,default:false},
    },

    extra : {
        extraStudy : {type : Number, default: 0},
        extraMala : {type: Number , default: 0},
        extraExercise :  {type: Number , default: 0},
        NoJunk : {type : Number, default: 0},
    }
    ,
    taskCompleted : {
        type :  Number ,
        default : 0,
    },
    totalXpEarnedToday : {
        type : Number,
        default : 0,
    }
}, {timestamps: true});

const dailyModel = mongoose.model("dailyProgress",dailySchema);

module.exports = dailyModel;