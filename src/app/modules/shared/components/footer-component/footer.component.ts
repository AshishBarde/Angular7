import { MatSidenav } from '@angular/material';
// import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, HostBinding, Input} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

    constructor(
        private _router: Router
        ) {

           
         }


    ngOnInit() {     
           
    }

}
