import { MatSidenav } from '@angular/material';
// import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, HostBinding, Input} from '@angular/core';

import { Router, ActivatedRoute, NavigationStart  } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InteractionService } from '../../../../services/interaction.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import {RoleComponent} from '../../../../role/role.compoent'

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @HostBinding('class') classes = 'app-header';
    showLoginUSerDropdown: boolean = false;
    reportForm: FormGroup;  

    collapsedWindow:boolean = false;
    downArrow:boolean = true;
    upArrow:boolean =false;
     showHead: boolean = false;

  constructor(
        private router: Router,
        private _InteractionService:InteractionService,
        public dialog: MatDialog
        //private rolecomponent:RoleComponent
        ) {  }
    ngOnInit() { 

    }
    toogleButton(){       
        this._InteractionService.sendflag('true');
        this.collapsedWindow = !this.collapsedWindow;
        //this.rolecomponent.collapsedWindow = this.collapsedWindow;
    }

    @Input('sidenav') sidenav: MatSidenav;

  //Login User dropdown
  loginUserclick() {
    this.showLoginUSerDropdown = !this.showLoginUSerDropdown;
    this.downArrow = !this.downArrow;
    this.upArrow = !this.upArrow;
  }
  onClickedOutside(e: Event) {
    this.showLoginUSerDropdown = false;
    this.downArrow = !this.downArrow;
    this.upArrow = !this.upArrow;
  }

  goToProfile(){
    this.router.navigate(['role/profile']);
    this.showLoginUSerDropdown = false;
  }

  //LogOut funtion
  
  logout(){
    this.router.navigate(['login']);
    this.showLoginUSerDropdown = false;
  }
 
  changepassword(){
       const dialogRef = this.dialog.open(changepasswordComponent,{
        height: 'auto',
        width: '500px',
        disableClose: true,
       })
  }
 
}
@Component({
    selector: 'changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./header.component.scss']
})

export class changepasswordComponent implements OnInit {
    OtherForm: FormGroup; 
    constructor(private formBuider: FormBuilder, public dialog: MatDialog) { }

    ngOnInit() { 
       this.OtherForm = this.formBuider.group({
      currentpassword: ['', [Validators.required]],      
      newpassword: ['', [Validators.required]],   
      reenternewpassword: ['', [Validators.required]], 
    });
    }

   closePopup(){
     const dialogRef = this.dialog.closeAll();
   }
}