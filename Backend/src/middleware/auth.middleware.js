const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authMiddleWare(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Uauthorised"
        })
    }
    try {
        const decoded = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({message : "Unathorised"});
        }

        req.userId = decoded.id;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message : "Invalid Token"
        })
    }  
}

module.exports = {authMiddleWare}