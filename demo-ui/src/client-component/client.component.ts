import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ClientService } from "../Service/client-service";
import { URLService } from "../Service/url-service";

@Component({
    selector: "app-client",
    templateUrl: "./client.component.html",
    styleUrls: ["./client.component.css"],
    imports: [CommonModule],
    providers: [
        ClientService,
        URLService
    ]
})
export class ClientComponent {
    clients: any[] = [];

    constructor(private clientService: ClientService) {
        console.log("ClientComponent initialized");
        this.getAllClients(0, 10);
    }

    public getAllClients(page: number, size: number): void {
        this.clientService.getAllClients(page, size).subscribe({
            next: (res: any) => {
                this.clients = res.data;
            },
            error: (err) => {
                console.error('Error:', err);
            }
        });
    }

    // clients = [
    //     {
    //         image: 'assets/client1.jpeg',
    //         feedback:
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //         name: 'Rowhan Smith',
    //         designation: 'CEO, Foreclosure',
    //     },
    //     {
    //         image: 'assets/client2.jpeg',
    //         feedback:
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //         name: 'Shipra Kayak',
    //         designation: 'Brand Designer',
    //     },
    //     {
    //         image: 'assets/client3.jpeg',
    //         feedback:
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //         name: 'John Lepore',
    //         designation: 'CEO, Foreclosure',
    //     },
    //     {
    //         image: 'assets/client4.jpeg',
    //         feedback:
    //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    //         name: 'Marry Freeman',
    //         designation: 'Marketing Manager at Mixit',
    //     },

    // ];
}


