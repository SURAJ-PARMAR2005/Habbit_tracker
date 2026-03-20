const express = require("express");
const authRoutes = require("./routes/auth.routes");
const dailyRoutes = require("./routes/daily.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://habbit-tracker-1-bmuo.onrender.com", // your frontend port  frontend url ayega yha 
    credentials: true,
  })
);

app.use("/api/daily",dailyRoutes);

app.use("/api/auth",authRoutes);

app.use("/api/analytics",analyticsRoutes);




module.exports = app;