

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.compoent';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { ActiveGuard } from './root/guard';
import { LoginComponent } from './modules/login/login.component';
import { ForgotPasswordComponent } from './modules/login/forgot-password.component';
import { ForgotusernameComponent } from './modules/login/forgot-username.component';
//import { selectiondashboardComponent } from './selectiondashboard/selectiondashboard.compoent';
import { Guard } from './guard';
const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/AthenaApp', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent 
   
  }, 
  {
    path:'forgotPassword', 
    component: ForgotPasswordComponent
  },
   {
    path:'forgotusername', 
    component: ForgotusernameComponent
  },
  {
    path:'AthenaApp', 
    component: RoleComponent,  

    children: [
      { 
          path: '',
          redirectTo: 'dashboard', 
          pathMatch: 'full',
      },
    
      {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [Guard]       
      }
    ]
  },

]; 
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { 
         preloadingStrategy: SelectivePreloadingStrategy, 
        useHash: false
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
