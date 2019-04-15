import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
   private _headerMessageSource = new Subject<string>();
   headerMessage$ = this._headerMessageSource.asObservable();

  constructor() { }

  sendflag(flag : string){
    this._headerMessageSource.next(flag);
  }
}
