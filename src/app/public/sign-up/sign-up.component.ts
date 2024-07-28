import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserModel } from '../../models/student-model';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { HeaderJustLogoComponent } from '../../components/header-just-logo/header-just-logo.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderJustLogoComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  steps: { [key: string]: boolean } = { step1: false, step2: false }
  type: any = {
    colorful: true,
    white: false,
  }
  errorMessage: any | null = null;
  firstName: string | null = null;
  secondName: string | null = null;
  credentials: UserModel = {
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'student'
  };
  paramObj1: any = {};
  paramObj2: any = {};

  constructor(private router: Router, private authService: AuthenticationService ) {
    this.steps ={
      step1: true,
      step2: false,
    };

    this.paramObj1 = {
      heading: 'Criar Conta',
      subHeading: 'Entre com seu nome e sobrenome abaixo',
      firstInputName: 'Nome',
      firstInputType: 'text',
      secondInputName: 'Sobrenome',
      secondInputType: 'text',
      aTagText: 'Já possui conta?',
      aTagRoute: '/login',
      leftButtonText: 'Cancelar',
      leftButtonFunc: () => {
        console.log('Cancelar');
        
        this.router.navigate(['/home']);
      },
      rightButtonText: 'Próximo',
      rightButtonFunc: () => {
        console.log('Próxima Etapa');
        
        this.steps['step1'] = false;
        this.steps['step2'] = true;
      }
    };

    this.paramObj2 = {
      heading: 'Criar Conta',
      subHeading: 'Entre com seu melhor email e defina uma senha',
      firstInputName: 'E-mail',
      firstInputType: 'email',
      secondInputName: 'Senha',
      secondInputType: 'password',
      aTagText: 'Já possui conta?',
      aTagRoute: '/login',
      leftButtonText: 'Voltar',
      leftButtonFunc: () => {
        console.log('Voltar - Primeira Etapa');
        
        this.steps['step1'] = true;
        this.steps['step2'] = false;
      },
      rightButtonText: 'Criar Conta',
      rightButtonFunc: () => {
        console.log('Criando Conta');
        
        this.router.navigate(['/main']);
      }
    };

  }

  async onSignUp(credentials: UserModel) {
    // Setting first name and second into the variable name:
      credentials.name = this.firstName + " " + this.secondName;

    // Connecting to the server to sign up the user:
      const result = await this.authService.signUp(credentials);
    
    // Returning the result:
      console.log(result);
  }

}