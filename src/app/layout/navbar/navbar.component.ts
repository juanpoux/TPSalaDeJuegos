import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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

  loginlogout() {
    if (this.isLoggedIn) {
      // cierra sesión y vuelve a home
      this.router.navigate(['home']);
    } else {
      // redirecciona a la pantalla de login
      this.router.navigate(['authentication/login']);
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
