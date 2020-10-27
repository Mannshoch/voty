import { createLogger, transports, format, Logger } from "winston";
import { Mail } from "winston-mail";
import { format as uformat } from "util";

const env = process.env.NODE_ENV;
const prod = env === "production";

const mailConfig = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const logger = createLogger({
  levels: {
    mail: 0,
    alert: 1,
    error: 2,
    warn: 3,
    info: 4,
    debug: 5,
  },
  format: format.json(),
});

const consoleLogger = new transports.Console({
  level: prod ? "error" : "info",
  format: format.combine(
    format.padLevels(),
    format.colorize(),
    format.printf(({ level, message }) => {
      return `[${level}] ${message}`;
    })
  ),
});
const fileLogger = new transports.File({
  filename: "./logs/voty.log",
  level: "info",
  handleExceptions: true,
  maxsize: 1024 * 1024 * (prod ? 10 : 1),
  maxFiles: prod ? 3 : 1,
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "ddd/D/MMM-HH:mm:ss" }),
    format.align(),
    format.printf(
      (info) =>
        `${info.timestamp}   [${info.level}] ${info.message}${
          info.meta ? uformat("%s", info.meta) : ""
        }`
    )
  ),
});
const jsonLogger = new transports.File({
  filename: "./logs/json.log",
  level: "info",
  handleExceptions: true,
  maxsize: 1024 * 1024 * (prod ? 10 : 1),
  maxFiles: prod ? 3 : 1,
  format: format.combine(format.timestamp(), format.logstash()),
});

const mailLogger: any = new Mail({
  level: "mail",
  to: "stefan@teachen.ch",
  from: "voty@teachen.ch",
  subject: "voty.ch Admin Mail",
  host: mailConfig.host,
  username: mailConfig.auth.user,
  password: mailConfig.auth.pass,
  ssl: true,
});

logger.add(fileLogger);

if (env === "production") {
  logger.add(mailLogger);
  logger.add(jsonLogger);
  logger.exceptions.handle(mailLogger);
} else {
  logger.add(consoleLogger);
  logger.add(jsonLogger);
}

// the rest probably is not necessary, just didn't dig how to pass other objects to default Logger

const logLevel = (level: string) => {
  return (
    message: string,
    rest?: Record<string, any> | string | null
  ): Logger => logger.log(level, message, { meta: rest });
};
const votyLogger = {
  mail: logLevel("mail"),
  info: logLevel("info"),
  error: logLevel("error"),
  warn: logLevel("warn"),
  debug: logLevel("debug"),
};
export default votyLogger;
