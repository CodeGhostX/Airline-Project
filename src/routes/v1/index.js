const express = require("express");
const { infoController } = require("../../controllers");
const router = express.Router();

router.use("/info", infoController.info);

module.exports = router;