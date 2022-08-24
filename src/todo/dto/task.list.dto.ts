import { TaskDto } from './task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TaskListDto {
    @ApiProperty({ description: 'tasks' })
    tasks: TaskDto[];
}
