const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCityName(req, res, next){
  ErrorResponse.message = "Something went wrong while creating the city";
  ErrorResponse.error = new AppError(["city name not found"], StatusCodes.BAD_REQUEST);
  if (!req.body.name) {
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCityName
}