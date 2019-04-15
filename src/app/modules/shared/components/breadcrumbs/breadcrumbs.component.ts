import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SessionService } from '../../providers/session.service';
import { DynamicThemeService } from '../../providers/dynamic-theme.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})

export class BreadcrumbsComponent implements OnInit, OnChanges {

    @Input('breadcrumbs') _breadcrumbs: Array<any> = [];

    constructor() {        
        
    }

    ngOnInit() {
        
    }

    ngOnChanges() {
        this.updateItemLinks();        
    }
    
    updateItemLinks() {
        let base = SessionService.get('base-role');
        console.log("breadcrumb =="+base);
        if (this._breadcrumbs.length > 0) {
            this._breadcrumbs.forEach((item) => {                         
                if (item.base === true) {
                    item.link = '/' + base + item.link;      
                     console.log("breadcrumb link =="+item.link);          
                }                
            });
        }
    }

    onSelect() {
        DynamicThemeService.removeThemeStyling('test-dynamic-theme');
    }
}
