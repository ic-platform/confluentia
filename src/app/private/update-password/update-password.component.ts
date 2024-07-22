import { Component } from '@angular/core';
import { HeaderJustLogoComponent } from "../../components/header-just-logo/header-just-logo.component";

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [HeaderJustLogoComponent],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {
  type: any = {
    colorful: true,
    white: false,
  }

  constructor() { }
}
