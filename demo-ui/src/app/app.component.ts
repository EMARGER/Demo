import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { BannerComponent } from './banner/banner.component';
import { RealtorComponent } from './realtor/realtor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,OurProjectComponent,HappyClientComponent ,BannerComponent,RealtorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-ui';
}
