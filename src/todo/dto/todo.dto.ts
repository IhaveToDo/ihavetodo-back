import { TaskDto } from './task.dto';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from '@user/dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
    @IsNotEmpty()
    @ApiProperty({
        example: '할일 1',
        description: 'todo id',
        required: true,
    })
    id: string;

    @IsNotEmpty()
    @ApiProperty({
        example: '할일 1',
        description: '할일 이름',
        required: true,
    })
    title: string;

    @IsNotEmpty()
    @ApiProperty({
        example: 'TYPE_EVERYDAY',
        description: '할일 타입',
        required: true,
    })
    type: string;

    @ApiProperty({
        example: 'TYPE_EVERYDAY',
        description: '할일 생성 시점',
    })
    createdOn?: Date;

    @ApiProperty({ description: 'todo 생성 owner(UserDto)' })
    owner: UserDto;

    @ApiProperty({ description: 'todo tasks' })
    tasks?: TaskDto[];

    isDone: boolean;
}
