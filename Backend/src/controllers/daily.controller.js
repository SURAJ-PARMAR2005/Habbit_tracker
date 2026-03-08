const dailyModel  = require("../models/dailyprogress.model")
const userModel = require("../models/user.model")
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

async function updateDailyData(req,res){
    try {
     const userId = req.userId;
    const {type,name} = req.body;
    const today = getTodayDate();

    let progress = await dailyModel.findOne({
        userId,
        date: today,
    })

    if(!progress){
        progress = await dailyModel.create({
            userId,
            date: today,
        })
    }

    const user = await userModel.findById(userId);

    if(!user){
        return res.status(401).json({
            message: "User Not found",
        })
    }

    let xpReward = 0;
    let StatUpdate = {};

    if(type == "quest"){
        if(progress.quest[name]){
            return res.json({
                message : "quest Already completed",
                progress,
            })
        }

        progress.quest[name] = true;

        progress.taskCompleted += 1;
        xpReward = 100;
        if(name == "study"){
        StatUpdate.intelligence = 1;
        xpReward = 100;
        }
         if(name == "gym"){
        StatUpdate.strength = 1;
        xpReward = 100;
        } 
        if(name == "meditation"){
        StatUpdate.wisdom = 1;
        xpReward = 100;
        }
    }

    if(type == "extra"){
        progress.extra[name] += 1;
        xpReward = 50;
    }
    

    user.xp += xpReward;
    progress. totalXpEarnedToday += xpReward;

    if(StatUpdate.strength) {
        user.strength += StatUpdate.strength;
    }
    if(StatUpdate.intelligence){
        user.intelligence += StatUpdate.intelligence;
    }
    if(StatUpdate.wisdom){
        user.wisdom += StatUpdate.wisdom;
    }
    
    const LEVEL_THRESHOLD = 1000;

    if (user.xp >= LEVEL_THRESHOLD) {
      user.level += 1;
      user.xp = user.xp % LEVEL_THRESHOLD;
    }

    // 8️⃣ SAVE
    await progress.save();
    await user.save();

    // 9️⃣ RESPONSE
    return res.status(200).json({
      message: "Progress updated",
      progress,
      user
    });
           
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message:  "server error",
        })
    }
}

module.exports = {getDailyData,updateDailyData}