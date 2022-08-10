import { TaskDto } from '@todo/dto/task.dto';
import { TodoEntity } from '@todo/entity/todo.entity';
import { TodoDto } from '@todo/dto/todo.dto';
import { TaskEntity } from '@todo/entity/task.entity';
import { UserEntity } from '@user/entity/user.entity';
import { UserDto } from '@user/dto/user.dto';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, title, tasks, owner, type } = data;

  let todoDto: TodoDto = {
    id,
    title,
    owner: owner ? toUserDto(owner) : null,
    type,
  };

  if (tasks) {
    todoDto = {
      ...todoDto,
      tasks: tasks.map((task: TaskEntity) => toTaskDto(task)),
    };
  }

  return todoDto;
};

export const toTaskDto = (data: TaskEntity): TaskDto => {
  const { id, title } = data;

  const taskDto: TaskDto = {
    id,
    title,
  };

  return taskDto;
};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username } = data;

  const userDto: UserDto = {
    id,
    username,
  };

  return userDto;
};
