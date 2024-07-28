import { Component } from '@angular/core';
import { HeaderJustLogoComponent } from "../../components/header-just-logo/header-just-logo.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [HeaderJustLogoComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss'
})
export class UpdatePasswordComponent {
  type: any = {
    colorful: true,
    white: false,
  }

  errorMessage: any | null = null;
  response: any | null = null;
  password: string = "";
  confPassword: string = "";

  constructor(private authService: AuthenticationService, private route: Router) { }

  onReset(password: string, confPassword: string ): void {
    this.errorMessage = null;
    this.response = null;

    if (password === confPassword) {
      this.authService.resetPassword(password);
      this.response = "Mudança realizada com sucesso";
      this.route.navigate(['/main']);
    } else {
      this.errorMessage = "As senhas não coincidem, tente novamente";
    }
  }
}