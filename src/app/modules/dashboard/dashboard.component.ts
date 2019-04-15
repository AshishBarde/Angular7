import { IPosts } from './post.module';
import { ApiService } from './../../services/audit-report-service';
import { NgDataTablesComponent } from './../shared/modules/ng-data-tables/ng-data-tables.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
//import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [ApiService]
})

export class DashboardComponent implements OnInit {

    _postsArray: IPosts[];   

   constructor(private router: Router, private apiSerivce: ApiService ) {     }
      
  getPosts(): void {
    this.apiSerivce.getPosts()
        .subscribe( resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
}

    @ViewChild(NgDataTablesComponent)
    private DataTableComp: NgDataTablesComponent; 
     
    ngOnInit() {     
       this.getPosts();       
    }
    
    columnsLength:number;
    hasActions:boolean= true;
    hasActionButtons:boolean=true;
    editButton:boolean=true;
   
    copyButton:boolean = true;

    columns: Array<any> = [{ title: 'Sr. No', key: 'SrNo', sortable: true},
    { title: 'Login Name', key: 'LoginName', sortable: true},
    { title: 'LAST Logged In', key: 'LASTLoggedIn', sortable: true },
    { title: 'User Type', key: 'UserType', sortable: true},
    { title: 'Added By',  key: 'AddedBy',  sortable: true},
    { title: 'Status',  key: 'Status',  sortable: true}
   ];

   records=[{ SrNo:"1",  LoginName:"Angelique Zane", LASTLoggedIn:"2/5/2019, 02:11 pm", UserType:'Client User', AddedBy:'Moses Pettit', Status:'Active' },
   { SrNo:"2",  LoginName:"Myron Francois", LASTLoggedIn:"2/4/2019, 03:11 pm", UserType:'Super Admin', AddedBy:'Jarod Paynter', Status:'Active' },
   { SrNo:"3",  LoginName:"Janett Olivarria", LASTLoggedIn:"6/5/2019, 04:11 pm", UserType:'Admin', AddedBy:'Jarod Paynter', Status:'Never Logged In' },
   { SrNo:"4",  LoginName:"Myron Francois", LASTLoggedIn:"2/4/2019, 03:11 pm", UserType:'Super Admin', AddedBy:'Jarod Paynter', Status:'Active' },
   { SrNo:"5",  LoginName:"Janett Olivarria", LASTLoggedIn:"6/5/2019, 04:11 pm", UserType:'Admin', AddedBy:'Jarod Paynter', Status:'Never Logged In' },
   { SrNo:"6",  LoginName:"Myron Francois", LASTLoggedIn:"2/4/2019, 03:11 pm", UserType:'Super Admin', AddedBy:'Jarod Paynter', Status:'Active' },
   { SrNo:"7",  LoginName:"Janett Olivarria", LASTLoggedIn:"6/5/2019, 04:11 pm", UserType:'Admin', AddedBy:'Jarod Paynter', Status:'Never Logged In' },
   { SrNo:"8",  LoginName:"Myron Francois", LASTLoggedIn:"2/4/2019, 03:11 pm", UserType:'Super Admin', AddedBy:'Jarod Paynter', Status:'Active' },
   { SrNo:"9",  LoginName:"Janett Olivarria", LASTLoggedIn:"6/5/2019, 04:11 pm", UserType:'Admin', AddedBy:'Jarod Paynter', Status:'Never Logged In' },
   { SrNo:"10",  LoginName:"Myron Francois", LASTLoggedIn:"2/4/2019, 03:11 pm", UserType:'Super Admin', AddedBy:'Jarod Paynter', Status:'Active' },
   { SrNo:"11",  LoginName:"Janett Olivarria", LASTLoggedIn:"6/5/2019, 04:11 pm", UserType:'Admin', AddedBy:'Jarod Paynter', Status:'Never Logged In' },
   { SrNo:"12",  LoginName:"Janett Olivarria", LASTLoggedIn:"3/6/2019, 05:11 pm", UserType:'abcd', AddedBy:'Jarod Paynter', Status:'Deactivated' }
    ]

}
