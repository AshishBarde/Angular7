import { element } from 'protractor';
import { FormsModule } from '@angular/forms';
import { 
  Component, OnInit, OnChanges, OnDestroy, 
  Input, Output, EventEmitter, ContentChildren, 
  QueryList, ElementRef, ViewChild, ViewChildren
} from '@angular/core';

import { ColumnsModel } from './ng-dt.models';

import { NgPaginationComponent } from './ng-pagination/ng-pagination.component';

import { HttpService } from '../../../shared/providers/http.service';
import * as Sifter from './sifter';



@Component({
  selector: 'ng-data-tables',
  templateUrl: './ng-data-tables.component.html',
  styleUrls: ['./ng-data-tables.component.scss']
})
export class NgDataTablesComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild(NgPaginationComponent) 
  // @ViewChild(MorePopupComponent) 

  private _ngPagination: NgPaginationComponent; 
  // private _co.openPopup: MorePopupComponent;

  @ViewChildren('filterInputs')
  private _filterInputsEl: QueryList<ElementRef>;

  @Input() columns: Array<ColumnsModel> = [];

  @Input() columnsLength:number;

  @Input() rows: Array<any> = [];

  @Input() totalRows: number = 0;

  @Input() trackByKey: string = '';

  @Input() isAjax: boolean = false;

  @Input() pagesCount: number = 1;

  @Input() hasCheckbox: boolean = false;

  @Input() searchBox: boolean = true;

  @Input() hasActionButtons: boolean = false;

  @Input() hasActions:boolean=false;

  @Input() editButton:boolean=false;

  @Input() refreshButton:boolean=false;
  
  @Input() deleteButton:boolean=false;

  @Input() showDetailsButton:boolean=false;
  
  @Input() copyButton:boolean=false;  

  @Input() printButton:boolean=false;

  @Input() onBeHalfButton:boolean=false;

  @Input() trackLocationButton:boolean=false;
  
  @Input() editButtonIcon: string = 'fa fa-pencil';

  @Input() showDetailsIcon: string = 'fa fa-eye';

  @Input() deleteButtonIcon: string = 'fa fa-trash-o';

  @Input() refreshButtonIcon: string = 'fa fa-refresh';

  @Input() copyIcon: string = 'fa fa-files-o';

  @Input() printIcon: string = 'fa fa-print';

  @Input() onBeHalfIcon: string = 'icon-onBehalf';
  
  @Input() trackLocationIcon: string = 'icon-track';

  @Output('rLink') _rlink = new EventEmitter<any>();

  @Output('paginateRecords') paginateRecordsEvent = new EventEmitter<any>();

  @Output('searchRecords') searchRecordsEvent = new EventEmitter<any>();

  @Output('edit') editEvent = new EventEmitter<any>();

   @Output('refresh') refreshEvent = new EventEmitter<any>();

  @Output('showDetails') showDetailsEvent = new EventEmitter<any>();

  @Output('delete') deleteEvent = new EventEmitter<any>();

  @Output('copy') copyEvent = new EventEmitter<any>();

  @Output('print') printEvent = new EventEmitter<any>();

  @Output('onBeHalf') onBeHalftEvent = new EventEmitter<any>();

  @Output('trackLocation')trackLocationEvent = new EventEmitter<any>();

  allRows: Array<any> = [];

  paginateRows: Array<any> = [];

  searchRows: any = [];

  extraSearchValues: Array<any> = [];

  perPage: number = 10;
  
  first: number = 1;

  last: number = 1;

  isDesc: boolean = false;

  sortColumn: string = '';

  direction: number;

  columnKeys: Array<string> = [];

  isRecordsSearch: boolean = false;

  
  constructor(private httpService: HttpService) { 
    
  }

  ngOnInit() {
    this.buildColumnsKeys();
    // this.rows.forEach(element => {
    //     console.log(element);
    // });
    console.log("this.rows ng-data-tables")
    console.log(this.rows);
  }

  
  ngOnChanges(changes: any) {
    if (changes && typeof changes.rows !== 'undefined') {
      this.searchRows = new Sifter(this.rows);
      this.allRows = this.rows;
      this.paginateRows = this.rows;
    }

    if (this.isAjax === false) {
      this.paginateRecords(1);
    }
  }

  /**
   * Build Column Keys
   */
  buildColumnsKeys() {
    if(this.columns.length > 0) {
      for (var i = 0; i < this.columns.length; i++) {
        this.columnKeys.push(this.columns[i].key);
      }
    }
  }
  
  /**
   * Paginate Records
   * 
   * @param pageNumber
   */
  paginateRecords(pageNumber: number) {
    if (this.isAjax === false) {
      --pageNumber;
      let start = pageNumber * this.perPage;
      let end = (pageNumber + 1) * this.perPage;
      this.rows = this.paginateRows.slice(start, end);
      this.first = start + 1;
      this.last = (end < this.totalRows) ? end : this.totalRows;
    } else {
      this.paginateRecordsEvent.emit(pageNumber);
    }   
  }

  /**
   * Search Rows
   */
  search() {
    let searchResult = null;
    let searchValue = '';    
    let searchValues: Array<any> = [];

    if (this.isAjax === false) {

      if (typeof this._filterInputsEl !== 'undefined') {
        this._filterInputsEl.forEach((el: ElementRef) => {
          if (el.nativeElement.value.trim() !== '') {
            searchValues.push(el.nativeElement.value);
          }
        });
      }

      if (typeof this.extraSearchValues !== 'undefined') {
        searchValues = searchValues.concat(this.extraSearchValues);
      }

      if (searchValues.length > 0) {
        searchValue = searchValues.join('+').trim();
        this.isRecordsSearch = true;
      } else {
        this.isRecordsSearch = false;
      }
    
      searchResult = this.searchRows.search(searchValue, {
        fields: this.columnKeys,
        conjunction: 'and'
      });

      this.rows = [];
      searchResult.items.forEach((item: any) => {
        this.rows.push(this.allRows[item.id]);
      });

      this.paginateRows = this.rows;
      this.totalRows = this.paginateRows.length;
      this.paginateRecords(1);
    } else {
      if (searchValue.length > 3) {
        this.searchRecordsEvent.emit([]);
      }
    }  
  }


  searchByColumn(columnkey){
    let searchResult = null;
    let searchValue = '';    
    let searchValues: Array<any> = [];

    if (this.isAjax === false) {

      if (typeof this._filterInputsEl !== 'undefined') {
        this._filterInputsEl.forEach((el: ElementRef) => {
          if (el.nativeElement.value.trim() !== '') {
            searchValues.push(el.nativeElement.value);
          }
        });
      }

      if (typeof this.extraSearchValues !== 'undefined') {
        searchValues = searchValues.concat(this.extraSearchValues);
      }

      if (searchValues.length > 0) {
        searchValue = searchValues.join('+').trim();
        this.isRecordsSearch = true;
      } else {
        this.isRecordsSearch = false;
      }
    
      searchResult = this.searchRows.search(searchValue, {
        fields: columnkey,
        conjunction: 'and'
      });

      this.rows = [];
      searchResult.items.forEach((item: any) => {
        this.rows.push(this.allRows[item.id]);
      });

      this.paginateRows = this.rows;
      this.totalRows = this.paginateRows.length;
      this.paginateRecords(1);
    } else {
      if (searchValue.length > 3) {
        this.searchRecordsEvent.emit([]);
      }
    }  
  }

  /**
   * Sort Event
   * 
   * @param property
   */
   sort(property: string) {
      this.isDesc = !this.isDesc; //change the direction    
      this.sortColumn = property;
      this.direction = this.isDesc ? 1 : -1;
      let sortRows = (this.isRecordsSearch === false) ? this.allRows : this.paginateRows; 
      if (this.isAjax === false) {
        sortRows.sort((a, b) => {
          if (a[property] < b[property]) {
            return -1 * this.direction;
          }
          else if ( a[property] > b[property]) {
            return 1 * this.direction;
          }
          else {
            return 0;
          }
        });

       // console.log(sortRows);

        this.rows = sortRows;
        if (this.isRecordsSearch === false) {
          this.paginateRows = sortRows;
        }

        this.paginateRecords(1);
        this.setPage(1);
      } else {

      }
   }

  /**
   * Records Per Page Selection Event
   * 
   * @param event
   */
  onPerPage(event) {
    this.perPage = parseInt(event.target.value, 10);
    this.paginateRecords(1);
  }

  /**
   * Goto Link Event
   * 
   * @param row, column
   */
  gotoLink(row: any, column: any) {
    
    if (column.link === true) {
      let routeData = {
        row: row,
        columnKey: column.key
      };
      this._rlink.emit(routeData);
    }
  }

  /**
   * Echo Value
   * 
   * @param row, column
   */
  echo(row, column): string {
    if (column.key !== '' && typeof row[column.key] !== 'undefined') {
      return row[column.key];
    } else if (column.defaultValue !== '') {
      return column.defaultValue;
    }

    return '';
  }


  /**
   * Emitting Edit Event
   * 
   * @param row
   */
  edit(row: any) {
    this.editEvent.emit(row);
  }

  refresh(row: any){
    this.refreshEvent.emit(row)
  }
  showDetails(row: any) {
    this.showDetailsEvent.emit(row);
  }
  copy(row: any) {
    this.copyEvent.emit(row);
  }
  print(row: any) {
    this.printEvent.emit(row);
  }
  onBeHalf(row: any) {
    this.onBeHalftEvent.emit(row);
  }
  trackLocation(row: any) {
    this.trackLocationEvent.emit(row);
  }
  
//open more popup
  addQty:boolean = false;
  localrow={
    addQty:false,
    printServiceId:""
  }

  

//popup should close on outer click
  onClickedOutside(e:any,row: any) {
    //row.addQty = false;
    if(!(e.target.classList.contains('mat-option-text') || e.target.classList.contains('mat-select-trigger')|| e.target.classList.contains('mat-option')|| e.target.classList.contains('more-link')|| e.target.classList.contains('addclick'))){row.addQty = false;} 
  }

  /**
   * Emitting Price Event
   * 
   * @param row
   */
  newprice:any;
  


   /**
   * Emitting Price Event
   * 
   * @param row
   */




  /**
   * Emitting Delete Event
   * 
   * @param row
   */
  delete(row: any) {
    this.deleteEvent.emit(row);
  }


  
/**
   * Emitting Download Event
   * 
   * @param row
   */

  /**
   * Track rows in ngFor
   * 
   * @param index, item
   */
  trackByFn(index, item) {
    return index; 
  }

  /**
   * Add Tag Class to record item
   * 
   * @param tag
   */

   
  tagClass(tag: string, isTag: boolean): string {
    if (!tag) {
      return '';
    }

    if (!isTag) {
      return '';
    }

    return ' tag ' + tag.toLowerCase().replace(/\s/g,'_');
  }

  /**
   * Set Page
   * 
   * @param pageNumber
   */
  setPage(pageNumber: number) {
    this._ngPagination.setPage(pageNumber);
  }

  ngOnDestroy() {

  }
    
}