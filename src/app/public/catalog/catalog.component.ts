import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  type: any = {
    colorful: true,
    white: false,
  }
}
