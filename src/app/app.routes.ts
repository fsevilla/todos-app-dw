import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ViewTodoComponent } from './pages/todos/view-todo/view-todo.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'todos', component: TodosComponent,  children: [
        { path: '', component: TodosListComponent },
        { path: 'new', component: NewTodoComponent },
        { path: ':id', component: ViewTodoComponent }
    ] },
    { path: '**', component: NotFoundComponent }
];

