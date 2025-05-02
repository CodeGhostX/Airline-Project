const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Server is running",
    error: {},
    data: {},
  });
};

module.exports = { info };