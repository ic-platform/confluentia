import { Component } from '@angular/core';
import { HeaderJustLogoComponent } from "../../components/header-just-logo/header-just-logo.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [HeaderJustLogoComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  type: any = {
    colorful: true,
    white: false,
  }

  errorMessage: any | null = null;

  response: any | null = null;

  email: string = '';

  constructor(private authService: AuthenticationService) { }

  async onReset(email: string): Promise<void>{
    const response = await this.authService.forgotPassword(email);

    this.response = response;
  }

}