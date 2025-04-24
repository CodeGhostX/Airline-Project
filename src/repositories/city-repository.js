const { City } = require("../models");
const crudRepository = require("./crud-repository.js");

class CityRepository extends crudRepository {
  constructor() {
    super(City);
  }
}

module.exports = CityRepository;
