import { Component } from '@angular/core';
import { AccountService } from 'src/app/modules/auth/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ILoginUser } from '../interfaces/login-user.interface';
import { FirestoreService } from '../services/firestore.service';

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
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private fireStoreService: FirestoreService
  ) {}

  public user: ILoginUser = {
    userName: '',
    password: '',
  };

  signIn() {
    this.showLoading = true;
    console.log(this.user);
    const { userName, password } = this.user;
    this.accountService.login(userName!, password!).then((res) => {
      if (res) {
        sessionStorage.setItem('user', JSON.stringify(userName));
        this.toastr.success('Sesión iniciada correctamente!');
        this.fireStoreService.addLogUser(userName);
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
