import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entities';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    create(@Body() todo:Todo): Todo {
        return this.todosService.create(todo);
    }

    @Get()
    findAll():Todo[] {
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string):Todo {
        return this.todosService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updatedTodo: Partial<Todo>): Todo {
        return this.todosService.update(+id, updatedTodo)
    }

    @Delete(':id')
    remove(@Param('id')id:string): void {
        this.todosService.remove(+id)
    }
}
