import { MatSidenav } from '@angular/material';
// import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, HostBinding, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'common-modal',
    templateUrl: './common-modal.component.html',
    styleUrls: ['./common-modal.component.scss']
})

export class CommonModalComponent implements OnInit {

 ngOnInit() {}


}