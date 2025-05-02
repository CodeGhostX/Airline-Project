const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
  try {
    const newFlight = await FlightService.createFlight(req.body);
    SuccessResponse.message = "Successfully created a Flight";
    SuccessResponse.data = newFlight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating a Flight";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getFlights(req, res) {
  try {
    const allFlights = await FlightService.getAllFlights(req.query);
    SuccessResponse.message = "Successfully fetched all the flights";
    SuccessResponse.data = allFlights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching all flights";
    ErrorResponse.error = error;
    return res.status(500).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getFlights
};
