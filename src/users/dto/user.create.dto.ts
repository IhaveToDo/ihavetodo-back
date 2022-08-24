import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({
        example: 'testUser1',
        description: '유저이름',
        required: true,
    })
    username: string;

    @IsNotEmpty()
    @ApiProperty({
        example: 'password',
        description: '비밀번호',
        required: true,
    })
    password: string;
}
