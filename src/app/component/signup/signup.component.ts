import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonNavbarComponent } from "../common-navbar/common-navbar.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FooterComponent, CommonNavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
