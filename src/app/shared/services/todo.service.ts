import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    {
      _id: '1',
      title: 'Tarea 1',
      description: 'descripcion de la tarea 1',
      status: 'new'
    },
    {
      _id: '2',
      title: 'Tarea 2',
      description: 'descripcion de la tarea 2',
      status: 'in progress'
    },
    {
      _id: '3',
      title: 'Tarea 3',
      description: 'descripcion de la tarea 3',
      status: 'done'
    }
  ];

  private selectedTodo: Todo = {
    title: '',
    description: ''
  }

  constructor() { }

  getTodos(): Todo[] {
    return [...this.todos];
  }

  setTodo(todo: Todo) {
    this.selectedTodo = {...todo};
  }

  getTodo(): Todo {
    return this.selectedTodo;
  }
}
