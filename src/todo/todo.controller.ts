import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoModel} from "./models/Todo.model";
import {TodoCreate} from "./DTO/todo-create.dto";
import {TodoUpdate} from "./DTO/todo-update.dto";


@Controller('todo')
export class TodoController {
    private todos: TodoModel[] = [];

    @Get()
    getTodos(): TodoModel[] {
        return this.todos;
    }

    @Post()
    createTodo(@Body() body: TodoCreate): TodoModel[] {
        const todo = new TodoModel(body.name, body.description, body.status);
        this.todos.push(todo);
        return this.todos;
    }

    @Get('/:id')
    getTodoById(@Param() params) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            return todo;
        } else {
            return 'not found';
        }
    }

    @Delete('/:id')
    deleteTodoById(@Param() params) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1);
            return this.todos;
        } else {
            return 'not found';
        }
    }

    @Put('/:id')
    updateTodoById(@Param() params, @Body() updateTodo: TodoUpdate) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            if (updateTodo.name !== undefined)
                this.todos[todoId].name = updateTodo.name;
            if (updateTodo.description !== undefined)
                this.todos[todoId].description = updateTodo.description;
            if (updateTodo.status !== undefined)
                this.todos[todoId].status = updateTodo.status;
            return this.todos;
        } else {
            return 'not found';
        }
    }
}
