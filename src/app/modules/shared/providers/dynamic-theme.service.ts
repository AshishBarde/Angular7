import { Injectable, EventEmitter } from '@angular/core';

declare var document: any;

@Injectable()
export class DynamicThemeService {

    public static getThemeStylingRule(colors) {
        console.log(colors);
        let headerBackgroundColor = 'md-toolbar.mat-toolbar.mat-primary { background-color: ' + colors[0] + '}',
        sidebarBackgroundColor = 'mat-sidenav.mat-sidenav { background-color: ' + colors[1] + '}',
        sidenavTextColor = 'body .mat-nav-list .mat-list-item { color: ' + colors[2] + '}',
        sidenavTextHoverColor = 'body .mat-nav-list .mat-list-item:hover, body .mat-nav-list .mat-list-item.active { background-color: ' + colors[3] + '}',
        headerTextColor = 'mat-toolbar.mat-toolbar .logged-user-info .user-details span { color: ' + colors[4] + '}',
        mainHeadingColor = '.heading-breadcrumbs--wrap .heading{ color: ' + colors[5]+'!important'+  '}, body .breadcrumb li a, body .breadcrumb>.active{ color: ' + colors[5] + '}',
        bodyTextColor = 'body .full-width-input-wrap.mat-input-container .mat-input-wrapper .mat-input-placeholder,'
        +'body .full-width-input-wrap .mat-select .mat-select-placeholder, body .full-width-input-wrap.mat-input-container '
        +'.mat-input-wrapper .mat-input-element, body .full-width-input-wrap .mat-select .mat-select-value,' 
        +'body .client-setup-tabs-wrap .client-setup-tabs-card .client-setup-tabs ul li.current-tab, .client-setup-tabs-wrap'
        +' .client-setup-tabs-card .client-setup-tabs ul li:hover { color : ' + colors[6] + '}',
        primaryButtonColor='.app-btn.mat-button.orange-button,.button-dropdown button.mat-button { background-color: ' + colors[7] + '}',
        primaryHoverButtonColor='.app-btn.mat-button.orange-button:hover, .button-dropdown button.mat-button:hover { background-color: ' + colors[8] + '}',
        bodyBackgroundColor='.main-content { background-color: ' + colors[9]+'!important'+  '}',
        activeMenuTextColor='body .mat-nav-list .mat-list-item.active,body .mat-nav-list .mat-list-item.active .menu-icon{color: '+ colors[10]+'}', 

        selectedFont='.heading,md-toolbar.mat-toolbar.mat-primary,mat-sidenav.mat-sidenav,.heading-breadcrumbs--wrap .heading,body .mat-nav-list .mat-list-item,.breadcrumb li a,.full-width-input-wrap.mat-input-container .mat-input-wrapper .mat-input-placeholder,.full-width-input-wrap.mat-input-container .mat-input-wrapper .mat-input-element,md-toolbar.mat-toolbar .logged-user-info .user-details span,.breadcrumb li,.ng-data-table-wrap table td{font-family: '+ colors[11]+'!important'+ '}'; 
        
        let styleColors = [
            headerBackgroundColor, 
            sidebarBackgroundColor, 
            sidenavTextColor,
            sidenavTextHoverColor,
            headerTextColor,
            mainHeadingColor,
            bodyTextColor,
            primaryButtonColor,
            primaryHoverButtonColor,
            bodyBackgroundColor,
            activeMenuTextColor,
            selectedFont
        ];
        return styleColors.join(' ');
    }

    public static setThemeStyling(rule, id) {
        let css: any = document.createElement('style');
        css.id = id;
        css.type = 'text/css';
        if (css.styleSheet) {
            css.styleSheet.cssText = rule; 
        } else {
            css.appendChild(document.createTextNode(rule));
        }
        document.getElementsByTagName("head")[0].appendChild(css); 
    }

    public static removeThemeStyling(styleId) {
        if (document.getElementById(styleId) !== null) {
            document.getElementById(styleId).remove();
        }        
    }

}