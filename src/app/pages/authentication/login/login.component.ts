import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/models/userLogin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private router: Router = inject(Router);
  public hide: boolean = true;
  error: string | undefined;

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  private user: IUserLogin = {
    userName: undefined,
    password: undefined,
  };

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.user.userName = this.addressForm.value.userName ?? undefined;
      this.user.password = this.addressForm.value.password ?? undefined;

      if (this.user.userName != undefined && this.user.password != undefined) {
        const listUsers = JSON.parse(sessionStorage.getItem('users') || '[]');
        if (
          listUsers.some(
            (usr: IUserLogin) =>
              usr.userName == this.user.userName &&
              usr.password == this.user.password
          ) ||
          (this.user.userName == 'a' && this.user.password == 'a')
        ) {
          this.error = undefined;
          sessionStorage.setItem('user', this.user.userName);
          this.router.navigate(['home']);
          // acá
          
        } else {
          this.error =
            'Usuario o contraseña incorrectos. Si no tiene cuenta debe registrarse';
        }
      }
    }
  }
}
