import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CommonService } from './common.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCommonDto } from './dto/update-common.dto';

@Controller('common')
@ApiTags('公共模块')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  payTheRentForTime() {
    console.log(12313123);
    return true;
  }
}
