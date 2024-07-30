import { Component } from '@angular/core';
import { HeaderJustLogoComponent } from '../../components/header-just-logo/header-just-logo.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HeaderJustLogoComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  type: any = {
    colorful: true,
    white: false,
  };
}
