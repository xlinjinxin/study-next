import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation } from '@nestjs/swagger';
import { LoginGuard } from 'src/login.guard';
import { Result } from 'src/utils/result.vo';
import { ListDto } from './dto/list.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('/createOrUpdate')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '创建或更新角色' })
  async createOrUpdate(@Body() createRoleDto: CreateRoleDto) {
      //创建操作
      try {
        await this.roleService.createRole(createRoleDto)
        return new Result().success('创建成功');
      } catch (error) {
        return new Result().err(error.message, 500)
      }
    }
  


  @Post('/list')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '角色列表' })
  async roleList(@Body() listDto: ListDto) {
    let data = await this.roleService.repository.findAndCount(listDto)
    return new Result().success({
      list: data[0], total: data[1]
    });
  }

  // @Post('/delete')
  // @UseGuards(LoginGuard)
  // @ApiOperation({ summary: '删除角色' })
  // async delete(@Body() listDto: ListDto) {
  //  try {
  //  await this.roleService.repository
  //  } catch (error) {
    
  //  }
  // }

}
