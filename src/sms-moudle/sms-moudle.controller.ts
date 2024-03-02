import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsMoudleService } from './sms-moudle.service';
import { CreateSmsMoudleDto } from './dto/create-sms-moudle.dto';
import { UpdateSmsMoudleDto } from './dto/update-sms-moudle.dto';

@Controller('sms-moudle')
export class SmsMoudleController {
  constructor(private readonly smsMoudleService: SmsMoudleService) {}

  @Post()
  create(@Body() createSmsMoudleDto: CreateSmsMoudleDto) {
    return this.smsMoudleService.create(createSmsMoudleDto);
  }

  @Get()
  findAll() {
    return this.smsMoudleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsMoudleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmsMoudleDto: UpdateSmsMoudleDto) {
    return this.smsMoudleService.update(+id, updateSmsMoudleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsMoudleService.remove(+id);
  }
}
