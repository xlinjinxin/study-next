import { QueryDto } from 'src/utils/query.dto';
import { ApiProperty } from '@nestjs/swagger';
export class QueryUserDto extends QueryDto {
  @ApiProperty({
    required: false,
    description: '关键字',
  })
  keyword: string;
}
