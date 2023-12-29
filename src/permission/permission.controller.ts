import { Controller, Post, UseGuards } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginGuard } from 'src/login.guard';
import { Result } from 'src/utils/result.vo';

@Controller('permission')
@ApiTags('权限模块')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}
  @Post('/list')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '获取权限列表' })
  async list() {
    try {
      let data = await this.permissionService.repository.find();
      return new Result().success(data);
    } catch (error) {
      return new Result().err(500, '系统异常');
    }
  }
}
