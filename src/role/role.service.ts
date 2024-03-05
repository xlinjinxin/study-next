import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { queryList } from 'src/utils/method';
type pageProp = { current: number; pageSize: number };
@Injectable()
export class RoleService extends Repository<Role> {
  @InjectRepository(Role)
  public repository: Repository<Role>;

  public createRole = async (createRoleDto: CreateRoleDto) => {
    let role = await this.repository.findOneBy({ name: createRoleDto.name });
    // if(role){
    //  throw new Error('角色已存在');
    // }

    if (role) {
      role.permissions = createRoleDto.permissions?.map((item) => {
        return { id: item };
      });
      return this.repository.save(role);
    } else {
      createRoleDto.permissions =
        createRoleDto.permissions?.map((item) => {
          return { id: item };
        }) || [];
      return this.repository.save(createRoleDto);
    }
  };
  public queryList<T, U>(
    query: U & pageProp,
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
      .leftJoinAndSelect('item.permissions', 'permission')
      .where(string, stringMap)
      .skip((current - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();
  }
  public async findRoldsByIds(roleIds: number[]) {
    return  this.repository.createQueryBuilder('item').leftJoinAndSelect('item.permissions', 'permission').whereInIds(roleIds).getMany()
  }
}
