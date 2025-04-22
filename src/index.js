const express = require("express");
const app = express();
const { serverConfig } = require("./config");
const { winstonLogger } = require("./config");
const apiRoutes = require("./routes");
const { logger } = winstonLogger;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on port ${serverConfig.PORT}`);
});
