import { Injectable } from '@nestjs/common';
import { CreateOssMoudleDto } from './dto/create-oss-moudle.dto';
import { UpdateOssMoudleDto } from './dto/update-oss-moudle.dto';

@Injectable()
export class OssMoudleService {
  create(createOssMoudleDto: CreateOssMoudleDto) {
    return 'This action adds a new ossMoudle';
  }

  findAll() {
    return `This action returns all ossMoudle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ossMoudle`;
  }

  update(id: number, updateOssMoudleDto: UpdateOssMoudleDto) {
    return `This action updates a #${id} ossMoudle`;
  }

  remove(id: number) {
    return `This action removes a #${id} ossMoudle`;
  }
}
