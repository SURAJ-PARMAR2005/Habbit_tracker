const userModel = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function registerUser(req,res) {
    const {username,email,password} = req.body;
    
    const isUserAlreadyExist = await userModel.findOne({
        $or:[
            {username: username},
            {email : email}
        ]
    })

    if(isUserAlreadyExist){
        return res.status(401).json({
            message: "User Already Present."
        })
    }

    const hash  = await bcrypt.hash(password,10);
    const user = await userModel.create({
        username,email,password:hash
    })

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);

    res.cookie("token",token);

    return res.status(201).json({
        message: "user registered successfully",
        token: token
    })

}

async function loginUser(req,res){
    const {email,username,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {username:username},
            {email: email},
        ]
    })

    if(!user){
        return res.status(401).json({
            message: "Invalid Credentials",
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid Password",
        })
    }

    const token = await  jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
        message:"user LoggedIn Successfully",
        email:user.email,
        username:user.username,
        token: token
    })
}

async function getMe(req,res) {
    try {
        const userId = req.userId;

        const user = await userModel.findById(userId).select("-password");
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "server Error"});
    }
}

async function logoutUser(req,res) {
    res.clearCookie("token");
    return res.status(201).json({message: "Logout Successfull"});
}

module.exports = {registerUser,loginUser,getMe,logoutUser};