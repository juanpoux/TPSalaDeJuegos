import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserLogin } from 'src/app/models/userLogin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private router: Router = inject(Router);
  public hide: boolean = true;
  error: string | undefined;

  constructor(private toastr: ToastrService) {}

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
  });

  public user: IUserLogin = {
    userName: undefined,
    password: undefined,
  };

  ngOnInit(): void {
    this.user.password = 'admin';
    this.user.userName = 'admin';
  }

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
          (this.user.userName == 'admin' && this.user.password == 'admin')
        ) {
          this.error = undefined;
          sessionStorage.setItem('user', this.user.userName);
          this.toastr.success(
            `Bienvenido ${this.user.userName}!`,
            'Sesión iniciada correctamente!'
          );
          this.router.navigate(['home']);
        } else {
          this.error =
            'Usuario o contraseña incorrectos. Por favor, vuelva a intentarlo';
        }
      }
    }
  }
}
