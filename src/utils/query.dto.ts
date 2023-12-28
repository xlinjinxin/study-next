import { IsNotEmpty, isNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class QueryDto {
  @IsNotEmpty()
  @ApiProperty({
    description: '页数，从1开始',
    default: 1,
  })
  current: number;
  @IsNotEmpty()
  @ApiProperty({
    description: '个数',
    default: 10,
  })
  pageSize: number;
}
