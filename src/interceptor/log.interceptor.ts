import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import logger from 'src/utils/log';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map((value) => {
        logger.info({
          url: request.url,
          body: request.body,
          ...value,
        });
        value === null ? '' : value;
      }),
    );
  }
}
