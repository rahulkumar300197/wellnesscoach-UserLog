const service = require("./service");


const userActivity = async (req) => {
    try {
        if (req.query.groupBy === "daily") {
            return await service.getDailyReport(req.params.productId);
        } else if (req.query.groupBy === "weekly") {
            return await service.getWeeklyReport(req.params.productId);
        } else if (req.query.groupBy === "monthly") {
            return await service.getMonthlyReport(req.params.productId);
        } else {
            return await service.getCustomReport(req.params.productId, req.query.fromDate, req.query.toDate);
        }
    } catch (err) {
        console.log("controller error [userActivity]: ", err);
        throw err;
    }
}

module.exports.userActivity = userActivity;