const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post("/", CityMiddlewares.validateCityName, CityController.createCity);

router.get("/", CityController.getCities);

router.get("/:id", CityController.getCity);

router.delete("/:id", CityController.deleteCity);

router.patch("/:id", CityController.updateCity);

module.exports = router;