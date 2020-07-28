const moment = require("moment");

const getDailyReport = async (productId) => {
    try {
        console.log("moment().startOf('day')._d", moment().startOf('day')._d);
        console.log("moment().endOf('day')._d", moment().endOf('day')._d)
        let data = await db.collection("user_activity_log").aggregate(
            [
                {
                    $match: {
                        "ProductId": productId,
                        "ViewDate": {
                            $gte: moment().startOf('day')._d,
                            $lt: moment().endOf('day')._d
                        }
                    }
                },
                {
                    $project: {
                        UserId: 1,
                        ProductId: 1,
                        _id: 0
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$ProductId",
                            UserId: "$UserId"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$_id.ProductId"
                        },
                        totalCount: {
                            $sum: "$count"
                        },
                        distinctCount: {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        ProductId: "$_id.ProductId",
                        totalCount: 1,
                        distinctCount: 1,
                        _id: 0
                    }
                },
            ]
        ).toArray();
        console.log(data);
        return data;
    } catch (e) {
        throw e;
    }
}

const getWeeklyReport = async (productId) => {
    try {
        console.log("moment().startOf('week')._d", moment().startOf('week')._d);
        console.log("moment().endOf('week')._d", moment().endOf('week')._d)
        let data = await db.collection("user_activity_log").aggregate(
            [
                {
                    $match: {
                        "ProductId": productId,
                        "ViewDate": {
                            $gte: moment().startOf('week')._d,
                            $lt: moment().endOf('week')._d
                        }
                    }
                },
                {
                    $project: {
                        UserId: 1,
                        ProductId: 1,
                        _id: 0
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$ProductId",
                            UserId: "$UserId"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$_id.ProductId"
                        },
                        totalCount: {
                            $sum: "$count"
                        },
                        distinctCount: {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        ProductId: "$_id.ProductId",
                        totalCount: 1,
                        distinctCount: 1,
                        _id: 0
                    }
                },
            ]
        ).toArray();
        return data;
    } catch (e) {
        throw e;
    }
}

const getMonthlyReport = async (productId) => {
    try {
        console.log("moment().startOf('month')._d", moment().startOf('month')._d);
        console.log("moment().endOf('month')._d", moment().endOf('month')._d)
        let data = await db.collection("user_activity_log").aggregate(
            [
                {
                    $match: {
                        "ProductId": productId,
                        "ViewDate": {
                            $gte: moment().startOf('month')._d,
                            $lt: moment().endOf('month')._d
                        }
                    }
                },
                {
                    $project: {
                        UserId: 1,
                        ProductId: 1,
                        _id: 0
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$ProductId",
                            UserId: "$UserId"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$_id.ProductId"
                        },
                        totalCount: {
                            $sum: "$count"
                        },
                        distinctCount: {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        ProductId: "$_id.ProductId",
                        totalCount: 1,
                        distinctCount: 1,
                        _id: 0
                    }
                },
            ]
        ).toArray();
        return data;
    } catch (e) {
        throw e;
    }
}

const getCustomReport = async (productId, fromDate, toDate) => {
    try {
        console.log("toDate", moment(fromDate)._d);
        console.log("fromDate", moment(toDate)._d)
        let data = await db.collection("user_activity_log").aggregate(
            [
                {
                    $match: {
                        "ProductId": productId,
                        "ViewDate": {
                            $gte: moment(fromDate)._d,
                            $lt: moment(toDate)._d
                        }
                    }
                },
                {
                    $project: {
                        UserId: 1,
                        ProductId: 1,
                        _id: 0
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$ProductId",
                            UserId: "$UserId"
                        },
                        count: {
                            $sum: 1
                        }
                    }
                },
                {
                    $group: {
                        _id: {
                            ProductId: "$_id.ProductId"
                        },
                        totalCount: {
                            $sum: "$count"
                        },
                        distinctCount: {
                            $sum: 1
                        }
                    }
                },
                {
                    $project: {
                        ProductId: "$_id.ProductId",
                        totalCount: 1,
                        distinctCount: 1,
                        _id: 0
                    }
                },
            ]
        ).toArray();
        console.log(data);
        return data;
    } catch (e) {
        throw e;
    }
}


module.exports.getDailyReport = getDailyReport;
module.exports.getWeeklyReport = getWeeklyReport;
module.exports.getMonthlyReport = getMonthlyReport;
module.exports.getCustomReport = getCustomReport;