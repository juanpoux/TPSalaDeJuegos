import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaLoginFirebaseRoutingModule } from './prueba-login-firebase-routing.module';
import { PruebaLoginFirebaseComponent } from './prueba-login-firebase.component';

import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [PruebaLoginFirebaseComponent],
  imports: [
    CommonModule,
    PruebaLoginFirebaseRoutingModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class PruebaLoginFirebaseModule {}
