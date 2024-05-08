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
      heading: 'Welcome Back!',
      subHeading: 'Please login to your account',
      firstInputName: 'Email',
      firstInputType: 'email',
      secondInputName: 'Password',
      secondInputType: 'password',
      aTagText: 'Forgot Password?',
      aTagLink: '/forgot-password',
      leftButtonText: 'Login',
      leftButtonLink: '/login',
      rightButtonText: 'Sign Up',
      rightButtonLink: '/sign-up'
    }
  }
}
