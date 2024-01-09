import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import logger from 'src/utils/log';

@Catch(HttpException)
export class commonFilter {
  catch(exception: any, host: ArgumentsHost) {
    logger.error({ ...exception });
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(status).json(exception);
  }
}
