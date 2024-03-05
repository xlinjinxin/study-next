import { HttpException, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { User } from '../user/enties/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { queryList } from 'src/utils/method';
import { EditDto } from './dto/edit.dto';
type pageProp = { current: number; pageSize: number };
function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
@Injectable()
export class UserService extends Repository<User> {
  @InjectRepository(User)
  public repository: Repository<User>;
  public register = async (createUserDto: CreateUserDto) => {
    let user = await this.repository.findOneBy({
      username: createUserDto.username,
    });
    if (user) {
      throw new Error('用户已存在');
    }
    const newUser = new User();
    newUser.password = md5(createUserDto.password);
    newUser.username = createUserDto.username;

    try {
      await this.repository.save(newUser);
      return 'success';
    } catch (error) {
      return 'fail';
    }
  };

  async login(userLoginDto: UserLoginDto) {
    let user = await this.repository.createQueryBuilder('item')
    .leftJoinAndSelect('item.roles', 'role')
    .where({ username: userLoginDto.username}).getOne()
    if (!user) {
      throw new Error('用户不存在');
    }
    if (user.password == md5(userLoginDto.password)) {
      return user;
    } else {
      throw new Error('密码错误');
    }
  }
  public edit = async (editDto: EditDto) => {
    let user = await this.repository.findOneBy({id:editDto.id});

    try {
      user.roles = editDto.roles?.map(item => { return { id: item } })
      await this.repository.save(user);
      return 'success';
    } catch (error) {
      return 'fail';
    }
  };


  public queryList<T, U>(
    query: U  & pageProp,
    queryMap?: {
      // [P in keyof queryProp<T>]?: P extends keyof T ? P : keyof T;
      [P in keyof T]?: Exclude<keyof U, keyof pageProp>;
    },
  ) {
    let string = '';
    let stringMap: any = {};
    for (const key in queryMap) {
      if (Object.prototype.hasOwnProperty.call(queryMap, key)) {
        const element = queryMap[key];
        let curString = `item.${key} like :${key}`;
        string += curString;
        stringMap[key] = `%${query[element]}%`;
      }
    }
    const { current, pageSize } = query;
    return this.repository
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.roles', 'role')
      .where(string, stringMap)
      .skip((current - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
  }
}
