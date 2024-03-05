import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Role } from 'lib/enties/role.entity';

declare module 'express' {
  interface Request {
    user: {
      username: string;
      roles: Role[]
    }
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;

  @Inject(Reflector)
  reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ignoreLogin = this.reflector.getAllAndOverride('ignore-login', [
      context.getClass(),
      context.getHandler(),
    ]);

    if (ignoreLogin) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    const authorization = request.header('authorization') || '';
    // console.log(request, 'context');
    const bearer = authorization.split(' ');

    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException('登录 token 错误');
    }

    const token = bearer[1];

    try {
      const info = this.jwtService.verify(token);
      request.user = info;
      console.log( request.user,info,'info')
      return true;
    } catch (e) {
      throw new UnauthorizedException('登录 token 失效，请重新登录');
    }
  }
}
