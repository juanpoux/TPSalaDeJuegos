import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public title: string = 'Home';

  constructor() {
    if(sessionStorage.getItem('user') != null) {
      this.title = 'Sesión iniciada';
    }
  }
}
