import { TaskDto } from './task.dto';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from '@user/dto/user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'todo id' })
  id: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'todo 타이틀' })
  title: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'todo type' })
  type: string;

  @ApiProperty({ description: 'todo 생성 시점' })
  createdOn?: Date;

  @ApiProperty({ description: 'todo 생성 owner(UserDto)' })
  owner: UserDto;

  @ApiProperty({ description: 'todo tasks' })
  tasks?: TaskDto[];
}
