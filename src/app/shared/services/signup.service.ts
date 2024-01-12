import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SignupUser } from '../interfaces/signup-user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl + 'signup';
  }

  signup(user: SignupUser): Observable<void> {
    return this.httpClient.post<void>(this.url, user);
  }
}
