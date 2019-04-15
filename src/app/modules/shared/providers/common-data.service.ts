import {Injectable } from '@angular/core'; 
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
//import { UrlDetails } from './model/url/url-details.model';
import { Http, Response , ResponseContentType } from '@angular/http'; 


@Injectable()
export class CommonDataService {

constructor(private httpService:HttpService) {}
    newDC:string;
     newCC:string;
    // getUpdatedNAmes(){
    //      let client = { id: StorageService.get("clientId") };
    //        console.log("client id is ",client);
    //        this.httpService.save(UrlDetails.$getPaymentSetting, client)
    //         .subscribe(response => {
    //              if (response.responseCode == 200) {
    //                   let paymentSetting = response.responseData;
    //                  if( paymentSetting.paymentOption.customPayment.length != 0){
    //                  paymentSetting.paymentOption.customPayment.forEach(cp => {
    //                        let temp = this.customPayment.findIndex(function (item) {
    //                        return item.originalName == cp.originalName;
    //                        });
    //                        if(temp != -1 && temp != undefined){
    //                          this.customPayment[temp].checked = true;
    //                          this.customPayment[temp].displayName=cp.displayName;
    //                           this.customPayment[temp].originalName=cp.originalName;
    //                          //this.customPaymentNew.push(cp);
    //                          if(cp.originalName == "Cost Center" ){
    //                               this.newCC= cp.displayName;
    //                          } else if (cp.originalName == "Deal Code"){
    //                              this.newDC= cp.displayName;
    //                          }
    //                        }
    //                      });
    //                    }
    //                    console.log("new custom Payment",this.customPayment); 
    //                    console.log("CC",this.newCC);
    //                 console.log("DC",this.newDC);
    //                 //   this.newNames=[this.newCC,this.newDC];
    //                 //   console.log("nEw names if CC  & DC",this.newNames);
    //              }
    //         })
    // }
}