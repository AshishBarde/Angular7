// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng4-click-outside';
// Components
import { NgDataTablesComponent } from './ng-data-tables.component';
import { NgPaginationComponent } from './ng-pagination/ng-pagination.component';
import { MaterialModule } from '../../../material-components/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ClickOutsideModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgDataTablesComponent,
    NgPaginationComponent,
  
  ],
  exports: [
    NgDataTablesComponent,
   
  ]
})
export class NgDataTablesModule { }
