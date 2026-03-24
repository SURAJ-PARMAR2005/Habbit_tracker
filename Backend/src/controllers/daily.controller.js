const dailyModel  = require("../models/dailyprogress.model")
const userModel = require("../models/user.model")
const getTodayDate = () => {
    
    return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
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

        // --- STREAK LOGIC FIXED: ONLY CHECK WHEN EXACTLY TRANSITIONING FROM 2 TO 3 ---
        if(progress.taskCompleted === 3){
            // Calculate yesterday in IST
            const now = new Date();
            // We can get yesterday by subtracting 24 hours (roughly) but using UTC math + timezone is better, 
            // or simply relying on the Date object
            const yesterdayStr = new Date(now.getTime() - 24*60*60*1000).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

            const prevDay = await dailyModel.findOne({
                userId,
                date: yesterdayStr
            });

            if(prevDay && prevDay.taskCompleted === 3){
                user.currStreak += 1;
            } else {
                user.currStreak = 1;
            }

            user.longestStreak = Math.max(user.currStreak, user.longestStreak);
        }
    }

    if(type == "extra"){
        progress.extra[name] += 1;
        xpReward = 50;
        await user.save();
    }
    

    user.xp += xpReward;
    progress. totalXpEarnedToday += xpReward;

    if(StatUpdate.strength){
     user.stats.strength += StatUpdate.strength;
    }

    if(StatUpdate.intelligence){
        user.stats.intelligence += StatUpdate.intelligence;
    }
    if(StatUpdate.wisdom){
        user.stats.wisdom += StatUpdate.wisdom;
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


async function getPermData(req,res){
    try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if(!user){
        return res.status(401).json({
            message: "Invalid Credential",
        })
    }
    //means user exists
    //i want curr streak and stasts 
    return res.status(201).json({
        message: "success",
        user
    })



    } catch (error) {
        console.log(error);
        return res.status.json({
            message: "server Error"
        })
    }    
}

// 
module.exports = {getDailyData,updateDailyData,getPermData}