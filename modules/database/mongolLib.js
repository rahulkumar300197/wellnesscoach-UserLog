const {MongoClient} = require('mongodb');


const initializeConnection = async () => {
    try {
        const url = "mongodb://marketplaceuser:qwerty@127.0.0.1:27017/marketplace";
        const dbName = "marketplace";
        let client = await MongoClient.connect(url, {useUnifiedTopology: true});
        return client.db(dbName);
    } catch (err) {
        console.log("ERROR IN CONNECTING WITH MONGO DB : ", err);
        throw err;
    }
}


exports.initializeConnection = initializeConnection;

