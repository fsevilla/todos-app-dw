import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/interfaces/todo';
import { TodoDataComponent } from './todo-data/todo-data.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoDataComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  selectedItem: Todo = {
    title: '',
    description: ''
  };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.todoService.getTodos();
  }

  doOnClick(todo: Todo) {
    console.log('Selected item: ', todo);
    this.selectedItem = todo;
  }

  clearSelectedItem(todo: Todo) {
    console.log('Received todo: ', todo);
    this.selectedItem = {
      title: '',
      description: ''
    }
  }

}
