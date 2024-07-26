import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-with-navbar',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './header-with-navbar.component.html',
  styleUrl: './header-with-navbar.component.scss'
})
export class HeaderWithNavbarComponent {
  constructor() {}

  @Input() type: any = {
    colorful: false,
    white: false,
  }

  @Input() param: any = {};

  

}
