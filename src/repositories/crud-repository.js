const { winstonLogger } = require("../config");
const { logger } = winstonLogger;

class crudRepository {
  constructor(model) {
    this.model = model;
  }
  async create (data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error("something went wrong in the crud repo : Create", error);
      throw error;
    }
  }
  async get (data){
    try {
      const response = await this.model.findByPk({
        where: {
          id: data
        }
      });
      return response;
    } catch (error) {
      logger.error("something went wrong in the crud repo : get");
      throw error;
    }
  }
  async getAll (){
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("something went wrong in the crud repo : get all");
      throw error;
    }
  }

  async destroy (data){
    try {
      const response = await this.model.destroy({
        where: {
          id: data
        }
      });
      return response;
    } catch (error) {
      logger.error("something went wrong in the crud repo : Delete");
      throw error;
    }
  }
  async update (id, data){
    try {
      const response = await this.model.destroy({
        data,
        where: {
          id: id
        }
      });
      return response;
    } catch (error) {
      logger.error("something went wrong in the crud repo : Update");
      throw error;
    }
  }
}

module.exports = crudRepository;