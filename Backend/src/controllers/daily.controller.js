const dailyModel  = require("../models/dailyprogress.model")

const getTodayDate = () => {
     return new Date().toISOString().split("T")[0];
}

async function getDailyData(req,res) {
   try {
     const userId = req.userId;
    const today = getTodayDate();

    let data = await dailyModel.findOne({
        userId : userId,
        date: today,
    })

    if(!data){
        await dailyModel.create({
            userId,
            date: today,
        })
    }

    return res.status(200).json({
        message: "success",
        data
    })


   } catch (error) {
    console.log(error);
    return res.status(401).json({
        message: "server error",
    })
   }
   
}

module.exports = {getDailyData}