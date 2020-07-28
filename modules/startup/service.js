const mongoLib = require('./../database/mongolLib');

const initializeServer = async () => {
    try {
        db = await mongoLib.initializeConnection();
        return;
    } catch (err) {
        throw err
    }
}

exports.initializeServer = initializeServer;