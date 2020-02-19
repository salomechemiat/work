import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { AuthGuard } from "./guards/auth-guard.service";



const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    //canActivate: [AuthGuard]
    
  },
  {
    path: 'chv',
    loadChildren: () => import('./chv/chv.module').then(m => m.ChvModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
