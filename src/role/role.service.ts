import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Role} from './entities/role.entity'
import {queryList} from 'src/utils/method'

@Injectable()
export class RoleService extends Repository<Role> {
  @InjectRepository(Role)
  public repository: Repository<Role>;
  
  public createRole=  async (createRoleDto:CreateRoleDto)=>{
    let role=await this.repository.findOneBy({name:createRoleDto.name})
    if(role){
     throw new Error('角色已存在');
    }
    return  this.repository.save(createRoleDto)

  }
  public queryList=queryList
}
