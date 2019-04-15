import {Injectable } from '@angular/core'; 
import { Http, Response , ResponseContentType } from '@angular/http'; 
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import { StorageService } from './storage.service';
import { map, retry, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';
import 'rxjs/Rx';
import { fromEvent } from 'rxjs';
@Injectable()
export class HttpService {

  constructor(private http:Http, private router:Router) {}

  private extractData(res:Response) {
    let body = {}
    try {
      body = res.json(); 
      return body;
    } catch(e) {      
      return body;
    }    
  }

  login(url:string, user:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, user, options)
      .map(this.extractData); 
  }

  getAll(url:string):Observable < any >  {
    // let headers = new Headers({'Content-Type' : 'appl;ication/json' , 'Access-Control-Allow-Origin' : '*'});
    // let options = new RequestOptions({headers : headers});
    return this.http.get(url).map(this.extractData); 
  }//getAll
  
  getQubQt(url:string,value):Observable < any >  {
     let headers = new Headers({'Content-Type' : 'application/json'});
     let options = new RequestOptions({headers : headers});
    return this.http.post(url,value,options).map((response:Response)=>{
      
        return response;
      
    }
    )
  }//getAll
  get(url: string): Observable<any> {
    let headers = new Headers( {'Content-Type':'application/json', "Authorization": "Bearer "+ StorageService.get("JwtToken")});
    let options = new RequestOptions( {headers:headers }); 
    return this.http.get(url,options).map(this.extractData);
  }

  getAllFacility(url:string,value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    //StorageService.get("clientId")
    return this.http.post(url,value, options)
      .map(this.extractData); 
  }//save

 post(url:string,value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json', "Authorization": "Bearer "+ StorageService.get("JwtToken")}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url,value, options)
      .map(this.extractData); 
  }

  save(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options)
      .map(this.extractData); 
  }//save

  authenticate(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json','Authorization':'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options)
      .map(this.extractData); 
  }//save

  delete(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options)
      .map(this.extractData); 
  }//delete

  update(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options)
      .map(this.extractData); 
  }//update

  downldFile(url:string): Observable <any>{
       
    
      let headers = new Headers({'Content-Type': 'application/pdf', 'Accept': 'application/pdf'});
      let options = new RequestOptions( { headers:headers}); 
      return this.http.post(url, options).map((response: Response) => {
          if(response != undefined && response != null)
            
   
    
    //const blob = new Blob([response._body], { type: 'application/pdf' });
          
    
    
              return response ;
          
      })
  }

  

  

  remove(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options)
                    .map(this.extractData); 
  }

  findById(url:string, value:any):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.post(url, value, options).map(this.extractData); 
  }
  
  getById(url:string):Observable < any >  {
    let headers = new Headers( {'Content-Type':'application/json'}); 
    let options = new RequestOptions( {headers:headers }); 
    return this.http.get(url).map(this.extractData); 
  }

  getFileByteContent(url:string, value:any): Observable <any>{
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions( { headers:headers , responseType: ResponseContentType.Blob }); 
      return this.http.post(url,value , options).map((response: Response) => {
          if(response != undefined && response != null){
              return new Blob([response.blob()], {type: 'application/pdf'}) 
          }
      })
  }

  uploadUsers(url:string, data:any) {
    return this.http.post(url, data)
    .map(this.extractData); 
  }

  getAllUsers(url:string, clientId):Observable < any >  {
     let headers = new Headers( {'Content-Type':'application/json', 'Access-Control-Allow-Origin':'*'}); 
     let options = new RequestOptions( {headers:headers}); 
    return this.http.post(url, clientId).map(this.extractData); 
  }

}//HttpService