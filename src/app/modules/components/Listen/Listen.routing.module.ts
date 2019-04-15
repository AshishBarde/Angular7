
// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListenComponent  } from './Listen.component'

const routes: Routes = [
  {
    path: '',
    component: ListenComponent
  }
];

 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class ListenRoutingModule { }

