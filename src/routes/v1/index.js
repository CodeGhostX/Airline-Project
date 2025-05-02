const express = require("express");
const { infoController } = require("../../controllers");
const router = express.Router();
const airplaneRoutes = require("./airplane-routes.js");
const cityRoutes = require("./city-routes.js");
const airportRoutes = require('./airport-routes.js');
const flightRoutes = require('./flight-routes.js')

router.use("/info", infoController.info);
router.use("/airplane", airplaneRoutes);
router.use("/city", cityRoutes);
router.use("/airport", airportRoutes);
router.use("/flight", flightRoutes);

module.exports = router;