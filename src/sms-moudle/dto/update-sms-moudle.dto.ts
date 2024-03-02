import { PartialType } from '@nestjs/swagger';
import { CreateSmsMoudleDto } from './create-sms-moudle.dto';

export class UpdateSmsMoudleDto extends PartialType(CreateSmsMoudleDto) {}
