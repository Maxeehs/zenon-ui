import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../entities/api/login-request';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private readonly http: HttpClient = inject(HttpClient);

  login(loginRequest: LoginRequest): void {
    this.http.post('http://localhost:8080/api/auth/login', loginRequest, {withCredentials: true}).subscribe();
  }
}
