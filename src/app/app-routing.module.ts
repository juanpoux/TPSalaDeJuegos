import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LogoutComponent } from './pages/authentication/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/authentication/prueba-login-firebase/prueba-login-firebase-routing.module').then(
            (m) => m.PruebaLoginFirebaseRoutingModule
          ),
      },
      // {
      //   path: 'login',
      //   loadChildren: () =>
      //     import('./modules/authentication/login/login-routing.module').then(
      //       (m) => m.LoginRoutingModule
      //     ),
      // },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'authentication/pruebaLoginFirebase',
    loadChildren: () =>
      import(
        './modules/authentication/prueba-login-firebase/prueba-login-firebase.module'
      ).then((m) => m.PruebaLoginFirebaseModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
