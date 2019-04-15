

// import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
    selector: 'app-PostScoreTimeline',
    templateUrl: './PostScoreTimeline.component.html',
    styleUrls: ['./PostScoreTimeline.component.scss']
})

export class PostScoreTimelineComponent implements OnInit {
    
    constructor(private router: Router) { }

   
    ngOnInit() {     
        
    }

   
}
