const {MongoClient} = require('mongodb');
const moment = require("moment");

const dummyUserId = ["123","234","345","456","567","678","789","890","900","1231","2341","3451","4561","5671","6781","7891","8901","9001"];
const dummyProductId = ["4321","5432","6543","7654","8765","9876"];
const dummyDays = [-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13];


(async () => {
    try {
        const url = "mongodb://marketplaceuser:qwerty@127.0.0.1:27017/marketplace";
        const dbName = "marketplace";
        let client = await MongoClient.connect(url, {useUnifiedTopology: true});
        let db = client.db(dbName);
        await insertDummyData(db);
        console.log("Inserted")
    } catch (err) {
        console.log("ERROR IN CONNECTING WITH MONGO DB : ", err);
        throw err;
    }
})();

const insertDummyData = async (db) => {
    try {
        await db.collection("user_activity_log").insertMany(
            dummyUserId.flatMap((userId) => {
                return dummyProductId.flatMap((productId) => {
                    return dummyDays.flatMap((days) => {
                        return  {
                            UserId: userId,
                            ViewDate: moment().add(days, "days")._d,
                            ProductId: productId
                        }
                    })
                })
            })
        )
    } catch (e) {
        throw e;
    }
}