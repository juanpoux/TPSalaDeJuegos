import { Component } from '@angular/core';
import { AccountService } from 'src/app/modules/auth/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILoginUser } from '../interfaces/login-user.interface';
import { IRegisterUser } from '../interfaces/register-user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide: boolean = true;
  error: string | undefined;
  showLoading: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public user: IRegisterUser = {
    userName: '',
    password: '',
    confirmPassword: '',
  };

  signUp() {
    this.showLoading = true;
    console.log(this.user);
    const { userName, password, confirmPassword } = this.user;
    if (password !== confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      this.showLoading = false;
    } else {
      this.accountService.register(userName!, password!).then((res) => {
        if (res) {
          sessionStorage.setItem('user', JSON.stringify(userName));
          this.toastr.success('Cuenta creada con éxito!');
          this.router.navigate(['']);
        }
        console.log(res);
        this.showLoading = false;
      });
    }
  }

  completeFields() {
    this.user.userName = 'juanpoux@gmail.com';
    this.user.password = '123456';
  }
}
