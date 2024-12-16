const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;
require("dotenv").config();
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: process.env.LOGGER_LEVEL,
  format: combine(colorize(), timestamp(), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/app.log" }),
  ],
});

module.exports = logger;
