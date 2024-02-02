import {
  format,
  transports
} from 'winston';

const errorTransport = new transports.DailyRotateFile({
  filename: `logs/%DATE%-error.log`,
  level: 'error',
  format: format.combine(format.timestamp(), format.json()),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: false,
  maxFiles: '30d',
  maxSize: '50m',
});

const combinedTransport = new transports.DailyRotateFile({
  filename: `logs/%DATE%-combined.log`,
  format: format.combine(format.timestamp(), format.json()),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: false,
  maxFiles: '30d',
  maxSize: '50m',
});

const consoleTransport = new transports.Console({
  level: 'debug',
  format: format.combine(
    format.cli(),
    format.splat(),
    format.timestamp(),
    format.printf((info) => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    }),
  ),
});

export { errorTransport, combinedTransport, consoleTransport };
