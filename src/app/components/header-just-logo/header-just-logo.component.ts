import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-just-logo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-just-logo.component.html',
  styleUrl: './header-just-logo.component.scss'
})
export class HeaderJustLogoComponent {
  @Input() type: any = {
    colorful: false,
    white: false,
  };
}
