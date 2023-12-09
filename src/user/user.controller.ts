// user.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../enties/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from 'src/utils/result.vo';

// 设置swagger文档标签分类
@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userService: UserService,
  ) {}

  @Post('register')
  @ApiOperation({
    summary: '添加用户', // 接口描述信息
  })
  create(@Body() createUserDto: CreateUserDto) {
    console.log(this.userService, 'this.userService');
    let user = this.userService.create(createUserDto);
    this.userService.save(user);
    return new Result().success('success');
  }

  @Post('login')
  @ApiOperation({
    summary: '用户登录',
  })
  login(@Body() createUserDto: CreateUserDto) {}

  @Get('list')
  @ApiOperation({
    summary: '获取user列表',
  })
  findAll() {
    return this.userService.find({ skip: 0 });
  }

  @Get('list')
  @ApiOperation({
    summary: '根据id获取user',
  })
  async findOne(@Query('id') id: number) {
    const data = await this.userService.findOne({ where: { id } });
    return await this.userService.findOne({ where: { id } });
  }

  @Patch('list')
  @ApiOperation({
    summary: '根据id修改user',
  })
  update(@Query('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('list')
  @ApiOperation({
    summary: '根据id删除user',
  })
  async remove(@Query('id') id: number) {
    const timbers = await this.userService.find({
      where: { id },
    });
    return this.userService.remove(timbers);
  }
}
