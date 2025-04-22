const express = require("express");
const { createAirplane } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  createAirplane.createAirplane
);

module.exports = router;
