import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class QueryUserDto {
  @IsNotEmpty()
  @IsNumber()
  offset: number;
  @IsNotEmpty()
  @IsNumber()
  limit: number;

  keyword: string;
}
