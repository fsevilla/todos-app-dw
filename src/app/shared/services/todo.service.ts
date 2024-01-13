import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Todo } from '../interfaces/todo';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private selectedTodo: Todo = {
    title: '',
    description: ''
  }

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  private getHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.tokenService.getToken()
    });

    return headers;
  }

  getTodos(): Observable<Todo[]> {
    const url = environment.apiUrl + 'todos';
    const headers = this.getHeaders();
    return this.httpClient.get<Todo[]>(url, { headers });
  }

  setTodo(todo: Todo) {
    this.selectedTodo = {...todo};
  }

  getTodo(): Todo {
    return this.selectedTodo;
  }

  createTodo(todo: Todo): Observable<Todo> {
    const url = environment.apiUrl + 'todos';
    const headers = this.getHeaders();
    return this.httpClient.post<Todo>(url, todo, { headers });
  }
}
