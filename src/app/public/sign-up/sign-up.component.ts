import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  steps: { [key: string]: boolean } = { step1: false, step2: false }
  paramObj1: any = {};
  paramObj2: any = {};

  constructor(private router: Router) {
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

}
