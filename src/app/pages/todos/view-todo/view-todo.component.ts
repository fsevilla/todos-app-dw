import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { TodoService } from '../../../shared/services/todo.service';
import { Todo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-view-todo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.scss'
})
export class ViewTodoComponent implements OnInit {

  todoId: string = '';
  todo: Todo = {
    title: '',
    description: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.todoId = params.id;
      this.getTodo();
    });
  }

  ngOnInit(): void {
    this.todo = this.todoService.getTodo();
  }

  getTodo() {
    console.log('Quiero traer los datos del todo: ' + this.todoId);
  }

  goBack() {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    });
  }

}
