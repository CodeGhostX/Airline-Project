const { createLogger, format, transports, error } = require('winston');
const { combine, timestamp, prettyPrint, colorize } = format;

const logger = createLogger({
  level: 'silly',
  format: combine(
    timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log', level: "error" }),
  ],
});

module.exports = {
  logger
}