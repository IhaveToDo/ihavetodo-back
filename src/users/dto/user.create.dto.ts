import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({ description: '유저이름' })
    username: string;

    @IsNotEmpty()
    @ApiProperty({ description: '비밀번호' })
    password: string;
}
