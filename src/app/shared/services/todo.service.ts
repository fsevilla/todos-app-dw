import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url = 'https://simple-todos.onrender.com/api/tareas';
    return this.httpClient.get<Todo[]>(url);
  }

  setTodo(todo: Todo) {
    this.selectedTodo = {...todo};
  }

  getTodo(): Todo {
    return this.selectedTodo;
  }
}
