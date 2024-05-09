import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  paramObj: any = {};

  constructor(private router: Router) { 
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
      rightButtonText: 'Entrar',
      rightButtonFunc: () => {
        console.log('Entrar');
        
        this.router.navigate(['/main']);
      }
    };
  }


}
