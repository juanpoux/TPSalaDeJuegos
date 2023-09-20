import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  constructor(private test: TestService) {}

  clickBtn() {
    let isLoggedIn = sessionStorage.getItem('user') != null;
    if (isLoggedIn) {
      console.log('Se hizo click');
      let username = sessionStorage.getItem('user');
      this.test.addUserLog(username!);
    } else {
      console.error('Debe iniciar sesión');
    }
  }
}

/* También funciona lo de abajo, sin incluír ni en app.module ni en test.module
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()), 
*/

// import { Component, OnInit } from '@angular/core';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss'],
// })
// export class TestComponent implements OnInit {
//   // Initialize Firebase
//   app = initializeApp(environment.firebase);

//   // Initialize Cloud Firestore and get a reference to the service
//   db = getFirestore(this.app);

//   constructor() {}

//   async asd() {
//     try {
//       const docRef = await addDoc(collection(this.db, 'users'), {
//         first: 'Ada',
//         last: 'Lovelace',
//         born: 1815,
//       });
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e) {
//       console.error('Error adding document: ', e);
//     }
//   }

//   async ngOnInit(): Promise<void> {
//     await this.asd();
//   }
// }
