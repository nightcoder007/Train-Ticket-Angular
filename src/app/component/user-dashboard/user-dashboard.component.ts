import { Component } from '@angular/core';
import { CommonNavbarComponent } from "../common-navbar/common-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonNavbarComponent, FooterComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
