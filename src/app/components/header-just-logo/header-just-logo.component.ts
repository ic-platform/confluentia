import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-just-logo',
  standalone: true,
  imports: [],
  templateUrl: './header-just-logo.component.html',
  styleUrl: './header-just-logo.component.scss'
})
export class HeaderJustLogoComponent {
  @Input() type: any = {
    colorful: false,
    white: false,
  };
}
