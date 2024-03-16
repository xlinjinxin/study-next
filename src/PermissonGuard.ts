import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { Role } from 'lib/enties/role.entity';
import { RoleService } from './role/role.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(RoleService)
  private roleService: RoleService;

  @Inject(Reflector)
  reflector:Reflector

 async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const requirePermission = this.reflector.getAllAndOverride('require-permission', [
      context.getClass(),
      context.getHandler(),
    ]);

    if (!requirePermission) {
      return true;
    }
    const request: any = context.switchToHttp().getRequest();
    let permission= await this.roleService.findRoldsByIds(request.user?.roles?.map(item=>item.id))
    let result=false
    console.log(permission,requirePermission,request.user?.roles?.map(item=>item.id),'requirePermission')
    permission?.forEach(item=>{
     
      if(item==requirePermission){
        result=true
      }
    })

    if(!result){
      throw new UnauthorizedException('暂无权限')
    }
    return true
  }
}
