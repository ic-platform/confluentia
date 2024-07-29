import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderWithNavbarComponent } from '../../components/header-with-navbar/header-with-navbar.component';
import { CommonModule } from '@angular/common';
import { certificateModel } from '../../models/certificate-model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderJustLogoComponent } from '../../components/header-just-logo/header-just-logo.component';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [HeaderComponent, HeaderWithNavbarComponent, HeaderJustLogoComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  certificateCodeToSearch: string = '';
  foundCertificate: certificateModel[] = [];

  certificates: certificateModel[] = [];

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

  notFound: string | null = null;

  isUserLogged() {
    return false;
  }

  searchCertificate(certificateCodeToSearch: string) {
    const result = "";

    if(result !== "") {
      this.foundCertificate = result;

    } else {
      this.notFound = "Certificado não encontrado";
    }
  }
}
