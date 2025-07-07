import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-client",
    templateUrl: "./client.component.html",
    styleUrls: ["./client.component.css"],
    imports: [CommonModule],
})
export class ClientComponent {
    constructor() {
        console.log("ClientComponent initialized");
    }

    clients = [
        {
            image: 'assets/client1.jpeg',
            feedback:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            name: 'Rowhan Smith',
            designation: 'CEO, Foreclosure',
        },
        {
            image: 'assets/client2.jpeg',
            feedback:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            name: 'Shipra Kayak',
            designation: 'Brand Designer',
        },
        {
            image: 'assets/client3.jpeg',
            feedback:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            name: 'John Lepore',
            designation: 'CEO, Foreclosure',
        },
        {
            image: 'assets/client4.jpeg',
            feedback:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            name: 'Marry Freeman',
            designation: 'Marketing Manager at Mixit',
        },
        
    ];
}


