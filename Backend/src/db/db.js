const mongoose  = require("mongoose");
require("dotenv").config();


async function connectDB() {
    try {
    await mongoose.connect(process.env.DATABASE_URI);
        console.log("DB CONNECTED SUCCESSFULLY!")
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDB;