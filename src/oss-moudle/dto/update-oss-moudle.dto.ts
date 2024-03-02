import { PartialType } from '@nestjs/swagger';
import { CreateOssMoudleDto } from './create-oss-moudle.dto';

export class UpdateOssMoudleDto extends PartialType(CreateOssMoudleDto) {}
