import winston from 'winston';
import 'winston-daily-rotate-file';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
    winston.format.colorize(),
  ),
  transports: [
    // new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      level: 'info',
      dirname: 'log',
      filename: '%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '1k',
    }),
  ],
});

export default logger;
