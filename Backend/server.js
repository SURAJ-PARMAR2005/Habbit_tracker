const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

connectDB(); 

const Port = process.env.PORT || 3000;

app.listen(3000,() => {
    console.log(`server up baby at port ${Port}`);
})