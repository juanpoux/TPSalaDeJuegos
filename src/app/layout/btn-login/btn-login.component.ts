import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.scss'],
})
export class BtnLoginComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public btnText: string = 'Iniciar sesión';
  public btnColor: string = 'primary';
  private router: Router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('user') != null;
    if (this.isLoggedIn) {
      this.btnText = 'Cerrar sesión';
      this.btnColor = 'warn';
    }
  }

  loginlogout() {
    if (this.isLoggedIn) {
      // cierra sesión y vuelve a home
      sessionStorage.removeItem('user');
      // this.router.navigate(['home']);
      this.router.navigate(['authentication/logout']);
    } else {
      // redirecciona a la pantalla de login
      this.router.navigate(['authentication/login']);
    }
  }
}
