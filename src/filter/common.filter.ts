import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import logger from 'src/utils/log';

@Catch(Error)
export class commonFilter {
  catch(exception: any, host: ArgumentsHost) {
    logger.error(exception);
  }
}
