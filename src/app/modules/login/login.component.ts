
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router , NavigationEnd} from '@angular/router';
import { Response } from '@angular/http';
import { HttpService } from '../shared/providers/http.service';

import { StorageService } from '../shared/providers/storage.service';
import { config } from '../../../../protractor.conf';
import { templateJitUrl } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
mainstatus:boolean = true;
  currentUrl : string;


  constructor(private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {

 
  }



  ngOnInit() {
  }
 
  login(){
    this.router.navigate(['role']);
    
  }
  forgotPass(){
    this.router.navigate(['forgotPassword']);
    
  }
  forgotuser(){
    this.router.navigate(['forgotusername']);
  }

}
