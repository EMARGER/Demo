import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-project", 
    templateUrl: "./project.component.html",
    styleUrls: ["./project.component.css"],
    imports: [CommonModule]
})
export class ProjectComponent {
    constructor() {
        console.log("ProjectComponent initialized");
    }

    
  projects = [
    {
      image: '../assets/image1.jpeg',
      title: 'Consultation'
    },
    {
      image: 'assets/image2.jpeg',
      title: 'Design'
    },
    {
      image: 'assets/image3.jpeg',
      title: 'Marketing & Design'
    },
    {
      image: 'assets/image4.jpeg',
      title: 'Consultation & Marketing'
    },
    {
      image: 'assets/image5.jpg',
      title: 'Consultation'
    }
  ];
}

