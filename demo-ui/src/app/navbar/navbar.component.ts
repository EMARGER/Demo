import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-navbar",
  standalone: true,
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  imports: [CommonModule,RouterModule],
})
export class NavbarComponent {
constructor() {}
    // Add any additional logic or properties needed for the navbar
    // For example, you might want to handle user authentication state or navigation
    }