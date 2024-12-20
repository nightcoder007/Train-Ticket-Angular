import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonNavbarComponent } from "../common-navbar/common-navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, CommonNavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
