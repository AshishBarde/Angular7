import { Component, OnInit, Inject, Input,  ViewChild, HostListener,  ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';

interface Menus {
  name: string;
  link: string;
  icon: string;
  submenus?: Array<any>;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SidenavComponent implements OnInit {
   
    currentUrl:any;
       constructor(private router: Router , @Inject(DOCUMENT) private _doc,
       ) { 
         
        }

    @Input('sidenav') sidenav;
   
     showFiller = false;
     expanded:boolean=false;
     expanded1:boolean = false;
    ngOnInit() {
      this.changeNavMenuSettings();

      
    }
    onItemSelected() {
      this.expanded = !this.expanded;
    }
   onItemSelected1(){
       this.expanded1 = !this.expanded1;
   }
    gotohome(){
     this.router.navigate(['selection/selectionbord']);
   }
    onResize() {
      
    }
    toggleSideNav(){
      alert('hi');
  }


  changeNavMenuSettings() {        
    if (window.innerWidth < 992) {
        this.sidenav.mode = 'push';
        this.sidenav.close();            
    } else {   
         
        setTimeout(()=>{
           
            this.sidenav.mode = 'side';
            this._doc.querySelector('.mat-sidenav').classList.remove('mat-sidenav-opening');
            this._doc.querySelector('.mat-sidenav-content').classList.remove('opening');
            this._doc.querySelector('.mat-sidenav').classList.add('mat-sidenav-opened') ;
            this._doc.querySelector('.mat-sidenav-content').classList.add('opened');                        
            // this.sidenav.open();
        }, 100);                        
    }
}




}
