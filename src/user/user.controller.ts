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
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RefrehTokenDto } from './dto/refresh-token.dto';
import { User } from '../user/enties/user.entity';
import { Response, query } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Result, SuccessResultVo } from 'src/utils/result.vo';
import { ListDto } from './dto/list.dto';
import { LoginGuard } from 'src/login.guard';
import { QueryUserDto } from './dto/query-user.dto';
import { QueryListDto } from 'src/utils/queryList.dto';
// import { APIResponse } from 'src/utils/APIResponse.decorator';
import { IgnoreLogin } from '../utils/IgnoreLogin-decorator';
import { userVo } from './vo/login-user.vo';
import { EditDto } from './dto/edit.dto';

// 设置swagger文档标签分类
@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('register')
  @IgnoreLogin()
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
  @IgnoreLogin()
  async login(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      let user = await this.userService.login(createUserDto);
      console.log(user,'123123123user')
      const accessToken = await this.jwtService.sign(
        {
          roles: user.roles,
          username: user.username,
        },
        {
          expiresIn: '30m',
        },
      );
      const refreshToken = await this.jwtService.sign(
        {
          roles: user.roles,
          username: user.username,
        },
        {
          expiresIn: '2h',
        },
      );

      return new Result().success({ ...user, refreshToken, accessToken });
    } catch (error) {
      console.log(JSON.stringify(error), error, 'this.userService');
      return new Result().err(error.message, 500);
    }
  }

  @Post('refrehToken')
  @ApiOperation({ summary: '刷新token' })
  async refrehToken(@Body() refrehTokenDto: RefrehTokenDto) {
    try {
      const data = this.jwtService.verify(refrehTokenDto.refreshToken);

      const user = await this.userService.repository.findOneBy({
        id: data.userId,
      });
      console.log(user);

      const accessToken = this.jwtService.sign(
        {
          roles: user.roles,
          username: user.username,
        },
        {
          expiresIn: '30m',
        },
      );

      const refrehToken = this.jwtService.sign(
        {
          userId: user.id,
        },
        {
          expiresIn: '2h',
        },
      );
      return new Result().success({ refrehToken, accessToken });
    } catch (e) {
      console.log(e);
      return new Result().err('系统异常', '500');
    }
  }

  @Post('list')
  @UseGuards(LoginGuard)
  @ApiOperation({ summary: '用户列表' })
  @ApiResponse({ type: userVo })
  async list(@Body() query: QueryUserDto) {
    console.log(this.userService.repository);
    // let data = await this.userService.repository.findAndCount(listDto);
    let data = await this.userService.queryList<User, QueryUserDto>(query, {
      username: 'keyword',
    });

    return new Result().success({
      list: data[0],
      total: data[1],
    });
  }

  @Post('/edit')
  @ApiOperation({ summary: '创建或更新角色' })
  async createOrUpdate(@Body() createRoleDto: EditDto) {
    //创建操作
    try {
      await this.userService.edit(createRoleDto);
      return new Result().success('创建成功');
    } catch (error) {
      return new Result().err(error.message, 500);
    }
  }
}
