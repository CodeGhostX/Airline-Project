const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const result = await airplaneRepository.create(data);
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
      "Cannot create a new Airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const allAirplanes = await airplaneRepository.getAll();
    return allAirplanes;
  } catch (error) {
    throw new AppError(
      "Unable to fetch all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("Airplane requested not found", error.statusCode);
    }
    throw new AppError(
      "Unable to fetch a airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirplane(id){
  try {
    const result = await airplaneRepository.destroy(id);
    return result;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError("Airplane requested not found, so can't be deleted", error.statusCode);
    }
    throw new AppError(
      "Unable to Delete the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane
};
