const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB(); 

app.listen(3000,() => {
    console.log("server up baby at port 3000");
})