import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user/enties/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';

type queryProp<T, U> = T & U & pageProp;
type pageProp = { offset: number; limit: number };
function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
@Injectable()
export class UserService extends Repository<User> {
  @InjectRepository(User)
  public userRepository: Repository<User>;
  public register = async (createUserDto: CreateUserDto) => {
    let user = await this.userRepository.findOneBy({
      username: createUserDto.username,
    });
    if (user) {
      throw new Error('用户已存在');
    }
    const newUser = new User();
    newUser.password = md5(createUserDto.password);
    newUser.username = createUserDto.username;

    try {
      await this.userRepository.save(newUser);
      return 'success';
    } catch (error) {
      return 'fail';
    }
  };

  async login(userLoginDto: UserLoginDto) {
    let user = await this.userRepository.findOneBy({
      username: userLoginDto.username,
    });
    if (!user) {
      throw new Error('用户不存在');
    }
    if (user.password == md5(userLoginDto.password)) {
      return user;
    } else {
      throw new Error('密码错误');
    }
  }

  async queryList<T, U>(
    query: queryProp<T, U>,
    queryMap?: {
      // [P in keyof queryProp<T>]?: P extends keyof T ? P : keyof T;
      [P in keyof T]?: Exclude<keyof U, keyof pageProp>;
    },
  ) {
    for (const key in queryMap) {
      if (Object.prototype.hasOwnProperty.call(queryMap, key)) {
        const element = queryMap[key];
      }
    }

    this.userRepository
      .createQueryBuilder('user')
      .where('user.name=:name', { name: 1 })
      .offset(query.offset)
      .limit(query.limit)
      .getManyAndCount();
  }
}
