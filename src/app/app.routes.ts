import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ViewTodoComponent } from './pages/todos/view-todo/view-todo.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { TodosListComponent } from './pages/todos/todos-list/todos-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'todos', component: TodosComponent, canActivate: [authGuard], children: [
        { path: '', component: TodosListComponent },
        { path: 'new', component: NewTodoComponent },
        { path: ':id', component: ViewTodoComponent }
    ] },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent }
];

