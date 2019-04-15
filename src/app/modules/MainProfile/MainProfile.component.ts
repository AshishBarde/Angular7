import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../shared/providers/storage.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'app-MainProfile',
    templateUrl: './MainProfile.component.html',
    styleUrls: ['./MainProfile.component.scss']
})

export class MainProfileComponent implements OnInit {

    twitterstatus:boolean = false;
    facebookstatus:boolean = false;
    youtubestatus:boolean = false;
    instagramstatus:boolean = false;
    tumblrstatus:boolean = false;
    redditstatus:boolean = false;
    vktatus:boolean = false;
    neosstatus:boolean = false;
    form: FormGroup;
    constructor(public dialog: MatDialog , private router: Router, private _fb: FormBuilder ) {
        this.form = _fb.group({
      date: [{begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25)}]
    });
    }

        ngOnInit() {     

        }
 twitterclickEvent(){
    this.twitterstatus = !this.twitterstatus;
 }
facebookclickEvent(){
     this.facebookstatus = !this.facebookstatus;
}
youtubeclickEvent(){
     this.youtubestatus = !this.youtubestatus;
}
instagramclickEvent(){
     this.instagramstatus = !this.instagramstatus;
}
tumblrclickEvent(){
     this.tumblrstatus = !this.tumblrstatus;
}
redditclickEvent(){
     this.redditstatus = !this.redditstatus;
}
vkclickEvent(){
     this.vktatus = !this.vktatus;
}


}
