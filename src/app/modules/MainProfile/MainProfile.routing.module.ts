
// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent  } from './MainProfile.component'
import { ProfileComponent } from './Profile/Profile.component';
import { ActivityComponent } from './Activity/Activity.component';
import { PersonaldashboardComponent } from './Personaldashboard/Personaldashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainProfileComponent,
    children: [
       { 
          path: '',
          redirectTo: 'dashboard', 
          pathMatch: 'full',
      },    
        {
        path:  'Profile',
        component:  ProfileComponent
        },
        {
        path:  'Activity',
        component:  ActivityComponent
        },
        {
        path:  'dashboard',
        component:  PersonaldashboardComponent
        }
        ]
 }
];

 
@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class MainProfileRouterModule { }

