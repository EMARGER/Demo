import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLService } from "./url-service";

@Injectable({
  providedIn: 'root'   
})
export class ClientService{

    constructor(private httpClient: HttpClient, private urlService: URLService) {
        console.log("Project SErvice Object Created");
    }
    public getAllClients(page: number, size: number) {
    const url = `${this.urlService.getAllClientAPI}?page=${page}&size=${size}`;
    return this.httpClient.get(url);
  }
}