import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-with-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-with-navbar.component.html',
  styleUrl: './header-with-navbar.component.scss'
})
export class HeaderWithNavbarComponent {
  @Input() param = {
    buttonText: '',
    router: ''
  };

  @Input() type: any = {
    colorful: false,
    white: false,
  };

  constructor() {
    this.param = {
      buttonText: 'Default!',
      router: '/error-page'
    }
  }
}
