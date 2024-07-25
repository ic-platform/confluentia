import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComponentsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  param = {
    buttonText: 'Entrar',
    router: '/login'
  };
}
