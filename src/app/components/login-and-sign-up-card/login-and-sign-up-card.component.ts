import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-and-sign-up-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-and-sign-up-card.component.html',
  styleUrl: './login-and-sign-up-card.component.scss'
})
export class LoginAndSignUpCardComponent {
  @Input() param: any = {
    heading: '',
    subHeading: '',
    firstInputName: '',
    firstInputType: '',
    secondInputName: '',
    secondInputType: '',
    aTagText: '',
    aTagLink: '',
    leftButtonText: '',
    leftButtonLink: '',
    rightButtonText: '',
    rightButtonLink: ''
  }

  constructor() {
    this.param = {
      heading: 'Log In',
      subHeading: 'Entre com seu email e senha',
      firstInputName: 'Email',
      firstInputType: 'email',
      secondInputName: 'Senha',
      secondInputType: 'password',
      aTagText: 'Esqueceu a senha?',
      aTagLink: '/forgot-password',
      leftButtonText: 'Criar Conta',
      leftButtonLink: '/sign-up',
      rightButtonText: 'Entrar',
      rightButtonLink: '/main'
    }
  }
}
