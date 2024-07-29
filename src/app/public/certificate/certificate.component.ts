import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderWithNavbarComponent } from '../../components/header-with-navbar/header-with-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [HeaderComponent, HeaderWithNavbarComponent, CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  isUserLogged() {
    return false;
  }

  paramLogged = {
    buttonText: 'Menu',
    router: '/main'
  };

  paramNotLogged = {
    buttonText: 'Entrar',
    router: '/login'
  }

  type: any = {
    colorful: true,
    white: false,
  }
}
