import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLService } from "./url-service";

@Injectable({
  providedIn: 'root'   
})
export class ProjectService{

    constructor(private httpClient: HttpClient, private urlService: URLService) {
        console.log("Project SErvice Object Created");
    }
    public getAllProjects(page: number, size: number) {
    const url = `${this.urlService.getAllProjectsAPI}?page=${page}&size=${size}`;
    return this.httpClient.get(url);
  }
}