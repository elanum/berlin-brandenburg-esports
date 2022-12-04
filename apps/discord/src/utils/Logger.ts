/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { env } from '../env';

export default class Logger {
  private logger: winston.Logger;

  private format = winston.format.combine(
    winston.format.label({ label: this.name }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:MM:SS' }),
    winston.format.printf(({ timestamp, message, label }) => `${timestamp} [${label}] ${message}`)
  );

  private consoleFormat = winston.format.combine(winston.format.colorize({ all: true }), this.format);

  private fileFormat = winston.format.combine(winston.format.uncolorize(), this.format);

  public constructor(private name: string) {
    this.logger = winston.createLogger({
      level: 'debug',
      format: this.consoleFormat,
      transports: this.transports,
    });
  }

  private get transports(): winston.transport[] {
    if (env.NODE_ENV !== 'production') {
      return [new winston.transports.Console()];
    }

    return [
      new winston.transports.Console(),
      new DailyRotateFile({
        level: 'info',
        filename: '%DATE%-discord.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        dirname: './logs/discord',
        format: this.fileFormat,
      }),
      new DailyRotateFile({
        level: 'error',
        filename: '%DATE%-discord.error.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        dirname: './logs/discord',
        format: this.fileFormat,
      }),
    ];
  }

  public log(message: string, ...data: any[]): void {
    this.logger.info(message + this.stringifyData(data));
  }

  public warn(message: string, ...data: any[]): void {
    this.logger.warn(message + this.stringifyData(data));
  }

  public debug(message: string, ...data: any[]): void {
    this.logger.debug(message + this.stringifyData(data));
  }

  public error(message: string, ...data: any[]): void {
    this.logger.error(message + this.stringifyData(data));
  }

  private stringifyData(...data: any[]): string {
    const [input] = data;
    const jsonString = JSON.stringify(input);
    const hasData = input.length ? input.every((i: any) => !isEmpty(i)) : false;

    return hasData ? ` ${jsonString}` : '';
  }
}
