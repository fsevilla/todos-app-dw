import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Todo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-data',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todo-data.component.html',
  styleUrl: './todo-data.component.scss'
})
export class TodoDataComponent implements OnChanges {

  @Input() todo: Todo = {
    title: '',
    description: ''
  }

  @Output() onClear: EventEmitter<Todo> = new EventEmitter();

  ngOnChanges(): void {
    console.log('Selected in parent: ', this.todo);
  }

  clearItem() {
    this.onClear.emit(this.todo);
  }
}
