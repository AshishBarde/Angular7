import { IPosts } from './../modules/dashboard/post.module';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"; 
 @Injectable()
 export class ApiService {
 
     private _postsURL = "http://localhost:9002/rdhcore/users/byUser/110192/Y?page=0&size=500&sort=userId,desc&_=1554966467725";
 
     constructor(private http: Http) {
     }
 
     getPosts(): Observable<IPosts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
             })
             .catch(this.handleError);
     }
 
     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }//</IPosts[]></IPosts[]>
