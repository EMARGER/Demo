import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProjectService } from "../Service/project-service";
import { URLService } from "../Service/url-service";

@Component({
    selector: "app-project", 
    templateUrl: "./project.component.html",
    styleUrls: ["./project.component.css"],
    imports: [
      CommonModule,
      
    ],
    providers: [ProjectService,URLService]

})
export class ProjectComponent {
    projects: any[] = [];
    constructor(private projectService: ProjectService) {
        console.log("ProjectComponent initialized");
        this.getAllProjects(0, 10);
    }

    public getAllProjects(page: number, size: number): void {
    this.projectService.getAllProjects(page, size).subscribe({
      next: (res: any) => {
        this.projects = res.data;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
    
  // projects = [
  //   {
  //     image: '../assets/image1.jpeg',
  //     title: 'Consultation'
  //   },
  //   {
  //     image: 'assets/image2.jpeg',
  //     title: 'Design'
  //   },
  //   {
  //     image: 'assets/image3.jpeg',
  //     title: 'Marketing & Design'
  //   },
  //   {
  //     image: 'assets/image4.jpeg',
  //     title: 'Consultation & Marketing'
  //   },
  //   {
  //     image: 'assets/image5.jpg',
  //     title: 'Consultation'
  //   }
  // ];
}

