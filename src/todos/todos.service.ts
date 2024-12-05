import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entities';

@Injectable()
export class TodosService {
    private todos: Todo[] = [];

    //create todo
    create(todo: Todo): Todo {
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
        return todo;
    }

    //get all todo
    findAll(): Todo[] {
        return this.todos;
    }

    //get todo by id
    findOne(id: number): Todo {
        return this.todos.find(todo => todo.id === id)
    }

    //update todo
    update(id: number, updatedTodo: Partial<Todo>): Todo {
        const todo = this.findOne(id)
        if (!todo) {
             throw new Error('Todo Not Found');
        }
        Object.assign(todo, updatedTodo);
        return todo
    }

    //delete todo
    remove(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}
