import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.scss'
})
export class ViewTodoComponent {

  todoId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.todoId = params.id;
      this.getTodo();
    });
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

