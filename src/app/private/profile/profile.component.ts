import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor() {}

  param = {
    buttonText: 'Menu',
    router: '/main'
  };
}
