import { WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';

import { errorTransport, combinedTransport, consoleTransport } from './transports'

export const LoggerFactory = () => {
  if (process.env.USE_JSON_LOGGER === 'true') {
    return WinstonModule.createLogger({
      transports: [errorTransport, combinedTransport, consoleTransport],
    });
  }
  
  return WinstonModule.createLogger({
    transports: [consoleTransport],
  });
};
