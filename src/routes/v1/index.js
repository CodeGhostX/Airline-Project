const express = require("express");
const { infoController } = require("../../controllers");
const router = express.Router();
const airplaneRoutes = require("./airplane-routes.js");
const cityRoutes = require("./city-routes.js");

router.use("/info", infoController.info);
router.use("/airplane", airplaneRoutes);
router.use("/city", cityRoutes);

module.exports = router;