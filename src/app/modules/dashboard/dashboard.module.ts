import { HttpModule } from '@angular/http';
import { NgDataTablesModule } from './../shared/modules/ng-data-tables/ng-data-tables.module';

import { SharedModule } from '../shared/shared.module';
// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material-components/material.module';
import { DashboardRoutingModule } from './dashboard.routing.module';


@NgModule({
  imports: [
    CommonModule,   
    SharedModule,
    MaterialModule,
    DashboardRoutingModule,
    NgDataTablesModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent           
  ],
  entryComponents: [
   
    
  ],    
  providers: [
   
   
  ]
})
export class DashboardModule { }
