import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public title: string = 'Bienvenido, inicie sesión';
  public isLoggedIn: boolean = false;

  constructor() {}
  ngOnInit(): void {
    if (sessionStorage.getItem('user') != null) {
      this.title = 'Sesión iniciada, bienvenido!';
      this.isLoggedIn = true;
    }
  }
}
