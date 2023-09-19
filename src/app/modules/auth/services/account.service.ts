import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth, private toastr: ToastrService) {}

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('error en login ', error);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      // Obtener el código de error de Firebase
      if (error instanceof Error) {
        this.toastr.error(error.message, 'Error');
      }
      console.error(error);
      // Mostrar un mensaje de error según el código de error
      return null;
    }
  }
}
