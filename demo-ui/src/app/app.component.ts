import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from '../nav-component/nav.component';
import { ProjectComponent } from '../project-component/project.component';
import { ClientComponent } from '../client-component/client.component';
import { FooterComponent } from '../footer-component/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from '../banner-component/banner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavComponent,
    BannerComponent,
    ProjectComponent,
    ClientComponent,
    FooterComponent,
     HttpClientModule,
     FormsModule
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-ui';
}
