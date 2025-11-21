import {Component, inject} from '@angular/core';
import {Authentication} from '../../../services/authentication';
import {LoginRequest} from '../../../entities/api/login-request';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly authenticationService: Authentication = inject(Authentication);

  protected login(): void {
    let loginRequest: LoginRequest = new LoginRequest("test", "test");
    this.authenticationService.login(loginRequest);
  }
}
