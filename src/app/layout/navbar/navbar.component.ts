import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private router: Router = inject(Router);
  public isLoggedIn: boolean = false;
  public btnText: string = 'Iniciar sesión';
  
  constructor() {
    this.isLoggedIn = sessionStorage.getItem('user') != null;
    if (this.isLoggedIn) {
      this.btnText = 'Cerrar sesión';
    }
  }

  loginlogout() {
    if (this.isLoggedIn) {
      // cierra sesión y vuelve a home
      sessionStorage.removeItem('user');
      this.btnText = 'Cerrar sesión';
      this.router.navigate(['home']);
    } else {
      // redirecciona a la pantalla de login
      this.btnText = 'Iniciar sesión';
      this.router.navigate(['authentication/login']);
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
