const { Flight, Airplane, Airport, City } = require("../models");
const { Sequelize } = require('sequelize');
const crudRepository = require("./crud-repository");

class FlightRepository extends crudRepository {
  constructor() {
    super(Flight);
  }
  async getAllFlights(customFilters, sortFliters) {
    const result = await Flight.findAll({
      where: customFilters,
      order: sortFliters,
      include: [
        {
          model: Airplane,
          required: true,
        },
        {
          model: Airport,
          as: "departureAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportCode"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
          required: true,
          include: {
            model: City,
            required: true
          }
        },
        {
          model: Airport,
          as: "arrivalAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportCode"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
          required: true,
          include: {
            model: City,
            required: true
          }
        },
      ],
    });
    return result;
  }
}

module.exports = FlightRepository;
