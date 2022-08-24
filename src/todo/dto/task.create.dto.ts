import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'todo 타이틀' })
    title: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'type' })
    type: string;
}
