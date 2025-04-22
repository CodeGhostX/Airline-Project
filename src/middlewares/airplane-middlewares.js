const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  ErrorResponse.message = "Something while wrong creating the airplane";
  ErrorResponse.error = { explantion: "modelNumber not found" };
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
