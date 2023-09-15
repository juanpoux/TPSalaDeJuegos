import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaLoginFirebaseComponent } from './prueba-login-firebase.component';

const routes: Routes = [{ path: '', component: PruebaLoginFirebaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaLoginFirebaseRoutingModule { }
