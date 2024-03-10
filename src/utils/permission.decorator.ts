import { SetMetadata } from '@nestjs/common';

export const  RequirePermission = (permission: string|number) =>  SetMetadata('require-permission', permission)
