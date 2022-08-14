import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @ApiProperty({ description: '유저이름' })
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty({ description: '비밀번호' })
  readonly password: string;
}
