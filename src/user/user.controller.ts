// user.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RefrehTokenDto } from './dto/refresh-token.dto';
import { User } from '../enties/user.entity';
import { Response } from 'express'
import { JwtService } from '@nestjs/jwt';
import { Result } from 'src/utils/result.vo';
import { ListDto } from './dto/list.dto'
import { LoginGuard } from 'src/login.guard';

// 设置swagger文档标签分类
@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Inject(JwtService)
  private jwtService: JwtService

  @Post('register')
  @ApiOperation({
    summary: '添加用户', // 接口描述信息
  })
  async register(@Body() createUserDto: CreateUserDto) {
    await this.userService.register(createUserDto);
    return new Result().success('success');
  }

  @Post('login')
  @ApiOperation({
    summary: '用户登录',
  })
  async login(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    try {

      let user = await this.userService.login(createUserDto)
      const accessToken = await this.jwtService.sign({
        userId: user.id,
        username: user.username,
      }, {
        expiresIn: '30m'
      })
      const refreshToken = await this.jwtService.sign({
        userId: user.id,
        username: user.username,
      }, {
        expiresIn: '2h'
      })

      return new Result().success({ ...user, refreshToken, accessToken });
    } catch (error) {
      console.log(JSON.stringify(error), error, 'this.userService');
      return new Result().err(error.message, 500)
    }

  }

  @Post('refrehToken')
  @ApiOperation({ summary: "刷新token" })
  async refrehToken(@Body() refrehTokenDto: RefrehTokenDto) {
    try {
      const data = this.jwtService.verify(refrehTokenDto.refreshToken);

      const user = await this.userService.userRepository.findOneBy({ id: data.userId });
      console.log(user)

      const accessToken = this.jwtService.sign({
        userId: user.id,
        username: user.username,
      }, {
        expiresIn: '30m'
      });

      const refrehToken = this.jwtService.sign({
        userId: user.id
      }, {
        expiresIn: '2h'
      });
      return new Result().success({ refrehToken, accessToken });


    } catch (e) {
      console.log(e)
      return new Result().err('系统异常', '500');
    }
  }

  @Post('list')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '用户列表' })
  async list(@Body() listDto: ListDto) {
    let data = await this.userService.userRepository.findAndCount(listDto)
    return new Result().success({
      list: data[0], total: data[1]
    });
  }



}
