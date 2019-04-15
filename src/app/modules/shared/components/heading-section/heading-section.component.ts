import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-heading-section',
  templateUrl: './heading-section.component.html',
  styleUrls: ['./heading-section.component.scss']
})

export class HeadingSectionComponent implements OnInit {

    @Input('heading') heading; 
    @Input('breadcrumbs') breadcrumbs;

    constructor() {         
    }

    ngOnInit() {      
    }    

}
