import { ApiProperty } from "@nestjs/swagger";
import { CreateRoleDto } from "src/role/dto/create-role.dto";

export class userVo {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    accessToken:string;
    @ApiProperty()
    refreshToken:string

  }
  