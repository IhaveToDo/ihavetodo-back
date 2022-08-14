import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @ApiProperty({ description: '유저이름' })
  id: string;

  @IsNotEmpty()
  @ApiProperty({ description: '유저이름' })
  username: string;

  @ApiProperty({ description: '생성 시점' })
  createdOn?: Date;
}
