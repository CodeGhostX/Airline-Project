const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirport(req, res) {
  try {
    const newAirport = await AirportService.createAirport(req.body);
    SuccessResponse.message = "Successfully created an airport";
    SuccessResponse.data = newAirport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating an airport";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirport
};
