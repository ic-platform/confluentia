import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [ComponentsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  param = {
    buttonText: 'Menu',
    router: '/main'
  };

  type = {
    colorful: true,
    white: false,
  }

  constructor() { }

}
