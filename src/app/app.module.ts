import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoleComponent } from './role/role.compoent';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './modules/material-components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { Guard } from './guard';
import { HttpModule } from '@angular/http';
import { InteractionService } from './services/interaction.service';


@NgModule({
  declarations: [   
    AppComponent,
    RoleComponent,  
  ],
  imports: [    
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HttpModule,
    SharedModule.forRoot(),
  ],
  providers: [
    Guard,
    InteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
