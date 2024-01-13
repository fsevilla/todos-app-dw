import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private tokenService: TokenService, private router: Router) {}

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['login']);
  }
}
