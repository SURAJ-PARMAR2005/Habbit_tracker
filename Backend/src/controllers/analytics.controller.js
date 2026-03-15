const dailyModel = require("../models/dailyprogress.model");

async function getHeatMapData(req,res){
    try {
        const userId = req.userId;
        const record = await dailyModel.find({userId});

        const heatmap  = record.map(day => {
            return {
                date : day.date,
                count : day.taskCompleted
            }
        });

        return res.status(201).json({
            message : "data fetched Successfully",
            heatmap
        })

        
    } catch (error) {
        return res.status(401).json({
            message: "server error ",
        })
    }
}


module.exports = {getHeatMapData};