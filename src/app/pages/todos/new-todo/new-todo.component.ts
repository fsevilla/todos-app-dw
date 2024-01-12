import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { Todo } from '../../../shared/interfaces/todo';
import { TodoService } from '../../../shared/services/todo.service';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss'
})
export class NewTodoComponent {

  form: FormGroup;

  todo: Todo = {
    title: '',
    description: ''
  }

  constructor(
    formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      status: 'done'
    });
  }

  createTodo() {
    if(this.form.valid) {
      this.todo = this.form.getRawValue();
      this.todoService.createTodo(this.todo).subscribe({
        next: () => {
          alert(`Todo "${this.todo.title}" added`);
          this.router.navigate(['..'], {
            relativeTo: this.activatedRoute
          });
        },
        error: () => {}
      });
    } else {
      console.log('Faltan datos!', this.form);
    }
  }

  cancel(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
  }
}
