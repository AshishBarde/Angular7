
import { SharedModule } from '../shared/shared.module';
// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from "@angular/material";
// Components
import { MainProfileComponent } from './MainProfile.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ActivityComponent } from './Activity/Activity.component';
import { PersonaldashboardComponent } from './Personaldashboard/Personaldashboard.component';
import { MaterialModule } from '../material-components/material.module';
import { MainProfileRouterModule } from './MainProfile.routing.module';
import { CalendarModule} from 'primeng/calendar';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatInputModule,
    MatNativeDateModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
     MatSelectModule,
     MatTabsModule,
     MatAutocompleteModule,
    FormsModule,
    MainProfileRouterModule,
    CalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'https://maps.google.com/maps/api/js?sensor=true&key=AIzaSyACrjBb3bdQRow2tsuW3ZJG6B03mzIQliE&libraries=places&language=en-US'
    })
  ],
  declarations: [
    MainProfileComponent,
    ProfileComponent,
    ActivityComponent,
    PersonaldashboardComponent
  ],
  exports: [
    MainProfileComponent,
    ProfileComponent,
    ActivityComponent,
    PersonaldashboardComponent
  ],
  entryComponents: [
  
  ],    
  providers: [
   
   
  ]
})
export class MainProfileModule { }
