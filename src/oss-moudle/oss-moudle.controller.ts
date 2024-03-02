import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OssMoudleService } from './oss-moudle.service';
import { CreateOssMoudleDto } from './dto/create-oss-moudle.dto';
import { UpdateOssMoudleDto } from './dto/update-oss-moudle.dto';

@Controller('oss-moudle')
export class OssMoudleController {
  constructor(private readonly ossMoudleService: OssMoudleService) {}

  @Post()
  create(@Body() createOssMoudleDto: CreateOssMoudleDto) {
    return this.ossMoudleService.create(createOssMoudleDto);
  }

  @Get()
  findAll() {
    return this.ossMoudleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ossMoudleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOssMoudleDto: UpdateOssMoudleDto) {
    return this.ossMoudleService.update(+id, updateOssMoudleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ossMoudleService.remove(+id);
  }
}
