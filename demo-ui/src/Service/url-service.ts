import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class URLService{
    public readonly baseURL: string = "http://localhost:1002/demo-api-local/";

    public readonly getAllProjectsAPI: string = this.baseURL + "project/all";
    public readonly getAllClientAPI: string = this.baseURL + "client/all";
    public readonly postContactAPI: string = this.baseURL + "contact/save";


    constructor() {
        console.log("URLService initialized with base URL:", this.baseURL);
    }
}
