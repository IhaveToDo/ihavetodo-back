import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @ApiProperty({ description: '아이디' })
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'todo 타이틀' })
  title: string;

  @ApiProperty({ description: '생성 시점' })
  createdOn?: Date;
}
