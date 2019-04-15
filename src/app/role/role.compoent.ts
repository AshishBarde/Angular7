
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InteractionService } from '../services/interaction.service';
import Popper from 'popper.js';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RoleComponent implements OnInit, OnDestroy {
  collapsedWindow:boolean = false;

  constructor(private _router: Router, private _InteractionService:InteractionService) {
   
  }

 ngOnInit() {
    this.navsetting();
    
  }

   navsetting(){
       this._InteractionService.headerMessage$
      .subscribe(
         flag => {              
           if(flag == 'true'){            
              this.collapsedWindow = !this.collapsedWindow;
           } 
         });
   }

  ngOnDestroy() {
    
  }
}
