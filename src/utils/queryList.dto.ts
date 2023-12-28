import { ApiResponseProperty } from '@nestjs/swagger';
export class QueryListDto<T> {
  @ApiResponseProperty({ type: Array<T> })
  list: Array<T>;
  @ApiResponseProperty()
  total: number;
}
