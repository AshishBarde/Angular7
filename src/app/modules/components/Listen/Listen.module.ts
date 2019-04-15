
// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListenRoutingModule } from './Listen.routing.module';
// Components
import { MaterialModule } from '../../material-components/material.module';
import { ListenComponent } from './Listen.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,  
    ReactiveFormsModule,
    FormsModule,
    ListenRoutingModule,
    ChartsModule
  ],
  declarations: [
    ListenComponent,
  ],
  exports: [
    ListenComponent          
  ],
  entryComponents: [
   
    
  ],    
  providers: [
   
   
  ]
})
export class ListendModule { }
