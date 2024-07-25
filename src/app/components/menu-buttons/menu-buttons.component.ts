import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-buttons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-buttons.component.html',
  styleUrl: './menu-buttons.component.scss'
})
export class MenuButtonsComponent {
  @Input() param = {
    iconPath: '',
    buttonName: '',
    link: ''
  }

  constructor() {
    this.param = {
      iconPath: './path/to/icon',
      buttonName: 'Button Name',
      link: '/error'
    }
  }
}
