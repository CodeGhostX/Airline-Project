const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const result = await flightRepository.create(data);
    return result;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllFlights(query) {
  const customFilters = {};
  let sortFilters = [];
  const endingTripTime = " 23:59:59";

  // location filters
  if (query?.trip) {
    const tripDetails = query.trip.split("-");
    customFilters.arrivalAirportCode = tripDetails[0];
    customFilters.departureAirportCode = tripDetails[1];
  }

  // price range filter
  if (query?.price) {
    const [minPrice, maxPrice] = query.price.split("-");
    const priceFilter = {
      [Op.between]: [minPrice, maxPrice],
    };
    customFilters.price = priceFilter;
  }

  // Travellers Filter
  if (query?.travellers) {
    const travellersFilter = {
      [Op.gte]: query.travellers,
    };
    customFilters.remainingSeats = travellersFilter;
  }

  // Date filter
  if (query?.tripDate) {
    customFilters.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }

  // Sorting filter
  if (query?.sort) {
    const params = query.sort.split(",");
    const sortFilter = params.map((param) => param.split("_"));
    sortFilters = sortFilter;
  }

  try {
    const result = await flightRepository.getAllFlights(customFilters, sortFilters);
    return result;
  } catch (error) {
    throw new AppError("Error while fetching all flights", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createFlight,
  getAllFlights
};
