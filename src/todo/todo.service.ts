import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { TodoEntity } from '@todo/entity/todo.entity';
import { TodoDto } from './dto/todo.dto';
import { toTodoDto } from '@shared/mapper';
import { TodoCreateDto } from './dto/todo.create.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '@user/dto/user.dto';
import { UsersService } from '@user/users.service';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepo: Repository<TodoEntity>,
        private readonly usersService: UsersService,
    ) {}

    async getAllTodo(): Promise<TodoDto[]> {
        const todos = await this.todoRepo.find({
            relations: ['tasks', 'owner'],
        });
        return todos.map((todo) => toTodoDto(todo));
    }

    async getOneTodo(id: string): Promise<TodoDto> {
        const todo = await this.todoRepo.findOne({
            where: { id },
            relations: ['tasks', 'owner'],
        });

        if (!todo) {
            throw new HttpException(
                `Todo list doesn't exist`,
                HttpStatus.BAD_REQUEST,
            );
        }

        return toTodoDto(todo);
    }

    async getTodoByType(
        { username }: UserDto,
        type: string,
    ): Promise<TodoDto[]> {
        const owner = await this.usersService.findOne({ where: { username } });
        const todos = await this.todoRepo.find({
            where: { owner, type },
            relations: ['tasks', 'owner'],
        });
        return todos.map((todo) => toTodoDto(todo));
    }

    async createTodo(
        { username }: UserDto,
        createTodoDto: TodoCreateDto,
    ): Promise<TodoDto> {
        const { title, type } = createTodoDto;
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type,
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoEveryday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_EVERYDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoTuesday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_TUESDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoMonday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_MONDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoWednesday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_WEDNESDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoThursday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_THURSDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoFriday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_FRIDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoSaturday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_SATURDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async createTodoSunday(
        { username }: UserDto,
        title: string,
    ): Promise<TodoDto> {
        const owner = await this.usersService.findOne({ where: { username } });

        const todo: TodoEntity = await this.todoRepo.create({
            title,
            type: 'TYPE_SUNDAY',
            owner,
        });

        await this.todoRepo.save(todo);

        return toTodoDto(todo);
    }

    async updateTodo(id: string, todoDto: TodoDto): Promise<TodoDto> {
        const { title, type, isDone } = todoDto;

        let todo: TodoEntity = await this.todoRepo.findOne({ where: { id } });

        if (!todo) {
            throw new HttpException(
                `Todo list doesn't exist`,
                HttpStatus.BAD_REQUEST,
            );
        }

        todo = {
            id,
            title,
            type,
            isDone,
        };

        await this.todoRepo.update({ id }, todo); // update

        todo = await this.todoRepo.findOne({
            where: { id },
            relations: ['tasks', 'owner'],
        }); // re-query

        return toTodoDto(todo);
    }

    async destoryTodo(id: string): Promise<TodoDto> {
        const todo: TodoEntity = await this.todoRepo.findOne({
            where: { id },
            relations: ['tasks', 'owner'],
        });

        if (!todo) {
            throw new HttpException(
                `Todo list doesn't exist`,
                HttpStatus.BAD_REQUEST,
            );
        }

        await this.todoRepo.delete({ id }); // delete todo list

        return toTodoDto(todo);
    }
}
