import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../enties/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import * as crypto from 'crypto';

function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
@Injectable()
export class UserService extends Repository<User> {
  async register(createUserDto: CreateUserDto) {
    let user = await this.findOneBy({ username: createUserDto.username });
    if (user) {
      throw Error('用户已存在');
    }
    const newUser = new User();
    newUser.password = md5(createUserDto.password);
    newUser.username = createUserDto.username;
    try {
      await this.save(newUser);
      return 'success';
    } catch (error) {
      return 'fail';
    }
  }

  async login(userLoginDto: UserLoginDto) {
    let user = await this.findOneBy({ username: userLoginDto.username });
    if (!user) {
      throw Error('用户不存在');
    }
    if (user.password == md5(userLoginDto.password)) {
      return 'success';
    } else {
      return fail;
    }
  }
}
