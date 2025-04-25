const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    const result = await CityService.createCity(req.body);
    SuccessResponse.data = result;
    SuccessResponse.message = "City created successfully";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getCities(_, res) {
  try {
    const allCities = await CityService.getCities();
    SuccessResponse.message = "Successfully fetched all the cities";
    SuccessResponse.data = allCities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching all cities";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.message = "Successfully fetched the city";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function deleteCity(req, res){
  try {
    const result = await CityService.deleteCity(req.params.id);
    SuccessResponse.message = "Successfully Deleted the city";
    SuccessResponse.data = result;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateCity(req, res){
  try {
    const id = req.params.id;
    const result = await CityService.updateCity(id, req.body);
    SuccessResponse.data = result;
    SuccessResponse.message = "City data updated Successfully";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log("Status Code : ", error.statusCode)
    return res.status(500).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  deleteCity,
  getCity,
  updateCity
}
