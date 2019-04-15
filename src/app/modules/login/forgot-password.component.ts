import { StorageService } from './../shared/providers/storage.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';
import { HttpService} from '../shared/providers/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./login.component.scss']
})



export class ForgotPasswordComponent implements OnInit {



  constructor(private _router: Router,
              private httpService : HttpService,
             ) { }
  

  ngOnInit() {
  }  


  gotoLogin() {
    this._router.navigate(['login']);
  }

}
