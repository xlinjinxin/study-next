import { Module } from '@nestjs/common';
import { OssMoudleService } from './oss-moudle.service';
import { OssMoudleController } from './oss-moudle.controller';

@Module({
  controllers: [OssMoudleController],
  providers: [OssMoudleService],
})
export class OssMoudleModule {}
