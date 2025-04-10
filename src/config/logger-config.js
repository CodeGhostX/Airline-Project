const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, colorize } = format;

const logger = createLogger({
  level: 'silly',
  format: combine(
    timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    prettyPrint(),
    colorize({all: true})
  ),
  transports: [
    new transports.Console(),
  ],
});

module.exports = {
  logger
}