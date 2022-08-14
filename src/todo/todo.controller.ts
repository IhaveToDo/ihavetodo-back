import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TodoListDto } from './dto/todo.list.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoCreateDto } from './dto/todo.create.dto';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '@user/dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/todo')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<TodoListDto> {
    const todos = await this.todoService.getAllTodo();
    return { todos };
  }

  @Get('findByType/:type')
  @UseGuards(AuthGuard())
  async findByTag(
    @Param('type') type: string,
    @Req() req: any,
  ): Promise<TodoListDto> {
    const user = req.user as UserDto;
    const todos = await this.todoService.getTodoByType(user, type);
    return { todos };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(
    @Body() createTodoDto: TodoCreateDto,
    @Req() req: any,
  ): Promise<TodoDto> {
    const user = req.user as UserDto;

    return await this.todoService.createTodo(user, createTodoDto);
  }

  @Post('everyday')
  @UseGuards(AuthGuard())
  async createTodoEveryday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoEveryday(user, title);
  }

  @Post('monday')
  @UseGuards(AuthGuard())
  async createTodoMonday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoMonday(user, title);
  }
  @Post('tuesday')
  @UseGuards(AuthGuard())
  async createTodoTuesday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoTuesday(user, title);
  }
  @Post('wednesday')
  @UseGuards(AuthGuard())
  async createTodoWednesday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoWednesday(user, title);
  }

  @Post('thursday')
  @UseGuards(AuthGuard())
  async createTodoThursday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoThursday(user, title);
  }

  @Post('saturday')
  @UseGuards(AuthGuard())
  async createTodoSaturday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoSaturday(user, title);
  }

  @Post('friday')
  @UseGuards(AuthGuard())
  async createTodoFriday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoFriday(user, title);
  }

  @Post('sunday')
  @UseGuards(AuthGuard())
  async createTodoSunday(
    @Body() body: { title: string },
    @Req() req: any,
  ): Promise<TodoDto> {
    const { title } = body;
    const user = req.user as UserDto;

    return await this.todoService.createTodoSunday(user, title);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async update(
    @Param('id') id: string,
    @Body() todoDto: TodoDto,
  ): Promise<TodoDto> {
    return await this.todoService.updateTodo(id, todoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async destory(@Param('id') id: string): Promise<TodoDto> {
    return await this.todoService.destoryTodo(id);
  }
}
