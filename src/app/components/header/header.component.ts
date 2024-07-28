import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() param = {
    buttonText: '',
    router: ''
  };

  constructor() {
    this.param = {
      buttonText: 'Default!',
      router: '/error-page'
    }
  }
}
