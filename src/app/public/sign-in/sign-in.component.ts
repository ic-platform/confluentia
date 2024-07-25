import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentitcation/authentication.service';
import { UserModel } from '../../models/student-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ComponentsModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  paramObj: any = {};

  errorMessage: any | null = null;

  type: any = {
    colorful: true,
    white: false,
  }

  credentials: UserModel = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthenticationService) { 
    this.paramObj = {
      heading: 'Log In',
      subHeading: 'Entre com seu email e senha',
      firstInputName: 'Email',
      firstInputType: 'email',
      secondInputName: 'Senha',
      secondInputType: 'password',
      aTagText: 'Esqueceu a senha?',
      aTagRoute: '/forget-password',
      leftButtonText: 'Criar Conta',
      leftButtonFunc: () => {
        console.log('Sign Up');
        
        this.router.navigate(['/sign-up']);
      },
      rightButtonText: 'Entrar'
    };
  }

  async onLogin(credentials: { email: string; password: string }) {
      const { email, password } = credentials;

      console.log(email, password);

      try {
        const response = await this.authService.signIn(email, password);
        console.log('User logged in successfully', response);
        this.router.navigate(['/main']);
      } catch (error) {
        this.errorMessage = error;
        console.error('Login failed', error);
      }
  }
}
