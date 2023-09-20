import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { ILogUser } from '../interfaces/log-user.interface';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  addLogUser(username: string) {
    const userRef = collection(this.firestore, 'users');
    const user: ILogUser = { username: username, timestamp: Date.now() };
    return addDoc(userRef, user);
  }
}
