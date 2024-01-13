import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  sessionStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private tokenKey = 'token';

  constructor() {
    this.sessionStatus.next(this.tokenExists());
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.sessionStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  tokenExists(): boolean {
    return this.getToken() ? true : false;
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
    this.sessionStatus.next(false);
  }
}