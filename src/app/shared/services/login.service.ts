import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Credentials } from '../interfaces/credentials';
import { TokenResponse } from '../interfaces/token-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credentials): Observable<TokenResponse> {
    const url = environment.apiUrl + 'login';
    return this.httpClient.post<TokenResponse>(url, credentials);
  }
}
