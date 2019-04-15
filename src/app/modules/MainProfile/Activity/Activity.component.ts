

// import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
    selector: 'app-Activity',
    templateUrl: './Activity.component.html',
    styleUrls: ['./Activity.component.scss']
})

export class ActivityComponent implements OnInit {
    
    constructor(private router: Router) { }

   
    ngOnInit() {     
        
    }
    
    columnsLength:number;
    hasActions:boolean= true;
    hasActionButtons:boolean=true;
    editButton:boolean=true;
   
    copyButton:boolean = true;
    
 columns: Array<any> = [{ title: 'TOPIC', key: 'TOPIC', sortable: false, filter: true, link: true },
                        { title: 'CHANNEL', key: 'CHANNEL', sortable: false, filter: true  },
                        { title: 'LAST RUN', key: 'LASTRUN', sortable: false,  filter: true       },
                        { title: '#OF POSTS', key: 'POSTS', sortable: false,  filter: true       },
                        { title: 'SCORE',  key: 'SCORE',  sortable: false,  filter: true, isTag:false }
                       
                       ];
    showcustOptn:boolean = false;

records=[{ TOPIC:"Server",  CHANNEL:"Connection A", LASTRUN:188, POSTS:'abcd', SCORE:'pqrs' },
         { TOPIC:"API-Twitter", CHANNEL:"Connection B",  LASTRUN:5, POSTS:'abcd', SCORE:'pqrs' },
         { TOPIC:"API-Instagram", CHANNEL:"Connection C", LASTRUN:2131, POSTS:'abcd', SCORE:'pqrs' },
         { TOPIC:"RSS Feed", CHANNEL:"Connection D", LASTRUN:234, POSTS:'abcd', SCORE:'pqrs'}
        ]


   
}
