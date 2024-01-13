import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Credentials } from '../../shared/interfaces/credentials';
import { LoginService } from '../../shared/services/login.service';
import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  credentials: Credentials = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: LoginService, 
    private tokenService: TokenService,
    private router: Router
  ) {}

  login() {
    this.loginService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Response: ', response);
        this.tokenService.saveToken(response.token);
        this.router.navigate(['']);
      },
      error:(e) => {
        console.log('Login error": ', e);
      }
    });
  }
}
