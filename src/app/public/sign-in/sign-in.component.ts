import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentitcation/authentication.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  paramObj: any = {};

  constructor(private router: Router, private authService: AuthenticationService) { 
    this.paramObj = {
      heading: 'Log In',
      subHeading: 'Entre com seu email e senha',
      firstInputName: 'Email',
      firstInputType: 'email',
      secondInputName: 'Senha',
      secondInputType: 'password',
      aTagText: 'Esqueceu a senha?',
      aTagRoute: '/forgot-password',
      leftButtonText: 'Criar Conta',
      leftButtonFunc: () => {
        console.log('Sign Up');
        
        this.router.navigate(['/sign-up']);
      },
      rightButtonText: 'Entrar'
    };
  }

  onLogin(credentials: { email: string; password: string }) {
    this.paramObj.rightButtonFunc = async () => {
      console.log('Entrar');

      const { email, password } = credentials;

      console.log(email, password);

      try {
        const response = await this.authService.signIn(email, password);
        console.log('User logged in successfully', response);
        this.router.navigate(['/main']);
      } catch (error) {
        console.error('Login failed', error);
      }
    };
  }
}
