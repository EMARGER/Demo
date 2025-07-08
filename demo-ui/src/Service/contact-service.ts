import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLService } from "./url-service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactService{
    constructor(private httpClient : HttpClient,private urlService : URLService){
        console.log("User Service : Object Created");
    }

    public save(requestView: any) :Observable<any> {
        return this.httpClient.post(this.urlService.postContactAPI,requestView);
    }
}