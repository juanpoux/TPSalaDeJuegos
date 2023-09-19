import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILoginUser } from '../interfaces/login-user.interface';

@Component({
  selector: 'app-prueba-login-firebase',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;
  error: string | undefined;
  showLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public user: ILoginUser = {
    userName: '',
    password: '',
  };

  signIn() {
    this.showLoading = true;
    console.log(this.user);
    const { userName, password } = this.user;
    this.authService.login(userName!, password!).then((res) => {
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(userName));
        this.toastr.success('Sesión iniciada correctamente!');
        this.router.navigate(['']);
      }
      console.log(res);
      this.showLoading = false;
    });
  }

  completeFields() {
    this.user.userName = 'juanpoux@gmail.com';
    this.user.password = '123456';
  }
}
