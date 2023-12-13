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
  Inject,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../enties/user.entity';
import { Response } from 'express'
import { JwtService } from '@nestjs/jwt';
import { Result } from 'src/utils/result.vo';
import { LoginGuard } from 'src/login.guard';

// 设置swagger文档标签分类
@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Inject(JwtService)
  private jwtService :JwtService

  @Post('register')
  @ApiOperation({
    summary: '添加用户', // 接口描述信息
  })
 async register(@Body() createUserDto: CreateUserDto) {

    await  this.userService.register(createUserDto);
    return new Result().success('success');
  }
 
  @Post('login')
  @ApiOperation({
    summary: '用户登录',
  })
  async login(@Body() createUserDto: CreateUserDto,@Res({passthrough:true})res:Response) {
    try {

      let user=await this.userService.login(createUserDto)
      const token = await this.jwtService.signAsync({
        user: {
          id: user.id,
          username: user.username
        }
      })
      res.setHeader('token', token);
      return new Result().success(user);
    } catch (error) {
      console.log(JSON.stringify(error), error, 'this.userService');
      return new Result().err(error.message,500)
    }
    
  }

  @Post('list')
  @UseGuards(LoginGuard)
  @ApiOperation({summary:'用户列表'})
  list(){}
 
}
