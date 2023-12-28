import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '用户名',
  })
  username: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: '密码',
  })
  password: string;
}
