import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';


import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn = false;

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.sessionStatus.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['login']);
  }
}
