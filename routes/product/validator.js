const Joi = require('joi');

const validateFields = (data, schema) => {
    const validation = Joi.validate(data, schema);
    if (validation.error) {
        console.log("validation: ", validation.error.message);
        return false;
    } else {
        return true;
    }
};

const userActivity = (req, res, next) => {
    const schema = Joi.object().keys({
        groupBy: Joi.string().valid("daily", "weekly", "monthly", "Custom").required(),
        fromDate: Joi.date().format('YYYY-MM-DD').raw().when('groupBy', {'is': 'Custom', then: Joi.date().required()}),
        toDate: Joi.date().format('YYYY-MM-DD').raw().when('groupBy', {'is': 'Custom', then: Joi.date().required()})
    });
    if (validateFields(req.query,schema)) {
        next();
    } else {
        let response = {
            message: "Parameter Missing !!",
            status: 100,
            data: {}
        };
        res.send(JSON.stringify(response));
    }
};

module.exports.userActivity = userActivity;