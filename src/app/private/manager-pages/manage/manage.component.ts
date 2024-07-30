import { Component } from '@angular/core';
import { ComponentsModule } from '../../../components/components.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  type: any = {
    colorful: true,
    white: false,
  }
}
