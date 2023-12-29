import { Injectable } from '@nestjs/common';
import { queryList } from 'src/utils/method';
import { Repository } from 'typeorm';
import { Permission } from './entities/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PermissionService extends Repository<Permission> {
  @InjectRepository(Permission)
  public repository: Repository<Permission>;
  public queryList = queryList;
}
