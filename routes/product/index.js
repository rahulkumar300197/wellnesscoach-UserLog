const express = require('express');
const router = express.Router();
const validator = require("./validator");
const handler = require("./handler");

router.get('/:productId/user/activity', validator.userActivity, handler.userActivity);

module.exports = router;