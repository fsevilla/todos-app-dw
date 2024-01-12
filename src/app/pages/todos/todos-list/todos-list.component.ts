import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoDataComponent } from '../todo-data/todo-data.component';
import { TodoService } from '../../../shared/services/todo.service';
import { Todo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoDataComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  selectedItem: Todo = {
    title: '',
    description: ''
  };

  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.isLoading = true;
    this.todoService.getTodos().subscribe({
      next: (response) => {
        this.todos = response;
        this.isLoading = false;
        this.isError = false;
      },
      error: () => {
        this.isLoading = false;
        this.isError = true;
      }
    });
  }

  doOnClick(todo: Todo) {
    console.log('Selected item: ', todo);
    this.selectedItem = todo;
    this.todoService.setTodo(this.selectedItem);
  }

  clearSelectedItem(todo: Todo) {
    console.log('Received todo: ', todo);
    this.selectedItem = {
      title: '',
      description: ''
    }
  }
}
