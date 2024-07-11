import pino from 'pino';
import pretty from 'pino-pretty';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
}, pretty({
  colorize: true,
}));
