const mongoose = require("mongoose");
// require("dotenv").config();

async function connectDB(){
    await mongoose.connect(" mongodb+srv://ec23096_db_user:zOJmd49SL4wFkE7G@cluster0.cx4idxm.mongodb.net/")
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    
}

module.exports = connectDB;