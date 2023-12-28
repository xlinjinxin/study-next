import { QueryDto } from 'src/utils/query.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryRoleDto extends QueryDto {
  @ApiProperty({
    required: false,
  })
  keyword: string;
}
