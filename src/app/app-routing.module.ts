import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test',
  },
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/login/login-routing.module').then(
            (m) => m.LoginRoutingModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./modules/auth/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'logout',

        loadChildren: () =>
          import('./modules/auth/logout/logout.module').then(
            (m) => m.LogoutModule
          ),
      },
    ],
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./modules/auth/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/general/about/about.module').then((m) => m.AboutModule),
  },
  { path: 'test', loadChildren: () => import('./modules/test/test/test.module').then(m => m.TestModule) },
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
