import { Component } from '@angular/core';
import { IUserLogin } from 'src/app/models/userLogin.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba-login-firebase',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public hide: boolean = true;
  error: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  public user: IUserLogin = {
    userName: '',
    password: '',
  };

  ingresar() {
    console.log(this.user);
    const { userName, password } = this.user;
    this.authService.login(userName!, password!).then((res) => {
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(userName));
        this.router.navigate(['']);
      }
      console.log(res);
    });
  }
}
