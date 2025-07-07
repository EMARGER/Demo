import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  image: string;
  title: string;
  brief: string;
  isSold?: boolean; // Optional property for "SOLD"
}

@Component({
    selector: "app-project",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./our-project.component.html",
    styleUrls: ["./our-project.component.css"],
    })
export class OurProjectComponent implements OnInit {

  projects: Project[] = [
    { id: 1, image: 'assets/images/image1.jpg', title: 'Consultation', brief: 'Project brief - Northeast' },
    { id: 2, image: 'assets/images/image2.jpg', title: 'Design', brief: 'Project brief - Northeast' },
    { id: 3, image: 'assets/images/image3.jpg', title: 'Marketing & Design', brief: 'Project brief - Northeast' },
    { id: 4, image: 'assets/images/image4.jpg', title: 'Consultation & Marketing', brief: 'Project brief - Northeast', isSold: true },
    { id: 5, image: 'assets/images/image5.jpg', title: 'Consultation', brief: 'Project brief - Northeast' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onReadMore(project: Project): void {
    console.log('Read more clicked for:', project.title);
    // Implement navigation or modal logic here
  }
}