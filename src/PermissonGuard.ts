import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { Role } from 'lib/enties/role.entity';
import { RoleService } from './role/role.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(RoleService)
  private roleService: RoleService;

 async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const request: any = context.switchToHttp().getRequest();
    let permission= await this.roleService.findRoldsByIds(request.user.roles.map(item=>item.id))
    console.log(request.user,permission,123123123);
    if (!request.user) {
      return true;
    }
   

    return true;
  }
}
