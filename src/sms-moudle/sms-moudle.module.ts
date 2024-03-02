import { Module } from '@nestjs/common';
import { SmsMoudleService } from './sms-moudle.service';
import { SmsMoudleController } from './sms-moudle.controller';

@Module({
  controllers: [SmsMoudleController],
  providers: [SmsMoudleService],
})
export class SmsMoudleModule {}
