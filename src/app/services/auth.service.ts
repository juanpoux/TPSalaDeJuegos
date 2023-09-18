import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth) {}
  // private afauth: AngularFireAuth = inject(AngularFireAuth);

  async login(email: string, password: string) {
    try {
      let asd = await this.afauth.signInWithEmailAndPassword(email, password);
      console.log(asd);
      return asd;
    } catch (error) {
      console.error('error en login ', error);
      return null;
    }
  }

  async loginGoogle() {
    try {
      return await this.afauth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (error) {
      console.error('error en login con google ', error);
      return null;
    }
  }

  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('error en login ', error);
      return null;
    }
  }
}
