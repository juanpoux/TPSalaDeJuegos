import { Injectable } from '@angular/core';
// import { Firestore, addDoc, collection } from 'firebase/firestore';  // esta no es la ruta. la de abajo si ↓
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private firestore: Firestore) {}

  addUserLog(username: string) {
    const userRef = collection(this.firestore, 'users');
    console.log('SE EJECUTO');
    return addDoc(userRef, {
      username: username,
      timestamp: Date.toString()
    });
  }
}
