import { ApiProperty } from '@nestjs/swagger';
export class RefrehTokenDto {
  @ApiProperty({})
  refreshToken: string;
}
