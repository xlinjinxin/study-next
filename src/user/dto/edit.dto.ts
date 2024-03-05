import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class EditDto {


  @ApiProperty({
  })
  id: number;
  @ApiProperty({
})
  roles?:any[]
}
