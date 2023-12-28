import { Permission } from 'src/permission/entities/permission.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    required: false,
    description: '编辑时传',
  })
  id?: number;
  @ApiProperty({
    required: true,
    description: '角色名',
  })
  name: string;
  @ApiProperty({
    required: false,
    description: '权限列表',
  })
  permissions: Permission[];
}
