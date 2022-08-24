import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @ApiProperty({
        example: 'testUser1',
        description: '유저이름',
        required: true,
    })
    username: string;

    @ApiProperty({ description: '생성 시점' })
    createdOn?: Date;
}
