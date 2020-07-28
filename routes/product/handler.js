const controller = require("./controller");


const userActivity = async (req, res, next) => {
    try {
        let data = await controller.userActivity(req);
        let response = {
            message: "Sucess",
            status: 200,
            data: data
        };
        res.send(JSON.stringify(response));
    } catch (err) {
        let response = {
            message: "Something went wrong !!",
            status: 100,
            data: {}
        };
        res.send(JSON.stringify(response));
    }
}

module.exports.userActivity = userActivity;