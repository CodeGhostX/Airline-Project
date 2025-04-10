const express = require("express");
const app = express();
const { serverConfig } = require("./config");
const apiRoutes = require("./routes");
const { winstonLogger } = require("./config");
const { logger } = winstonLogger;

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on port ${serverConfig.PORT}`);
});
