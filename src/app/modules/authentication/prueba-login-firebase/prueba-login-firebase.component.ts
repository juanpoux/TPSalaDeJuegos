import { Component } from '@angular/core';
import { IUserLogin } from 'src/app/models/userLogin.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-prueba-login-firebase',
  templateUrl: './prueba-login-firebase.component.html',
  styleUrls: ['./prueba-login-firebase.component.scss'],
})
export class PruebaLoginFirebaseComponent {
  public hide: boolean = true;
  error: string | undefined;

  constructor(private authService: AuthService) {}

  public user: IUserLogin = {
    userName: '',
    password: '',
  };

  ingresar() {
    console.log(this.user);
    const { userName, password } = this.user;
    this.authService.login(userName!, password!).then((res) => {
      console.log(res);
    });
  }

  ingresarGoogle() {
    console.log(this.user);
    this.authService.loginGoogle().then((res) => {
      console.log(res);
    });
  }
}
