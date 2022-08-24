import { ApiProperty } from '@nestjs/swagger';

export class TodoCreateDto {
    @ApiProperty({ description: 'todo 타이틀' })
    title: string;
    @ApiProperty({ description: 'todo type' })
    type: string;
    // TYPE_EVERYDAY // TYPE_TUESDAY // 2022.
}
