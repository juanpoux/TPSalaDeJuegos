import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public title: string =
    'Bienvenido, inicie sesión para poder ver el contenido de la página';
  public isLoggedIn: boolean = false;
  public userName: string = '';

  constructor() {}
  ngOnInit(): void {
    let storage = sessionStorage.getItem('user');
    if (storage != null) {
      let user: string = JSON.parse(storage);
      console.log(user);
      this.userName = user!;
      this.isLoggedIn = true;
    }
  }
}
