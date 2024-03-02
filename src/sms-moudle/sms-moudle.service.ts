import { Injectable } from '@nestjs/common';
import { CreateSmsMoudleDto } from './dto/create-sms-moudle.dto';
import { UpdateSmsMoudleDto } from './dto/update-sms-moudle.dto';

@Injectable()
export class SmsMoudleService {
  create(createSmsMoudleDto: CreateSmsMoudleDto) {
    return 'This action adds a new smsMoudle';
  }

  findAll() {
    return `This action returns all smsMoudle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smsMoudle`;
  }

  update(id: number, updateSmsMoudleDto: UpdateSmsMoudleDto) {
    return `This action updates a #${id} smsMoudle`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsMoudle`;
  }
}
