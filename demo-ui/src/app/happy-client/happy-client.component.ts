import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

interface ClientTestimonial {
  id: number;
  avatar: string;
  quote: string;
  name: string;
  title: string;
  location: string;
}

@Component({
    selector: "app-happy-client",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./happy-client.component.html",
    styleUrls: ["./happy-client.component.css"],
})
export class HappyClientComponent implements OnInit {
    testimonials: ClientTestimonial[] = [
        {
            id: 1,
      avatar: 'assets/avatars/avatar1.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Puautam Smith',
      title: 'CEO',
      location: 'New York'
    },
    {
      id: 2,
      avatar: 'assets/avatars/avatar2.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Srijana Kayak',
      title: 'CEO',
      location: 'Washington'
    },
    {
      id: 3,
      avatar: 'assets/avatars/avatar3.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'John Lepore',
      title: 'CEO',
      location: 'New Delhi'
    },
    {
      id: 4,
      avatar: 'assets/avatars/avatar4.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Marry Freeman',
      title: 'Marketing Manager',
      location: 'India'
    },
    {
      id: 5,
      avatar: 'assets/avatars/avatar5.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Lucy',
      title: 'Marketing',
      location: 'Mexico'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}