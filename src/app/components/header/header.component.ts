import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
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
