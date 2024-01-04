import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';
import { LoginGuard } from 'src/login.guard';
import { Result } from 'src/utils/result.vo';
import { QueryRoleDto } from './dto/query-role.dto';
import { Role } from 'lib/enties/role.entity';
import { DeleteDto } from './dto/delete.dto';

@ApiTags('权限模块')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('/createOrUpdate')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '创建或更新角色' })
  async createOrUpdate(@Body() createRoleDto: CreateRoleDto) {
    //创建操作
    try {
      await this.roleService.createRole(createRoleDto);
      return new Result().success('创建成功');
    } catch (error) {
      return new Result().err(error.message, 500);
    }
  }

  @Post('/list')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '角色列表' })
  async roleList(@Body() queryRoleDto: QueryRoleDto) {
    try {
      let data = await this.roleService.queryList<Role, QueryRoleDto>(
        queryRoleDto,
        {
          name: 'keyword',
        },
      );
      return new Result().success({
        list: data[0],
        total: data[1],
      });
    } catch (error) {
      console.log(error,'errr')
      return new Result().err('系统异常,请联系客服', 500);
    }
  }

  @Post('/delete')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '删除角色' })
  async delete(@Body() deleteDto: DeleteDto) {
    try {
      await this.roleService.repository.delete(deleteDto.id);
      return new Result().success('删除成功');
    } catch (error) {
      return new Result().err('删除失败', 500);
    }
  }
}
