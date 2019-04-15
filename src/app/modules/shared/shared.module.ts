// Core Modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
//import { httpFactory } from "./factories/http.factory";
import { MaterialModule } from '../material-components/material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component';
//import { adminsidenavComponent } from './components/adminsidenav/adminsidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { changepasswordComponent } from './components/header/header.component';
// Modules
import { NgDataTablesModule } from './modules/ng-data-tables/ng-data-tables.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
// Services
import { HttpService } from './providers/http.service';
import { StorageService } from './providers/storage.service';
import { SessionService } from './providers/session.service';
import { EmitterService } from './providers/emitter.service';
import { UtilitiesService } from './providers/utilities.service';
import { FooterComponent } from './components/footer-component/footer.component'
import { HackerNewsService } from './providers/hacker-news.service';
import { ClickOutsideModule } from 'ng4-click-outside';
import { CommonModalComponent } from './components/common-modal/common-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    //MatIconModule,
    MaterialModule,
    NgDataTablesModule,
    ClickOutsideModule
  
  ],
  declarations: [
    SidenavComponent,
    //adminsidenavComponent,
    HeaderComponent,
    changepasswordComponent,
    HeadingSectionComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CommonModalComponent
  
  ],
  exports: [
    SidenavComponent,
   // adminsidenavComponent,
    HeaderComponent,
    HeadingSectionComponent,
    FooterComponent,
    changepasswordComponent,
    NgDataTablesModule,
    BreadcrumbsComponent,
    CommonModalComponent
   
  ],
  entryComponents: [
    changepasswordComponent
  ],
  providers: [  
    //HackerNewsService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: [
              HttpService,
              StorageService,
              SessionService,
              EmitterService,
              UtilitiesService,
              HackerNewsService
          ]
      };
  }
 }